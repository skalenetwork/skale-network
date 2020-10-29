
# SKALE Network Product Updates (OCTOBER 2020)

These updates are posted in: 

-   <https://github.com/skalenetwork/skale-network/tree/master/updates>
-   <https://forum.skale.network/>
-   [SKALE Discord](https://discord.gg/vvUtWJB)

If you would like to suggest changes, please post, discuss, or open a GitHub issue respective of the channels listed above.

## Month focus

During this month, key areas that the team was focused on, are:

-   Mainnet Phase 2 support and bug fixes
-   DKG process improvements and gas usage optimizations
-   Bounty algorithm updates to make payments per calendar month
-   Schains enhancements and stability features in Skaled
-   SKALE Consensus: moving to BLAKE3 hash, OpenSSL for ECDSA verification and other performance improvements
-   IMA Beta release preparations and additional features

## Code changes

October:

**SKALE Manager (1.6.0-develop.0)**

-   Added specification documents including DKG process, nodes and schains [\[PR#409\]](https://github.com/skalenetwork/skale-manager/pull/409)
-   Moved from Owner permission to Admin permission in setNodeInMaintenance and removeNodeFromInMaintenance functions [\[PR#403\]](https://github.com/skalenetwork/skale-manager/pull/403)
-   Updates to response function in DKG [\[PR#404\]](https://github.com/skalenetwork/skale-manager/pull/404)
-   Move complaintTimelimit to ConstantsHolder [\[PR#408\]](https://github.com/skalenetwork/skale-manager/pull/408)
-   Updated ECDH reference [\[PR#411\]](https://github.com/skalenetwork/skale-manager/pull/411)
-   Updated Bounty algorithm to make payments per calendar month [\[PR#413\]](https://github.com/skalenetwork/skale-manager/pull/413)
-   Update dependencies

**SKALE Consensus**

-   Switch consensus to use FastJSON [\[PR#264\]](https://github.com/skalenetwork/skale-consensus/pull/264)
-   Use OpenSSL for ECDSA verification [\[PR#265\]](https://github.com/skalenetwork/skale-consensus/pull/265), [\[PR#266\]](https://github.com/skalenetwork/skale-consensus/pull/266), [\[PR#267\]](https://github.com/skalenetwork/skale-consensus/pull/267)
-   Fixed to SGX Wallet module [\[PR#268\]](https://github.com/skalenetwork/skale-consensus/pull/268)
-   Fix for OpenSSL usage [\[PR#269\]](https://github.com/skalenetwork/skale-consensus/pull/269)
-   Cleaned consensus db if consensus is stopped in a middle of consensus [\[PR#270\]](https://github.com/skalenetwork/skale-consensus/pull/270)
-   Passed all shared pointers as const reference[\[PR#271\]](https://github.com/skalenetwork/skale-consensus/pull/271)
-   Fixed timeout exception when connecting to SGX [\[PR#272\]](https://github.com/skalenetwork/skale-consensus/pull/272), [\[PR#273\]](https://github.com/skalenetwork/skale-consensus/pull/273), [\[PR#274\]](https://github.com/skalenetwork/skale-consensus/pull/274)
-   Build fixes [\[PR#275\]](https://github.com/skalenetwork/skale-consensus/pull/275)
-   Used faster OpenSSL curve for consensus message signing [\[PR#276\]](https://github.com/skalenetwork/skale-consensus/pull/276), [\[PR#278\]](https://github.com/skalenetwork/skale-consensus/pull/278)
-   Fixes for emptyBlockIntervalMs [\[PR#277\]](https://github.com/skalenetwork/skale-consensus/pull/277)
-   Used fast signatures for data availability proofs [\[PR#279\]](https://github.com/skalenetwork/skale-consensus/pull/279)
-   Adopted RapidJSON in consensus for performance improvements [\[PR#280\]](https://github.com/skalenetwork/skale-consensus/pull/280)
-   Added BLAKE3 Hash to consensus for performance improvements [\[PR#281\]](https://github.com/skalenetwork/skale-consensus/pull/281)

**SGXWallet (1.58.5-develop.10)**

-   Fixed stable version naming [\[PR#186\]](https://github.com/skalenetwork/SGXWallet/pull/186)
-   Fixed BLS keys import, allowing only Hex [\[PR#188\]](https://github.com/skalenetwork/SGXWallet/pull/188)
-   Separated response and complaint functions [\[PR#190\]](https://github.com/skalenetwork/SGXWallet/pull/190)
-   Updated to use Intel signed version by default [\[PR#191\]](https://github.com/skalenetwork/SGXWallet/pull/191)
-   Added additional tests for Response functionality [\[PR#193\]](https://github.com/skalenetwork/SGXWallet/pull/193), [\[PR#195\]](https://github.com/skalenetwork/SGXWallet/pull/195)
-   Added ECDSA key import [\[PR#196\]](https://github.com/skalenetwork/SGXWallet/pull/196)

**SKALED (1.46.0-develop.3)**

-   Added DDOS protection [\[PR#356\]](https://github.com/skalenetwork/skaled/pull/356)
-   Snapshots functionality improvements [\[PR#357\]](https://github.com/skalenetwork/skaled/pull/357)
-   Fixes for snapshots downloading[\[PR#358\]](https://github.com/skalenetwork/skaled/pull/358)
-   Adopting RapidJSON in Skaled [\[PR#359\]](https://github.com/skalenetwork/skaled/pull/359)
-   Fixed eth_getTransactionReceipt: return status as 0x string [\[PR#360\]](https://github.com/skalenetwork/skaled/pull/360)
-   Fixed logic of starting with existing snapshots, fixed logic of maintaining 2 last snapshots [\[PR#361\]](https://github.com/skalenetwork/skaled/pull/361)
-   Merged OpenSSL fixes in consensus [\[PR#363\]](https://github.com/skalenetwork/skaled/pull/363)
-   Improved Un-DDOS setting defaults in skaled [\[PR#364\]](https://github.com/skalenetwork/skaled/pull/364)
-   Fixed semantic versioning to include patch number[\[PR#365\]](https://github.com/skalenetwork/skaled/pull/365)
-   Adopted consensus enhancements if consensus is stopped in a middle of consensus [\[PR#366\]](https://github.com/skalenetwork/skaled/pull/366), [\[PR#367\]](https://github.com/skalenetwork/skaled/pull/367)
-   Add consensus with fixed failed::proposalVectorDB NodeGettersSetters [\[PR#368\]](https://github.com/skalenetwork/skaled/pull/368)


**SKALE Admin (1.1.0-develop.4)**

-   Improved telegram call handling [\[PR#236\]](https://github.com/skalenetwork/skale-admin/pull/236)
-   DKG: supporting new complaint and response functions [\[PR#313\]](https://github.com/skalenetwork/skale-admin/pull/313)
-   Added autorepair functionality for the sChains with state root mismatch [\[PR#314\]](https://github.com/skalenetwork/skale-admin/pull/314)
-   Updated skale.py version [\[PR#315\]](https://github.com/skalenetwork/skale-admin/pull/315)
-   Added migrations for SQLite DB [\[PR#316\]](https://github.com/skalenetwork/skale-admin/pull/316)
-   Updated getting DKG timeout from SKALE Manager [\[PR#317\]](https://github.com/skalenetwork/skale-admin/pull/317)
-   Fixed volume and container checks after repair [\[PR#319\]](https://github.com/skalenetwork/skale-admin/pull/319)
-   Added UnDDOS options to sChain config [\[PR#323\]](https://github.com/skalenetwork/skale-admin/pull/323)
-   Added option to turn off dry run [\[PR#324\]](https://github.com/skalenetwork/skale-admin/pull/324), [\[PR#327\]](https://github.com/skalenetwork/skale-admin/pull/327)
-   Fixed response/pre_response transactions [\[PR#325\]](https://github.com/skalenetwork/skale-admin/pull/325)
-   Update dependencies

**IMA (v1.0.0-develop.45)**

-   Collected Gas usage statistics [\[PR#291\]](https://github.com/skalenetwork/ima/pull/291)
-   Fixed wait for S-Chain started by default and added sanity check [\[PR#292\]](https://github.com/skalenetwork/ima/pull/292)
-   Fixed IMA agent infinite wait until S-Chain started[\[PR#297\]](https://github.com/skalenetwork/ima/pull/297)
-   Added ERC20 tokens address mapping protection when operating the raw transfer methods[\[PR#298\]](https://github.com/skalenetwork/ima/pull/298)

**SKALE Node CLI (1.1.0-develop.8)**

-   Added `sudo` to allow non-root to run the script [\[PR#314\]](https://github.com/skalenetwork/skale-node-cli/pull/314)
-   Wrap mysql credentials for cli use in quotes [\[PR#317\]](https://github.com/skalenetwork/skale-node-cli/pull/317)
-   Fixed repair mode [\[PR#318\]](https://github.com/skalenetwork/skale-node-cli/pull/318)
-   Moved CI process to GitHub actions [\[PR#319\]](https://github.com/skalenetwork/skale-node-cli/pull/319)
-   Added command to turn off a node [\[PR#324\]](https://github.com/skalenetwork/skale-node-cli/pull/324)
-   Added inited check to the init cmd [\[PR#325\]](https://github.com/skalenetwork/skale-node-cli/pull/325)
-   Fixed temporary comment out docker-lvmpy update [\[PR#330\]](https://github.com/skalenetwork/skale-node-cli/pull/330)
-   Returned docker_lvmpy_update script [\[PR#331\]](https://github.com/skalenetwork/skale-node-cli/pull/331)
-   Removed docker-compose install [\[PR#332\]](https://github.com/skalenetwork/skale-node-cli/pull/332)
-   Fixed scripts packaging [\[PR#333\]](https://github.com/skalenetwork/skale-node-cli/pull/333)
-   Added dry run turn off [\[PR#337\]](https://github.com/skalenetwork/skale-node-cli/pull/337)
-   Updated dependencies

**Validator CLI (1.2.0-develop.3)**

-   Added option to change name/info [\[PR#215\]](https://github.com/skalenetwork/validator-cli/pull/215)
-   Fixed GitHub actions publish workflow [\[PR#218\]](https://github.com/skalenetwork/validator-cli/pull/218)
-   Updated dependencies

**sla-agent (1.0.2-develop.2)**

-   Removed multithreading [\[PR#89\]](https://github.com/skalenetwork/sla-agent/pull/89)
-   Fix for not checking deleted schains [\[PR#87\]](https://github.com/skalenetwork/sla-agent/pull/87)
-   Updated dependencies

**bounty-agent (1.1.0-develop.0)**

-   Update bounty event naming [\[PR#86\]](https://github.com/skalenetwork/bounty-agent/pull/86)
-   Improved init logs [\[PR#87\]](https://github.com/skalenetwork/bounty-agent/pull/87)
-   Updated reward date logic for sending getBounty tx [\[PR#88\]](https://github.com/skalenetwork/bounty-agent/pull/88)
-   Updated dependencies

**SKALE.py (4.1dev15)**

-   Added validator option to set name and set description [\[PR#302\]](https://github.com/skalenetwork/skale.py/pull/302)
-   updated DKG response and complaint functions [\[PR#303\]](https://github.com/skalenetwork/skale.py/pull/303)
-   Additional fix for DKG process [\[PR#311\]](https://github.com/skalenetwork/skale.py/pull/311)
-   Added option to disable dry run [\[PR#317\]](https://github.com/skalenetwork/skale.py/pull/317)
-   Fixed DEFAULT_GAS_LIMIT [\[PR#319\]](https://github.com/skalenetwork/skale.py/pull/319)
-   Updated dependencies

**Transaction-manager (1.0.0-develop.2)**

-   Added helper-scripts submodule [\[PR#117\]](https://github.com/skalenetwork/transaction-manager/pull/117)
-   Updated dependencies

**sgx.py (0.6dev14)**

-   Added new API call for separate response function (DKG) [\[PR#80\]](https://github.com/skalenetwork/sgx.py/pull/80)
-   Updated dependencies
