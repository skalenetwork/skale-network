# SKALE Network
 <img src="https://github.com/user-attachments/assets/e25b683d-874b-478a-9964-b589076d749c" width="300" height="300" style="border:1px solid #ccc"/>

The SKALE Network is an open-source, Ethereum-native multichain network built to scale Ethereum dApps with a focus on high-throughput, fast finality, and **zero gas fee** transactions via the native gas token sFUEL.

## What does SKALE offer?

- **Zero gas fees** - by design, developers and end-users never pay for transactions.
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
By default, SKALE Chains run with the Blockscout explorer, providing access to essential on-chain data, tools to interact with smart contracts, and the ability to quickly view and verify transactions.

[Explore more](https://github.com/skalenetwork/blockscout)

## SKALE Portal 

The SKALE Portal is a web-based interface providing a user-friendly way to transfer assets and data between different SKALE Chains and the Ethereum Mainnet, enabling greater flexibility and scalability for decentralized applications. It also offers key features such as SKL staking and essential developer resources including chain IDs, RPC endpoints, explorer links, and more.

[Visit the SKALE Portal](https://portal.skale.space/)

## Documentation
For the latest documentation, please visit: https://docs.skale.space/ 

## Get Started on SKALE

This guide outlines the essential steps for getting started in the SKALE ecosystem. From adding SKALE Chains to a wallet, to bridging assets between chains, and utilizing sFUEL, it includes everything needed to progress from beginner to advanced user.

[Get started on SKALE](https://skale.space/get-started-on-skale)

## SKALE Whitepaper 
- [Whitepaper](https://skale.network/whitepaper)
- [Whitepaper CN (中文)](https://skale.network/skalenetwork_whitepaper-CN)
- [Whitepaper KO (한국어)](https://skale.network/skalenetwork_whitepaper-KO)
- [Whitepaper JP](https://skale.network/skalenetwork_whitepaper-JA)

## SKALE Releases
- [Releases](/releases)

## Other Resources

- [Open Source Plan and Community](OPEN_SOURCE_PLAN.md)
- [Roadmap](https://skale.network/roadmap)

## SKALE Communities
- [SKALE Developer Community on Discord](http://skale.chat)
- [SKALE Communities](https://skale.network/communities)

## Community Built Tools

- [SKALE Manager Subgraph](https://thegraph.com/explorer/subgraph/ministry-of-decentralization/skale-manager-subgraph)
- [ChorusOne SKALE Tools for Validators](https://github.com/ChorusOne/skale-tools)
- [ConsenSys Activate Staking Portal](https://activate.codefi.network/staking/skale/validators)
- [EverStake Delegation Notifications](https://github.com/everstake/skale-delegations-notificationbot)
- [StakingRewards Staking Portal](https://www.stakingrewards.com/earn/skale)
