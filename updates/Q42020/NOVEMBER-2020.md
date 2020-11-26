# SKALE Network Product Updates (OCTOBER 2020)

These updates are posted in: 

-   <https://github.com/skalenetwork/skale-network/tree/master/updates>
-   <https://forum.skale.network/>
-   [SKALE Discord](https://discord.gg/vvUtWJB)

If you would like to suggest changes, please post, discuss, or open a GitHub issue respective of the channels listed above.

## Month focus

During November, the team was mostly focused on:

-   Mainnet Phase 2 support and bug fixes


## Code changes

November:

**SKALE Manager ()**

-   Fixed Bounty V2 migrartion issue [\[PR#419\]](https://github.com/skalenetwork/skale-manager/pull/419)
-   Added independent audits references to the documentation[\[PR#420\]](https://github.com/skalenetwork/skale-manager/pull/420)
-   Added name check as a part of the IMA improvements [\[PR#423\]](https://github.com/skalenetwork/skale-manager/pull/423)
-   Merged release artifacts to the develop branch [\[PR#426\]](https://github.com/skalenetwork/skale-manager/pull/426)
-   Added range check as part of the Crypto audit enhancements [\[PR#427\]](https://github.com/skalenetwork/skale-manager/pull/427)
-   Added support of 1/32 of a node configuration for the schains launch [\[PR#431\]](https://github.com/skalenetwork/skale-manager/pull/431)
-   Updated dependencies

**SKALE Consensus**

-   Added BLAKE3 hashing as a part of the performance improvements [\[PR#282\]](https://github.com/skalenetwork/skale-consensus/pull/282), [\[PR#283\]](https://github.com/skalenetwork/skale-consensus/pull/283), [\[PR#284\]](https://github.com/skalenetwork/skale-consensus/pull/284), [\[PR#286\]](https://github.com/skalenetwork/skale-consensus/pull/286)
-   Fixed libBLS build after latest libff update [\[PR#285\]](https://github.com/skalenetwork/skale-consensus/pull/285)
-   Updated libBLS [\[PR#288\]](https://github.com/skalenetwork/skale-consensus/pull/288)
-   Removed incorrect warning [\[PR#289\]](https://github.com/skalenetwork/skale-consensus/pull/289)
-   Fixed stop after assert in BlockProposalClientAgent[\[PR#290\]](https://github.com/skalenetwork/skale-consensus/pull/290)
-   Fixed busy wait in NetworkReadLoop if there are no messages [\[PR#291\]](https://github.com/skalenetwork/skale-consensus/pull/291)
-   Fixed sending too many rebroadcasts [\[PR#292\]](https://github.com/skalenetwork/skale-consensus/pull/292), [\[PR#293\]](https://github.com/skalenetwork/skale-consensus/pull/293)
-   Fixed: don't do an ECDSA signature check on a default block[\[PR#294\]](https://github.com/skalenetwork/skale-consensus/pull/294)
-   Fixed retry to SGX when the server is down [\[PR#295\]](https://github.com/skalenetwork/skale-consensus/pull/295)
-   Fixed empty block time is consensus [\[PR#296\]](https://github.com/skalenetwork/skale-consensus/pull/296)

**SGXWallet ()**

-   Fixed memory leak in BLS [\[PR#194\]](https://github.com/skalenetwork/SGXWallet/pull/194)
-   Extended tests for DKG procedure [\[PR#195\]](https://github.com/skalenetwork/SGXWallet/pull/195)
-   Added ECDSA key import [\[PR#196\]](https://github.com/skalenetwork/SGXWallet/pull/196)
-   Updated libBLS [\[PR#197\]](https://github.com/skalenetwork/SGXWallet/pull/197), [\[PR#199\]](https://github.com/skalenetwork/SGXWallet/pull/199)
-   Performance improvements: added fast ECDSA signatures [\[PR#200\]](https://github.com/skalenetwork/SGXWallet/pull/200)
-   Updated SGX wallet to always use signed enclave for SGX hardware builds [\[PR#201\]](https://github.com/skalenetwork/SGXWallet/pull/201)
-   Fixed SGX init crash on GitHub actions [\[PR#208\]](https://github.com/skalenetwork/SGXWallet/pull/208)
-   Removed SetDKGPoly call [\[PR#210\]](https://github.com/skalenetwork/SGXWallet/pull/210)
-   GitHub actions CI process improvements [\[PR#213\]](https://github.com/skalenetwork/SGXWallet/pull/213), [\[PR#215\]](https://github.com/skalenetwork/SGXWallet/pull/215)
-   Fixed SGX_ERROR_OUT_OF_TCS  [\[PR#219\]](https://github.com/skalenetwork/SGXWallet/pull/219)
-   Added nightly tests  [\[PR#224\]](https://github.com/skalenetwork/SGXWallet/pull/224), [\[PR#225\]](https://github.com/skalenetwork/SGXWallet/pull/225)
-   Intel Whitelisting submission [\[PR#226\]](https://github.com/skalenetwork/SGXWallet/pull/226), [\[PR#227\]](https://github.com/skalenetwork/SGXWallet/pull/227), [\[PR#228\]](https://github.com/skalenetwork/SGXWallet/pull/228), [\[PR#229\]](https://github.com/skalenetwork/SGXWallet/pull/229), [\[PR#230\]](https://github.com/skalenetwork/SGXWallet/pull/230), [\[PR#231\]](https://github.com/skalenetwork/SGXWallet/pull/231), [\[PR#232\]](https://github.com/skalenetwork/SGXWallet/pull/232), [\[PR#233\]](https://github.com/skalenetwork/SGXWallet/pull/233), [\[PR#234\]](https://github.com/skalenetwork/SGXWallet/pull/234)

**SKALED ()**

-   Fixed snapshots issue [\[PR#370\]](https://github.com/skalenetwork/skaled/pull/370)
-   Fixed skaled build after latest libff update [\[PR#371\]](https://github.com/skalenetwork/skaled/pull/371)
-   Fixed download snapshot if one of 15 nodes are offline [\[PR#373\]](https://github.com/skalenetwork/skaled/pull/373)
-   Fixed skaled build [\[PR#374\]](https://github.com/skalenetwork/skaled/pull/374)
-   Fixed skaled crash due to skale_nodesRpcInfo call [\[PR#376\]](https://github.com/skalenetwork/skaled/pull/376)
-   Updated IMA messages verification [\[PR#379\]](https://github.com/skalenetwork/skaled/pull/379)
-   Renamed snapshotInterval parameter [\[PR#380\]](https://github.com/skalenetwork/skaled/pull/380)
-   Updated skaled container workflow [\[PR#381\]](https://github.com/skalenetwork/skaled/pull/381), [\[PR#382\]](https://github.com/skalenetwork/skaled/pull/382)
-   Fixed skaled tests [\[PR#385\]](https://github.com/skalenetwork/skaled/pull/385)
-   Updated skaled with the most recent fixes from consensus [\[PR#386\]](https://github.com/skalenetwork/skaled/pull/386), [\[PR#388\]](https://github.com/skalenetwork/skaled/pull/388)
-   Added downloading snapshot from a random node [\[PR#387\]](https://github.com/skalenetwork/skaled/pull/387)
-   Fixed IMA transfer for ERC20 and ERC721 tokens [\[PR#389\]](https://github.com/skalenetwork/skaled/pull/389)
-   Generated new built-in IMA contracts for S-Chain [\[PR#390\]](https://github.com/skalenetwork/skaled/pull/390)
-   Fixed default level logs [\[PR#391\]](https://github.com/skalenetwork/skaled/pull/391)
-   Closed debug interface [\[PR#393\]](https://github.com/skalenetwork/skaled/pull/393)

**SKALE Admin ()**

-   Fixed dry run disabling [\[PR#327\]](https://github.com/skalenetwork/skale-admin/pull/327)
-   Restructured allocation file, refactored containers limits [\[PR#328\]](https://github.com/skalenetwork/skale-admin/pull/328)
-   Added IMA supporting SGX wallet [\[PR#331\]](https://github.com/skalenetwork/skale-admin/pull/331)
-   Fixed schain block mining [\[PR#332\]](https://github.com/skalenetwork/skale-admin/pull/332)
-   Moved wallet send API to RPC [\[PR#333\]](https://github.com/skalenetwork/skale-admin/pull/333)
-   Renamed snapshotInterval parameter [\[PR#335\]](https://github.com/skalenetwork/skale-admin/pull/335)
-   Added sChain blocks check, refactored SChainChecks, added tests [\[PR#336\]](https://github.com/skalenetwork/skale-admin/pull/336)
-   Temporary commented out IMA [\[PR#337\]](https://github.com/skalenetwork/skale-admin/pull/337)
-   Filtered empty schains structures [\[PR#338\]](https://github.com/skalenetwork/skale-admin/pull/338)
-   Fixed ALLOWED_TIMESTAMP_DIFF type [\[PR#339\]](https://github.com/skalenetwork/skale-admin/pull/339)
-   Fix IMA container execution in creator [\[PR#340\]](https://github.com/skalenetwork/skale-admin/pull/340)
-   Fixed IMA cleaner [\[PR#341\]](https://github.com/skalenetwork/skale-admin/pull/341)
-   Changed cleaner time during DKG process [\[PR#342\]](https://github.com/skalenetwork/skale-admin/pull/342)
-   Removed deprecated set-env syntax form publish workflow [\[PR#343\]](https://github.com/skalenetwork/skale-admin/pull/343)
-   Added catch failure after type 2 complaint (DKG process)  [\[PR#344\]](https://github.com/skalenetwork/skale-admin/pull/344)
-   Changed SchainType for medium schain [\[PR#345\]](https://github.com/skalenetwork/skale-admin/pull/345)
-   Temporary commented out IMA  [\[PR#346\]](https://github.com/skalenetwork/skale-admin/pull/346)
-   Updated CODEOWNERS  [\[PR#348\]](https://github.com/skalenetwork/skale-admin/pull/348)
-   Restructured Telegram notifications  [\[PR#349\]](https://github.com/skalenetwork/skale-admin/pull/349)

**IMA ()**

-   Added SGX Wallet support [\[PR#299\]](https://github.com/skalenetwork/ima/pull/299)
-   Added OZ upgradable structure [\[PR#300\]](https://github.com/skalenetwork/ima/pull/300)
-   Updated IMA Docker part [\[PR#302\]](https://github.com/skalenetwork/ima/pull/302)
-   Moved to solidity 0.6.0 and added try/catch support [\[PR#303\]](https://github.com/skalenetwork/ima/pull/300)
-   Improved IMA agent command line for invoking tests [\[PR#307\]](https://github.com/skalenetwork/ima/pull/307)
-   Changed IMA protocol preference to contact skaled (JSON RPC)  [\[PR#308\]](https://github.com/skalenetwork/ima/pull/308)
-   Added docs to IMA LockAndData contracts[\[PR#309\]](https://github.com/skalenetwork/ima/pull/309)
-   Added additional IMA improvements [\[PR#311\]](https://github.com/skalenetwork/ima/pull/311)
-   Fixed tests coverage [\[PR#312\]](https://github.com/skalenetwork/ima/pull/312)
-   Added docs to ERC20ModuleForMainnet [\[PR#313\]](https://github.com/skalenetwork/ima/pull/313)
-   Removed run.js script [\[PR#314\]](https://github.com/skalenetwork/ima/pull/314)
-   removed redundant and test contracts from coverage reports [\[PR#315\]](https://github.com/skalenetwork/ima/pull/315)
-   Updated TokenManager.sol  [\[PR#316\]](https://github.com/skalenetwork/ima/pull/316)
-   Fixed run register only on sChain side [\[PR#317\]](https://github.com/skalenetwork/ima/pull/317)
-   Added transaction manager support [\[PR#318\]](https://github.com/skalenetwork/ima/pull/318)
-   Set up semver versioning process [\[PR#320\]](https://github.com/skalenetwork/ima/pull/320)
-   Fixed link node addresses [\[PR#321\]](https://github.com/skalenetwork/ima/pull/321)
-   Fixed IMA data generator script  [\[PR#322\]](https://github.com/skalenetwork/ima/pull/322)
-   Changed registration step “Add schain in LockAndData” [\[PR#325\]](https://github.com/skalenetwork/ima/pull/325)
-   Fixed waited feature and names [\[PR#326\]](https://github.com/skalenetwork/ima/pull/326)
-   Replaced deprecated set-env in publish pipeline [\[PR#327\]](https://github.com/skalenetwork/ima/pull/327)
-   Added registration step Mainnet on schain [\[PR#329\]](https://github.com/skalenetwork/ima/pull/329)
-   Fixed incorrectly handled chain ID [\[PR#330\]](https://github.com/skalenetwork/ima/pull/330)
-   Fixed registration [\[PR#331\]](https://github.com/skalenetwork/ima/pull/331)
-   Updated ownable contracts [\[PR#339\]](https://github.com/skalenetwork/ima/pull/339)
-   Updated CODEOWNERS [\[PR#340\]](https://github.com/skalenetwork/ima/pull/340)
-   Updated dependencies
