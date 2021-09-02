#!/usr/bin/env python3

from genericpath import isfile
import json
import logging
import os
import requests


def get_root_path():
    return os.path.abspath(
        os.path.join(
            os.path.dirname(os.path.realpath(__file__)),
            '../../..'))


def download_predeployed(version: str) -> dict:
    url = 'https://github.com/skalenetwork/IMA/' + \
        f'releases/download/{version}/ima-{version}-predeployed-abi.json'
    response = requests.get(url, allow_redirects=True)
    if response.status_code != 200:
        raise ConnectionError("Failed to download predeployed abi")
    return json.loads(response.content)


def normalize_contract_name(name: str) -> str:
    if name == 'message_proxy_mainnet':
        return normalize_contract_name('message_proxy_for_mainnet')
    if name == 'message_proxy_chain':
        return normalize_contract_name('message_proxy_for_schain')
    if name == 'eth_erc20':
        return 'ErhErc20'
    if 'erc' in name:
        return normalize_contract_name(name.replace('erc', 'e_r_c_'))
    return ''.join([word[0].upper() + word[1:] for word in name.split('_')])


def prepare_mainnet_artifacts(mainnet_abi_and_addresses: dict) -> dict:
    artifacts = {}
    for key in mainnet_abi_and_addresses:
        if key.endswith('_address'):
            address = mainnet_abi_and_addresses[key]
            raw_name = key[:-len('_address')]
            abi = mainnet_abi_and_addresses[raw_name + '_abi']
            artifacts = {**artifacts, **{normalize_contract_name(raw_name): {
                'address': address,
                'abi': abi
            }}}
    return artifacts


def prepare_schain_artifacts(version: str) -> dict:
    artifacts = {}
    normalized_version = normalize_version(version)
    branch, number = normalized_version.split('-')[-1].split('.')
    number = int(number)
    if (branch == 'develop' and number <= 148) \
            or (branch == 'beta' and number <= 2):
        logging.warning(f'Skip schain ABIs for version {version}')
        return artifacts
    predeployed_abi = download_predeployed(normalized_version)
    for key in predeployed_abi:
        raw_name = '_'.join(key.split('_')[:-1])
        name = normalize_contract_name(raw_name)
        if name not in artifacts:
            artifacts[name] = {}
        if key.endswith('_address'):
            artifacts[name]['address'] = predeployed_abi[key]
        elif key.endswith('_abi'):
            artifacts[name]['abi'] = predeployed_abi[key]
        else:
            raise ValueError(f'Unknown key: {key}')
    return artifacts


def prepare_artifacts(
    version: str,
    mainnet_abi_and_addresses: dict
) -> dict:
    return {version: {
        'mainnet': prepare_mainnet_artifacts(mainnet_abi_and_addresses),
        'schain': prepare_schain_artifacts(version)
    }}


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
    artifacts_dir = os.path.join(
                            get_root_path(),
                            'packages/ima-artifacts/deployments')
    for deployment in os.listdir(releases_path):
        item = os.path.join(releases_path, deployment)
        if os.path.isdir(item):
            if IMA_DIR not in os.listdir(item):
                logging.warning(f'{IMA_DIR} folder is missing in {item}')
            else:
                deployments_dir = os.path.join(item, IMA_DIR)
                artifacts_filename = os.path.join(
                    artifacts_dir,
                    f'{deployment}.json')
                if os.path.exists(artifacts_filename):
                    raise ValueError(f'{artifacts_filename} already exists')
                artifacts = {}
                for version in os.listdir(deployments_dir):
                    with open(
                        find_abi_and_addresses_file(
                            os.path.join(deployments_dir, version))) as f:
                        artifacts = {
                            **artifacts,
                            **prepare_artifacts(version, json.load(f))}
                with open(artifacts_filename, 'w') as f:
                    json.dump(artifacts, f, sort_keys=True, indent=4)


def main():
    parse_abis()


if __name__ == '__main__':
    main()
