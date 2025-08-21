# SKALE Network
 <img src="https://github.com/user-attachments/assets/e25b683d-874b-478a-9964-b589076d749c" width="300" height="300" style="border:1px solid #ccc" alt="SKALE Network Token Graphic" />

## Summary

The SKALE Network is an open-source, Ethereum-native multichain network built to scale Ethereum dApps with a focus on high-throughput, fast finality, and **zero gas fee** transactions.

## SKALE Key Features 

- **Zero gas fees** - by design, developers and end-users never pay for transactions. This enables compatiblity with EVM tooling.
- **Gasless Transactions** - native functionality that elevates zero gas fees with an invisible user experience
- **Instant finality** - the fastest chain to finality. Time to finality = blocktime.
- **High performance**
  - **Throughput** - an average throughput of 800 transactions per second (TPS) for each SKALE chain. The network as a whole has no theoretical cap on throughput.
  - **High block gas limit** - 268 million block gas limit enables optimal throughput and allows complex transactions and larger smart contracts to be executed efficiently.
- **Purpose-built chains** - app-chains and hub-chains for customization and horizontal scaling.
- **Native bridge** - fast and flexible, offering an average of 18-second finality between chains. Provides native support for popular token standards such as ERC-20, ERC-721, and ERC-1155, along with the flexibility to pass arbitrary data via a low-level messaging protocol.
- **Native oracle** - native, fully decentralized oracle is available on SKALE Chains, capable of reading smart contracts from other EVM-compatible chains as well as accessing public off-chain data.
- **Decentralization and fault tolerance** - Each SKALE chain is supported by 16 randomly selected and periodically rotated SKALE validator nodes, with Byzantine Fault Tolerance (BFT) allowing for up to 1/3 of nodes to be faulty or malicious.
- **Layered Blockchain Security** - A unique hybrid design powers a network of Layer 1 blockchains, enhanced by additional security derived from the “brain of SKALE” — a core system operating on Ethereum.

## 🛠️ Tech Stack

SKALE is an EVM-compatible network featuring a custom EVM implementation written in C++.
The following are currently supported:

- Solidity `≤ 0.8.24`
- EVM Compiler Version: `≤ Shanghai`

### SKALE Block Explorers

SKALE Chains support any EVM-compatible block explorers, such as Etherscan or Blockscout.

By default, SKALE Chains run with the [SKALE Blockscout explorer](https://github.com/skalenetwork/blockscout)

SKALE Blockscout provides:

- Access to essential onchain data
- Tools to interact with smart contracts
- Ability to quickly view and verify transactions

### SKALE Portal 

[SKALE Portal](https://portal.skale.space/) is a web-based interface that provides:
- A user-friendly interface for transferring assets and data between SKALE Chains and the Ethereum Mainnet, enabling greater flexibility and scalability for dApps
- SKL staking interface
- Essential developer resources including chain IDs, RPC endpoints, explorer links, and more

### Documentation & Resources
- [Developer Docs](https://docs.skale.space/) - Up-to-date documentation
- [SKALE Getting Started Guide](https://skale.space/get-started-on-skale) The Getting Started Guide covers all essential steps for onboarding into the SKALE ecosystem — from adding SKALE Chains to a wallet, bridging assets, to using sFUEL. It includes everything needed to progress from beginner to advanced user.
- [Whitepaper (EN)](https://skale.network/whitepaper)
  - [中文 (CN)](https://skale.network/skalenetwork_whitepaper-CN)
  - [한국어 (KO)](https://skale.network/skalenetwork_whitepaper-KO)
  - [日本語 (JP)](https://skale.network/skalenetwork_whitepaper-JA)
- [Open Source Plan and Community](OPEN_SOURCE_PLAN.md)

### [SKALE Consensus](https://github.com/skalenetwork/skale-consensus)

SKALE Consensus is an ultra-high-performance blockchain consensus engine written in C++.

### [SKALED](https://github.com/skalenetwork/skaled)

Skaled is the SKALE Proof-Of-Stake blockchain client, compatible with the Ethereum ecosystem, including EVM, Solidity, Metamask, and Truffle.


### [SKALE Manager](https://github.com/skalenetwork/skale-manager)

SKALE Manager is a smart contract system that orchestrates and manages the operations of the SKALE Network. It controls Nodes, Validators, and SKALE Chains, and includes contracts for managing the SKALE Token, Distributed Key Generation (DKG), and BLS signature verification.


### [SKALE Admin](https://github.com/skalenetwork/skale-admin) 

SKALE Admin is a core component of the SKALE Node architecture. It operates within a containerized environment, running isolated environments for each chain to ensure scalability and security. The SKALE Admin Docker container is responsible for orchestrating all other SKALE-related Docker containers.

### [SGX Wallet](https://github.com/skalenetwork/sgxwallet)

SGX Wallet is SKALE’s secure, next-generation hardware crypto wallet based on Intel® SGX. It supports Ethereum and SKALE, with all key generation and signing performed inside a secure SGX enclave—ensuring private keys never leave the enclave unencrypted. Running as a network server, SGX Wallet provides a registration service that issues client certificates, with manual admin approval for each registration.

### [SKALE Bridge IMA](https://github.com/skalenetwork/IMA)

SKALE’s Interchain Messaging Agent (IMA) is a decentralized, high-performance message transport layer and bridging protocol. The unique design and flexibility of IMA allows every SKALE Chain to be joined together into an interconnected web of blockchains that make up the SKALE Network. IMA provides the most advanced, secure, and cost-effective solution for moving assets between Ethereum and SKALE chains.


### [SKALE libBLS](https://github.com/skalenetwork/libBLS)

libBLS is a high-performance C++ cryptographic library implementing Boneh–Lynn–Shacham (BLS) signatures, threshold encryption, and Distributed Key Generation (DKG). It supports threshold signatures, aggregate (multi-)signatures, and is Solidity-compatible for seamless integration with EVM-based smart contracts.

Actively maintained and utilized by SKALE, libBLS underpins critical protocol-level functions including Byzantine Fault Tolerant (BFT) consensus, verifiable distributed randomness, interchain messaging, and cryptographic protection of on-chain transactions.


### [BITE Protocol library](https://github.com/skalenetwork/bite-ts)

BITE (Blockchain Integrated Threshold Encryption) is an extension of SKALE’s provably secure consensus protocol, enabling encrypted transaction processing.

`bite.ts` is a TypeScript library for interacting with the BITE protocol. It encrypts transaction data using BLS public keys and appends metadata such as a magic number and epoch ID for secure and verifiable transmission.


## SKALE Releases
- [Releases](/releases)

## SKALE Communities
- [SKALE Developer Community on Discord](http://skale.chat)
- [SKALE Communities](https://skale.network/communities)
- [SKALE Forum](https://forum.skale.network/)

## Community-Built Tools

- [SKALE Manager Subgraph](https://thegraph.com/explorer/subgraph/ministry-of-decentralization/skale-manager-subgraph)
- [ChorusOne SKALE Tools for Validators](https://github.com/ChorusOne/skale-tools)
- [ConsenSys Activate Staking Portal](https://activate.codefi.network/staking/skale/validators)
- [EverStake Delegation Notifications](https://github.com/everstake/skale-delegations-notificationbot)
- [StakingRewards Staking Portal](https://www.stakingrewards.com/earn/skale)
- [sFUEL Station](https://github.com/dirt-road-development/sfuel-station)
- [Gasless SDK](https://www.npmjs.com/package/@eidolon-labs/gasless)


## FAQs

### Q: What is SKALE?

SKALE is a network of Layer 1 blockchains called SKALE Chains.
Every SKALE Chain operates independently and can be compared to a mini Ethereum, while still leveraging the shared security of the broader SKALE Network.

### Q: Why does SKALE exist?

SKALE was created to solve the scalability and usability issues of Ethereum. Over the past 5 years it has evolved into one of the few truly innovative blockchains in the world and is home to hundreds of builders interested in leveraging decentralized technology without being limited by gas fees, slow transaction times, congestion, and archaic user experiences.

### Q: Is SKALE a Layer 1, Layer 2, or Layer 3?

Every SKALE Chain is a Layer 1 blockchain. SKALE is not a Layer 2 or Layer 3 solution.

SKALE Manager -- the brain of SKALE -- does live on the Ethereum mainnet today, however, each and every
SKALE Chain maintains its own state independently of Ethereum and leverages the SKALE shared validator pool, not Ethereum validators.

> SKALE is not a rollup, sidechain, or state channel solution. Every SKALE Chain maintains its own local ledger across a subset of SKALE Nodes.

### Q: How are there zero gas fees?

The SKALE Network -- which is governed by the SKALE DAO -- has a blockchain-as-a-service style fee structure in place.
SKALE Chain Owners are in charge of paying into the SKALE Network for their SKALE Chain each month in a process similar to "rent".
This fee structure is designed to be predictable and transparent while also being as stable as possible to ensure that chain owners can plan for the future while
taking advantage of superior unit economics in the short term.

### Q: What is the SKL token used for?

The SKL token is the utility token of the SKALE Network. It is used for:

| Use Case | Description |
| --- | --- |
| Staking | SKL is staked by validators to create nodes and secure the network |
| Bounties | SKL is rewarded back to validators each month in the form of bounties |
| Payment | SKL is used to pay for SKALE Chain on the Europa Hub |
| Governance | SKL is used to calculate voting power and meter proposal creation in the SKALE DAO |

### Q: Is SKALE EVM compatible?

Yes, SKALE Chains are EVM compatible. This means that developers can deploy their Solidity smart contracts to
SKALE Chains with little to no modification. SKALE Chains are also compatible with the vast majority of Ethereum tooling and infrastructure such as
[Foundry](https://foundry.sh), [MetaMask](https://metamask.io), [Remix](https://remix.ethereum.org), and more!

### Q: Is there a main "SKALE chain"?

No, there is no main "SKALE chain". Every SKALE Chain is independent and operates on its own. The SKALE Network is a collection of many chains. If you are a user looking to start using SKALE, head over to the [Getting Started](https://skale.space/get-started-on-skale) page on the SKALE website.

SKALE also has [FAIR](https://fairchain.ai) -- which is the ecosystems Layer 1 -- which is currently in develompent and will soon be the home to FAIR.