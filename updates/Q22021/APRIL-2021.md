# SKALE Network Product Updates (APRIL 2021)

These updates are posted in: 

-   <https://github.com/skalenetwork/skale-network/tree/master/updates>
-   <https://forum.skale.network/>
-   [SKALE Discord](https://discord.gg/vvUtWJB)

If you would like to suggest changes, please post, discuss, or open a GitHub issue respective of the channels listed above.

## Month focus

During April, the team has been mostly working on:

-   


## Code changes

April:

**SKALE Manager (1.8.0-develop.34)**

-   Added skale-manager-interfaces [\[PR#566\]](https://github.com/skalenetwork/skale-manager/pull/566)
-   Updated dependencies

**SKALE Consensus**

-   Removed not needed database locks [\[PR#402\]](https://github.com/skalenetwork/skale-consensus/pull/402)
-   Increased min gas price [\[PR#403\]](https://github.com/skalenetwork/skale-consensus/pull/403)
-   Fixed ERC721 transfer bug in New IMA Flow [\[PR#407\]](https://github.com/skalenetwork/skale-consensus/pull/407)
-   Fixed сatchup hangs for long catchups [\[PR#410\]](https://github.com/skalenetwork/skale-consensus/pull/410)
-   Added OpenSSL with no-asm optimizations [\[PR#413\]](https://github.com/skalenetwork/skale-consensus/pull/413)
-   ZeroMQ enhancements [\[PR#414\]](https://github.com/skalenetwork/skale-consensus/pull/414)
-   Added Exit when SGX is stuck [\[PR#415\]](https://github.com/skalenetwork/skale-consensus/pull/415)
-   Fixed CatchupServerAgent stuck after some time [\[PR#416\]](https://github.com/skalenetwork/skale-consensus/pull/416)
-   Added exception in getPrice() [\[PR#418\]](https://github.com/skalenetwork/skale-consensus/pull/418)
-   Fixed Price test [\[PR#420\]](https://github.com/skalenetwork/skale-consensus/pull/420)
-   Fixed ZeroMQ hang [\[PR#421\]](https://github.com/skalenetwork/skale-consensus/pull/421)
-   Added more exits in BlockFinalizeDownloader [\[PR#423\]](https://github.com/skalenetwork/skale-consensus/pull/423)
-   Fixed ZeroMQ stuck [\[PR#424\]](https://github.com/skalenetwork/skale-consensus/pull/424)

**SKALED (3.6.1-develop.1)/(3.5.12-stable.1)**

-   Fixed 1 catchup thread [\[PR#551\]](https://github.com/skalenetwork/skaled/pull/551)
-   Fixed IMA message verification [\[PR#554\]](https://github.com/skalenetwork/skaled/pull/554)
-   Fix 11 out of 16 and catchup timeout in consensus [\[PR#555\]](https://github.com/skalenetwork/skaled/pull/555)
-   skaled access control improvements [\[PR#563\]](https://github.com/skalenetwork/skaled/pull/563)
-   Fixed IMA compatibilitiy [\[PR#566\]](https://github.com/skalenetwork/skaled/pull/566)
-   Fixed json rpc call [\[PR#569\]](https://github.com/skalenetwork/skaled/pull/569)
-   Snapshot improvements   [\[PR#572\]](https://github.com/skalenetwork/skaled/pull/572)
-   Fixed parsing id json rpc [\[PR#575\]](https://github.com/skalenetwork/skaled/pull/575)
-   Added exit if stateRoot mismatch in empty block [\[PR#576\]](https://github.com/skalenetwork/skaled/pull/576)

**SGXWallet (1.73.0-develop.4)/(1.70.0-stable.1)**

-   Fixed graceful exit [\[PR#290\]](https://github.com/skalenetwork/SGXWallet/pull/290)
-   Updated documentation [\[PR#292\]](https://github.com/skalenetwork/SGXWallet/pull/292)
-   Bumped signed enclave version [\[PR#294\]](https://github.com/skalenetwork/SGXWallet/pull/294)
-   Fixed typo [\[PR#301\]](https://github.com/skalenetwork/SGXWallet/pull/301)
-   Updated documentation [\[PR#304\]](https://github.com/skalenetwork/SGXWallet/pull/304), [\[PR#305\]](https://github.com/skalenetwork/SGXWallet/pull/305)
-   Fixed stuck on ZeroMQ check [\[PR#312\]](https://github.com/skalenetwork/SGXWallet/pull/312)
-   Updated latest release container name [\[PR#313\]](https://github.com/skalenetwork/SGXWallet/pull/313)

**IMA (1.0.0-develop.179)**

-   Fixув all-skale/functional test based on latest IMA/skale-manager/skaled [\[PR#506\]](https://github.com/skalenetwork/ima/pull/506)
-   Berlin fork compatibility fix [\[PR#512\]](https://github.com/skalenetwork/ima/pull/512)
-   Code cleanup, fixed compatibility issie with various web3 js versions [\[PR#518\]](https://github.com/skalenetwork/ima/pull/518)
-   Added BLS signature verification for mainnet -> schain messages [\[PR#520\]](https://github.com/skalenetwork/ima/pull/520)
-   Fixed erc721 vulnerability [\[PR#523\]](https://github.com/skalenetwork/ima/pull/523)
-   Added test tokens [\[PR#529\]](https://github.com/skalenetwork/ima/pull/529)
-   Renamed require message and removed unused publicKey  [\[PR#530\]](https://github.com/skalenetwork/ima/pull/530)
-   Accumulative logging in IMA agent [\[PR#551\]](https://github.com/skalenetwork/ima/pull/551)
-   Implemented monitoring ws rpc server [\[PR#553\]](https://github.com/skalenetwork/ima/pull/553)
-   Updated dependencies

**SKALE Admin (2.0.0-develop.22)/(1.1.0-stable.1)**

-   Added chainId for IMA [\[PR#496\]](https://github.com/skalenetwork/skale-admin/pull/496)
-   Fixed Read rotate_after_block from schain allocation file [\[PR#497\]](https://github.com/skalenetwork/skale-admin/pull/497)
-   Fixed DKG typo [\[PR#498\]](https://github.com/skalenetwork/skale-admin/pull/498)
-   Precompileds protection [\[PR#499\]](https://github.com/skalenetwork/skale-admin/pull/499)
-   Rotation process fix [\[PR#510\]](https://github.com/skalenetwork/skale-admin/pull/510)
-   Removed logs blueprint [\[PR#512\]](https://github.com/skalenetwork/skale-admin/pull/512)
-   Improved DKG filter performance [\[PR#513\]](https://github.com/skalenetwork/skale-admin/pull/513)
-   Updated dependencies

**SKALE Node CLI (2.0.0-develop.20)/(1.1.0)**

-   New storage allocation [\[PR#454\]](https://github.com/skalenetwork/skale-node-cli/pull/454)
-   Set ubuntu version to 18.04 for GA builds [\[PR#456\]](https://github.com/skalenetwork/skale-node-cli/pull/456)
-   Added python-setuptools to publish pipeline [\[PR#457\]](https://github.com/skalenetwork/skale-node-cli/pull/457)
-   Local logs command [\[PR#470\]](https://github.com/skalenetwork/skale-node-cli/pull/470)
-   Fixed wrong user from env [\[PR#471\]](https://github.com/skalenetwork/skale-node-cli/pull/471)
-   Changed get system user logic [\[PR#473\]](https://github.com/skalenetwork/skale-node-cli/pull/473)
-   Updated dependencies

**Validator CLI (1.3.0-develop.2)/(1.2.0)**

-   No updates

**bounty-agent (1.1.1-develop.5)/(1.1.1-stable.0)**

-   No updates

**SKALE.py (5.0dev17)/(4.1b22)**

-   No updates

**Transaction-manager (1.1.0-develop.10)/(1.1.0-stable.0)**

-   Update skale.py to 4.1b22 (with berlin fork support) [\[PR#173\]](https://github.com/skalenetwork/transaction-manager/pull/173), [\[PR#174\]](https://github.com/skalenetwork/transaction-manager/pull/174)
-   Updated dependencies

**Watchdog (1.1.3-develop.5)/(1.1.3-stable.0)**

-   Added hiding log formatter [\[PR#28\]](https://github.com/skalenetwork/skale-watchdog/pull/28
-   Fixed schains null response [\[PR#31\]](https://github.com/skalenetwork/skale-watchdog/pull/31)

**sgx.py (0.7dev3)/(0.6b1)**

-   No updates
