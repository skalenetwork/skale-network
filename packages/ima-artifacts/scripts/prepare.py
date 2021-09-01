from genericpath import isfile
import json
import logging
import os
dir_path = os.path.dirname(os.path.realpath(__file__))


def get_root_path():
    return os.path.abspath(
        os.path.join(
            os.path.dirname(os.path.realpath(__file__)),
            '../../..'))


def prepare_deployment(
    deployment: str,
    version: str,
    mainnet_abi_and_addresses: dict
):
    print(deployment, version, len(mainnet_abi_and_addresses.keys()))


def find_abi_and_addresses_file(directory: str):
    abi_key = 'abi'
    abi_file = [f for f
                in os.listdir(directory)
                if os.path.isfile(os.path.join(directory, f)) and abi_key in f]
    if len(abi_file) != 1:
        raise ValueError(f'Can\'t find abi file in {directory}')
    else:
        return os.path.join(directory, abi_file[0])


def normalize_version(version: str) -> str:
    if '-' in version:
        return version
    else:
        return f'{version}-stable.0'


def parse_abis():
    IMA_DIR = 'IMA'
    releases_path = os.path.join(get_root_path(), 'releases')
    for deployment in os.listdir(releases_path):
        item = os.path.join(releases_path, deployment)
        if os.path.isdir(item):
            if IMA_DIR not in os.listdir(item):
                logging.warning(f'{IMA_DIR} folder is missing in {item}')
            else:
                deployments_dir = os.path.join(item, IMA_DIR)
                for version in os.listdir(deployments_dir):
                    with open(
                        find_abi_and_addresses_file(
                            os.path.join(deployments_dir, version))) as f:
                        prepare_deployment(
                            deployment,
                            normalize_version(version),
                            json.load(f))


def main():
    parse_abis()


if __name__ == '__main__':
    main()
