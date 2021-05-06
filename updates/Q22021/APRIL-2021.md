# SKALE Network Product Updates (APRIL 2021)

These updates are posted in: 

-   <https://github.com/skalenetwork/skale-network/tree/master/updates>
-   <https://forum.skale.network/>
-   [SKALE Discord](https://discord.gg/vvUtWJB)

If you would like to suggest changes, please post, discuss, or open a GitHub issue respective of the channels listed above.

## Month focus

During March, the team has been mostly working on:

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

**SKALED (3.6.1-develop.1/3.5.12-stable.1)**

-   Fixed 1 catchup thread [\[PR#551\]](https://github.com/skalenetwork/skaled/pull/551)
-   Fixed IMA message verification [\[PR#554\]](https://github.com/skalenetwork/skaled/pull/554)
-   Fix 11 out of 16 and catchup timeout in consensus [\[PR#555\]](https://github.com/skalenetwork/skaled/pull/555)
-   skaled access control improvements [\[PR#563\]](https://github.com/skalenetwork/skaled/pull/563)
-   Fixed IMA compatibilitiy [\[PR#566\]](https://github.com/skalenetwork/skaled/pull/566)
-   Fixed json rpc call [\[PR#569\]](https://github.com/skalenetwork/skaled/pull/569)
-   Snapshot improvements   [\[PR#572\]](https://github.com/skalenetwork/skaled/pull/572)
-   Fixed parsing id json rpc [\[PR#575\]](https://github.com/skalenetwork/skaled/pull/575)
-   Added exit if stateRoot mismatch in empty block [\[PR#576\]](https://github.com/skalenetwork/skaled/pull/576)
