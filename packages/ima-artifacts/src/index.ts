import * as fs from "fs";

import { deploymentsDirName } from "./params";

interface IContractData {
    /**
     * ABI of the contract
     */
    abi: [];

    /**
     * Address of the contract
     */
    address: string;
}

interface IAllDeployments {
    [version: string]: IDeploymentData;
}

interface IDeploymentData {
    /**
     * Contracts on mainnet
     */
    mainnet: {
        [key: string]: IContractData;
    };

    /**
     * Contracts on schain
     */
    schain: {
        [key: string]: IContractData;
    };
}

const jsonExtension: string = ".json";

const throwIfUnknownDeployment: (deployment: string) => void = (deployment: string): void => {
    if (!getDeployments()
        .includes(deployment)) {
        throw ReferenceError(`${deployment} is unknown IMA instance`);
    }
};

const normalizeVersion: (version: string) => string = (version: string): string => {
    if (!version.includes("-")) {
        return `${version}-stable.0`;
    }

    return version;
};

const higherPriorityBranch: (branch1: string, branch2: string) => boolean =
    (branch1: string, branch2: string): boolean => {
    const priority: string[] = ["develop", "beta", "stable"];
    if (branch1 === branch2) {
        return false;
    }
    const priority1: number = priority.indexOf(branch1);
    const priority2: number = priority.indexOf(branch2);

    return priority1 > priority2;
};

const olderVersion: (version1: string, version2: string) => boolean = (version1: string, version2: string): boolean => {
    const [semver1String, build1 ] = normalizeVersion(version1)
                                        .split("-");
    const [semver2String, build2 ] = normalizeVersion(version2)
                                        .split("-");
    const semver1: number[] = semver1String
                                .split("-")
                                .map(Number);
    const semver2: number[] = semver2String
                                .split("-")
                                .map(Number);
    for (let i: number = 0; i < Math.max(semver1.length, semver2.length); i += 1) {
        const v1: number = i < semver1.length ? semver1[i] : 0;
        const v2: number = i < semver2.length ? semver2[i] : 0;
        if (v1 < v2) {
            return true;
        }
        if (v1 > v2) {
            return false;
        }
    }
    // Semver is equal
    const [branch1, number1String] = build1.split("-");
    const [branch2, number2String] = build2.split("-");
    const number1: number = Number(number1String);
    const number2: number = Number(number2String);
    if (branch1 === branch2) {
        return number1 < number2;
    }
    if (higherPriorityBranch(branch2, branch1)) {
        return true;
    }

    return false;
};

export const getDeployments: () => string[] = (): string[] =>
    fs.readdirSync(deploymentsDirName)
        .filter((filename: string): boolean => filename.endsWith(jsonExtension))
        .map((filename: string): string =>
            (filename.endsWith(jsonExtension) ? filename.slice(0, -jsonExtension.length) : filename));

export const getVersions: (deployment: string) => string[] = (deployment: string): string[] => {
    throwIfUnknownDeployment(deployment);
    const allDeployments: IAllDeployments = JSON.parse(
        fs.readFileSync(`${deploymentsDirName}/${deployment}${jsonExtension}`, "utf-8")) as IAllDeployments;

    return Object.keys(allDeployments);
};

export const getArtifactsByVersion: (deployment: string, version: string) => IDeploymentData =
    (deployment: string, version: string): IDeploymentData => {
    throwIfUnknownDeployment(deployment);
    const allDeployments: IAllDeployments = JSON.parse(
        fs.readFileSync(`${deploymentsDirName}/${deployment}${jsonExtension}`, "utf-8")) as IAllDeployments;
    if (Object.keys(allDeployments)
        .includes(version)) {
        return allDeployments[version];
    }
    throw ReferenceError(`There is no IMA instance of ${version} version`);
};

/**
 * Get IMA smart contracts addresses and ABIs
 * @param deployment identifier of IMA deployment
 * @returns Deployment data
 */
export const getArtifacts: (deployment: string) => IDeploymentData = (deployment: string): IDeploymentData => {
    const version: string = getVersions(deployment)
                                .reduce((version1: string, version2: string): string => {
        if (olderVersion(version1, version2)) {
            return version2;
        }

        return version1;
    });

    return getArtifactsByVersion(deployment, version);
};
