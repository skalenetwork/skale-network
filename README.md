# SKALE Network
 <img src="https://github.com/user-attachments/assets/e25b683d-874b-478a-9964-b589076d749c" width="300" height="300" style="border:1px solid #ccc"/>

The SKALE Network is an open-source, Ethereum-native multichain network built to scale Ethereum dApps with a focus on high-throughput, fast finality, and **zero gas fee** transactions via the native gas token sFUEL.

## SKALE key features 

- **Zero gas fee** - by design, developers and end-users never pay for transactions.
- **Instant finality** - the fastest chain to finality. Time to finality = blocktime.
- **High performance**
  - **Throughput** - an average throughput of 800 transactions per second (TPS) for each SKALE chain.
  - **High block gas limit** - 268 million block gas limit enables optimal throughput and allows complex transactions and smart contracts to be executed efficiently.
- **Purpose-built chains** - app-chains and hub-chains for customization and and horizontal scaling.
- **Native bridge** - fast and flexible, offering an average of 18-second finality between chains. Provides native support for popular token standards such as ERC-20, ERC-721, and ERC-1155, along with the flexibility to pass arbitrary data via a low-level messaging protocol.
- **Native oracle** - native, fully decentralized oracle is available on SKALE Chains, capable of reading smart contracts from other EVM-compatible chains as well as accessing public off-chain data.
- **Decentralization and fault tolerance** - Each SKALE chain is supported by 16 randomly selected and periodically rotated SKALE validator nodes, with Byzantine Fault Tolerance (BFT) allowing for up to 1/3 of nodes to be faulty or malicious.
- **Layered Blockchain Security** - A unique hybrid design powers a network of Layer 1 blockchains, enhanced by additional security derived from the “brain of SKALE” — a core system operating on Ethereum.

### 🛠️ Tech Stack

SKALE is an EVM-compatible network featuring a custom EVM implementation written in C++.
The following are currently supported:

- Solidity `≤ 0.8.24`
- EVM Compiler Version: `≤ Shanghai`

## SKALE Block Exprorers 

SKALE Chains support any EVM-compatible block explorer, such as Etherscan or Blockscout.
By default, SKALE Chains run with the [SKALE Blockscout explorer](https://github.com/skalenetwork/blockscout)

SKALE Blocksout allow users to:

- Providing access to essential on-chain data
- Tools to interact with smart contracts
- Ability to quickly view and verify transactions

## SKALE Portal 

[SKALE Portal](https://portal.skale.space/) is a web-based interface providing:
- User-friendly way to transfer assets and data between different SKALE Chains and the Ethereum Mainnet enabling greater flexibility and scalability for decentralized applications (dApps)
- SKL staking
- Essential developer resources including chain IDs, RPC endpoints, explorer links, and more.

## Documentation & Resources
- [Developer Docs](https://docs.skale.space/) - All latest documentation
- [Guide getting Started on SKALE](https://skale.space/get-started-on-skale) This guide outlines the essential steps for getting started in the SKALE ecosystem. From adding SKALE Chains to a wallet, to bridging assets between chains, and utilizing sFUEL, it includes everything needed to progress from beginner to advanced user.
- [Whitepaper (EN)](https://skale.network/whitepaper)
  - [中文 (CN)](https://skale.network/skalenetwork_whitepaper-CN)
  - [한국어 (KO)](https://skale.network/skalenetwork_whitepaper-KO)
  - [日本語 (JP)](https://skale.network/skalenetwork_whitepaper-JA)
- [Open Source Plan and Community](OPEN_SOURCE_PLAN.md)

## SKALE projects 
- [SKALE Consensus](https://github.com/skalenetwork/skale-consensus) - SKALE Consensus is an ultra-high-performance blockchain consensus engine written in C++.
- [SKALED](https://github.com/skalenetwork/skaled) - Skaled is SKALE Proof-Of-Stake blockchain client, compatible with ETH ecocystem, including EVM, Solidity, Metamask and Truffle. It uses SKALE BFT Consensus engine.
- [SKALE Manager](https://github.com/skalenetwork/skale-manager) - SKALE Manager is a smart contract system that orchestrates and manages the operations of the SKALE Network. It controls Nodes, Validators, and SKALE Chains, and includes contracts for managing the SKALE Token, Distributed Key Generation (DKG), and BLS signature verification.
- [SKALE Admin](https://github.com/skalenetwork/skale-admin) - SKALE Admin is a core component of the SKALE Node architecture. It operates within a containerized environment, running isolated environments for each chain to ensure scalability and security. The SKALE Admin Docker container is responsible for orchestrating all other SKALE-related Docker containers.
- [SGX wallet](https://github.com/skalenetwork/sgxwallet) - SGXWallet is SKALE’s secure, next-generation hardware crypto wallet based on Intel® SGX. It supports Ethereum and SKALE, with all key generation and signing performed inside a secure SGX enclave—ensuring private keys never leave the enclave unencrypted. Running as a network server, SGXWallet provides a registration service that issues client certificates, with manual admin approval for each registration.
- [SKALE Bridge IMA](https://github.com/skalenetwork/IMA) - SKALE’s Interchain Messaging Agent (IMA) is a decentralized, high-performance message transport layer and bridging protocol. The unique design and flexiblity of IMA allows every SKALE Chain to be joined together into an interconnected web of blockchains that make up the SKALE Network. IMA (Interchain Messaging Agent) provides the most advanced, secure, and cost-effective solution for moving assets between Ethereum and SKALE chains.
- [SKALE libBLS](https://github.com/skalenetwork/libBLS) - libBLS is a high-performance C++ cryptographic library implementing Boneh–Lynn–Shacham (BLS) signatures, threshold encryption, and Distributed Key Generation (DKG). It supports threshold signatures, aggregate (multi-)signatures, and is Solidity-compatible for seamless integration with EVM-based smart contracts.
Actively maintained and utilized by SKALE, libBLS underpins critical protocol-level functions including Byzantine Fault Tolerant (BFT) consensus, verifiable distributed randomness, interchain messaging, and cryptographic protection of on-chain transactions.
- [BITE Protocol library](https://github.com/skalenetwork/bite-ts) - BITE (Blockchain Integrated Threshold Encryption) is an extension of SKALE’s provably secure consensus protocol, enabling encrypted transaction processing.`bite.ts` is a TypeScript library for interacting with the BITE protocol. It encrypts transaction data using BLS public keys and appends metadata such as a magic number and epoch ID for secure and verifiable transmission.


## SKALE Releases
- [Releases](/releases)

## SKALE Communities
- [SKALE Developer Community on Discord](http://skale.chat)
- [SKALE Communities](https://skale.network/communities)
- [SKALE Forum](https://forum.skale.network/)

## Community Built Tools

- [SKALE Manager Subgraph](https://thegraph.com/explorer/subgraph/ministry-of-decentralization/skale-manager-subgraph)
- [ChorusOne SKALE Tools for Validators](https://github.com/ChorusOne/skale-tools)
- [ConsenSys Activate Staking Portal](https://activate.codefi.network/staking/skale/validators)
- [EverStake Delegation Notifications](https://github.com/everstake/skale-delegations-notificationbot)
- [StakingRewards Staking Portal](https://www.stakingrewards.com/earn/skale)
