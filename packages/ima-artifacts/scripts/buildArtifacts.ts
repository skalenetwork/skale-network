import * as fs from "fs";
import { deploymentsDirName } from "../src/params";

function verifyDeploymentJson(deploymentData: object) {
    const networks = ["mainnet", "schain"];
    for (const network of networks) {
        if (! (network in deploymentData)) {
            throw Error(`${network} contracts do not present in deployment data`);
        }
    }
}

function main() {
    fs.readdirSync(deploymentsDirName).forEach( deploymentFilename => {
        const deploymentJson = JSON.parse(fs.readFileSync(`${deploymentsDirName}/${deploymentFilename}`, "utf-8"));
        verifyDeploymentJson(deploymentJson);
    })
}

main();
