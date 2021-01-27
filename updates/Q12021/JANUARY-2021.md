# SKALE Network Product Updates (JANUARY 2021)

These updates are posted in: 

-   <https://github.com/skalenetwork/skale-network/tree/master/updates>
-   <https://forum.skale.network/>
-   [SKALE Discord](https://discord.gg/vvUtWJB)

If you would like to suggest changes, please post, discuss, or open a GitHub issue respective of the channels listed above.

## Month focus

During January, the team was mostly focused on:

-   abc
-   abc


## Code changes

January:

**SKALE Manager ()**
-   Fixed getbounty transaction for nodes 'In Maintenance'  [\[PR#475\]](https://github.com/skalenetwork/skale-manager/pull/475)
-   Fixed incorrect state call [\[PR#477\]](https://github.com/skalenetwork/skale-manager/pull/477)
-   Moved CI builds to GitHub actions [\[PR#480\]](https://github.com/skalenetwork/skale-manager/pull/480), [\[PR#488\]](https://github.com/skalenetwork/skale-manager/pull/488)
-   Added script to calculate gas consumption of schain creation [\[PR#485\]](https://github.com/skalenetwork/skale-manager/pull/485)
-   Added domain names [\[PR#486\]](https://github.com/skalenetwork/skale-manager/pull/486)
-   Added set schain owner functionality [\[PR#493\]](https://github.com/skalenetwork/skale-manager/pull/493)
-   Added token transfer optimizations [\[PR#506\]](https://github.com/skalenetwork/skale-manager/pull/506)
-   Fixed domain names after update error [\[PR#512\]](https://github.com/skalenetwork/skale-manager/pull/512)
-   Updated dependencies

**SKALE Consensus**

-   Fixed graceful stop of schains [\[PR#312\]](https://github.com/skalenetwork/skale-consensus/pull/312)
-   Added long catchup interval [\[PR#314\]](https://github.com/skalenetwork/skale-consensus/pull/314)
-   Fixed monitoring thread hanging [\[PR#315\]](https://github.com/skalenetwork/skale-consensus/pull/315)
-   Improved logging [\[PR#316\]](https://github.com/skalenetwork/skale-consensus/pull/316)
-   Added ECDSA to DA Proofs [\[PR#319\]](https://github.com/skalenetwork/skale-consensus/pull/319)
-   Added more info if zmq_ctx_term kills its thread[\[PR#321\]](https://github.com/skalenetwork/skale-consensus/pull/321)
-   Added try/catch to touch function [\[PR#323\]](https://github.com/skalenetwork/skale-consensus/pull/323)
-   Fixed that node should not connect to itself [\[PR#325\]](https://github.com/skalenetwork/skale-consensus/pull/325)
-   Fixed proposing 000 [\[PR#327\]](https://github.com/skalenetwork/skale-consensus/pull/327)
-   Added empty proposal should have zero state root [\[PR#331\]](https://github.com/skalenetwork/skale-consensus/pull/331)

**SGXWallet ()**

-   Added -O2 flag [\[PR#258\]](https://github.com/skalenetwork/SGXWallet/pull/258)
-   Added more info to DB requests [\[PR#261\]](https://github.com/skalenetwork/SGXWallet/pull/261)
-   Fixed hashing  [\[PR#262\]](https://github.com/skalenetwork/SGXWallet/pull/262)

**SKALED ()**

-   Added support for informational JSON RPC ports [\[PR#406\]](https://github.com/skalenetwork/skaled/pull/406)
-   Added more logs [\[PR#416\]](https://github.com/skalenetwork/skaled/pull/416)
-   Added support for IMA raw ERC token transfer messages [\[PR#417\]](https://github.com/skalenetwork/skaled/pull/417)
-   Fixed hang on exit [\[PR#420\]](https://github.com/skalenetwork/skaled/pull/420)
-   Fixed non-behavior-exception [\[PR#421\]](https://github.com/skalenetwork/skaled/pull/421)
-   Added ECDSA to DA proofs [\[PR#422\]](https://github.com/skalenetwork/skaled/pull/422)
-   Added try-catch in TCPServerSocket [\[PR#423\]](https://github.com/skalenetwork/skaled/pull/423)
-   Fixed download finalization [\[PR#424\]](https://github.com/skalenetwork/skaled/pull/424)
-   Fixed schains graceful stop [\[PR#426\]](https://github.com/skalenetwork/skaled/pull/426)
-   Updated to conesus fixes [\[PR#431\]](https://github.com/skalenetwork/skaled/pull/431)
-   Removed zero snapshot [\[PR#435\]](https://github.com/skalenetwork/skaled/pull/435)
-   Fixed proposing 000 [\[PR#436\]](https://github.com/skalenetwork/skaled/pull/436)
-   Re-enable block filter  [\[PR#438\]](https://github.com/skalenetwork/skaled/pull/438)
-   Remove state root checks for empty block [\[PR#441\]](https://github.com/skalenetwork/skaled/pull/441)
