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

/**
 * Get IMA smart contracts addresses and ABIs
 * @param deployment identifier of IMA deployment
 * @returns Deployment data
 */
export const getArtifacts: (deployment: string) => IDeploymentData = (deployment: string): IDeploymentData => {
    const extension: string = ".json";
    const deploymentsNames: string[] =
        fs.readdirSync(deploymentsDirName)
        .map((filename: string): string =>
            (filename.endsWith(extension) ? filename.slice(0, -extension.length) : filename));
    if (deploymentsNames.includes(deployment)) {
        return JSON.parse(
                fs.readFileSync(`${deploymentsDirName}/${deployment}${extension}`, "utf-8")) as IDeploymentData;
    }
    throw ReferenceError(`${deployment} is unknown IMA instance`);
};
