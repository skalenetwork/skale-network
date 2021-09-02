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
    [version: string]: IDeploymentData
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

const throwIfUnknownDeployment: (deployment: string) => void = (deployment: string):void => {
    if (!getDeployments().includes(deployment)) {
        throw ReferenceError(`${deployment} is unknown IMA instance`);
    }
}

const normalizeVersion: (version: string) => string = (version: string): string => {
    if (!version.includes('-')) {
        return `${version}-stable.0`;
    } else {
        return version;
    }
}

const higherPriorityBranch: (branch1: string, branch2: string) => boolean = (branch1: string, branch2: string):boolean => {
    const priority = ['develop', 'beta', 'stable'];
    if (branch1 == branch2) {
        return false;
    } else {
        const priority1 = priority.indexOf(branch1);
        const priority2 = priority.indexOf(branch2);
        return priority1 > priority2;
    }
}

const olderVersion: (version1: string, version2: string) => boolean = (version1: string, version2: string):boolean => {
    const [semver1String, build1, ] = normalizeVersion(version1).split('-')
    const [semver2String, build2, ] = normalizeVersion(version2).split('-')
    const semver1 = semver1String.split('.').map((v) => Number(v))
    const semver2 = semver2String.split('.').map((v) => Number(v))
    for (let i = 0; i < Math.max(semver1.length, semver2.length); ++i) {
        const v1 = i < semver1.length ? semver1[i] : 0;
        const v2 = i < semver2.length ? semver2[i] : 0;
        if (v1 < v2) {
            return true;
        } else if (v1 > v2) {
            return false;
        }
    }
    // semver is equal
    const [branch1, number1String] = build1.split('.');
    const [branch2, number2String] = build2.split('.');
    const number1 = Number(number1String);
    const number2 = Number(number2String);
    if (branch1 == branch2) {
        return number1 < number2;
    } else {
        if (higherPriorityBranch(branch1, branch2)) {
            return false;
        } else {
            return true;
        }
    }
}

export const getDeployments: () => string[] = (): string[] => {
    return fs.readdirSync(deploymentsDirName)
        .filter((filename: string) => filename.endsWith(jsonExtension))
        .map((filename: string): string =>
            (filename.endsWith(jsonExtension) ? filename.slice(0, -jsonExtension.length) : filename));
}

export const getVersions: (deployment: string) => string[] = (deployment: string): string[] => {
    throwIfUnknownDeployment(deployment);
    const allDeployments = JSON.parse(
        fs.readFileSync(`${deploymentsDirName}/${deployment}${jsonExtension}`, "utf-8")) as IAllDeployments;
    return Object.keys(allDeployments);
}

export const getArtifactsByVersion: (deployment: string, version: string) => IDeploymentData = (deployment: string, version: string): IDeploymentData => {
    throwIfUnknownDeployment(deployment);
    const allDeployments = JSON.parse(
        fs.readFileSync(`${deploymentsDirName}/${deployment}${jsonExtension}`, "utf-8")) as IAllDeployments;
    if (Object.keys(allDeployments).includes(version)) {
        return allDeployments[version];
    } else {
        throw ReferenceError(`There is no IMA instance of ${version} version`);
    }
}

/**
 * Get IMA smart contracts addresses and ABIs
 * @param deployment identifier of IMA deployment
 * @returns Deployment data
 */
export const getArtifacts: (deployment: string) => IDeploymentData = (deployment: string): IDeploymentData => {
    const version = getVersions(deployment).reduce((version1: string, version2: string) => {
        if (olderVersion(version1, version2)) {
            return version2;
        } else {
            return version1;
        }
    });
    console.log(version);
    return getArtifactsByVersion(deployment, version);
};
