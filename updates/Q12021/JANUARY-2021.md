# SKALE Network Product Updates (JANUARY 2021)

These updates are posted in: 

-   <https://github.com/skalenetwork/skale-network/tree/master/updates>
-   <https://forum.skale.network/>
-   [SKALE Discord](https://discord.gg/vvUtWJB)

If you would like to suggest changes, please post, discuss, or open a GitHub issue respective of the channels listed above.

## Month focus

During January, the team was mostly focused on:


-   Skale Manager: optimized and descreased token transfer gas usage 
-   IMA: added token whitelisting functionality, improved raw token transfer and implemented general usability enhancements
-   Added domain names and SSL certificates support
-   Schains stability and testing improvements
-   Improved healthchecks and nodes monitoring 
-   Support and release TestNet fixes and updates


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
-   Re-enabled block filter  [\[PR#438\]](https://github.com/skalenetwork/skaled/pull/438)
-   Remove state root checks for empty block [\[PR#441\]](https://github.com/skalenetwork/skaled/pull/441)

**SKALE Admin ()**

-   Updated skale.py [\[PR#392\]](https://github.com/skalenetwork/skale-admin/pull/392)
-   Fixed link to sgx.py [\[PR#397\]](https://github.com/skalenetwork/skale-admin/pull/397)
-   Added info RPC port [\[PR#409\]](https://github.com/skalenetwork/skale-admin/pull/409)
-   Added domain names functionality [\[PR#413\]](https://github.com/skalenetwork/skale-admin/pull/413)
-   Made rpc wallet run directly to sgx [\[PR#422\]](https://github.com/skalenetwork/skale-admin/pull/422)
-   Updated dependencies

**IMA ()**

-   Added SGX error handling [\[PR#404\]](https://github.com/skalenetwork/ima/pull/404)
-   Removed un-needed non-raw token transfers  [\[PR#407\]](https://github.com/skalenetwork/ima/pull/407)
-   Removed stale dependencies [\[PR#410\]](https://github.com/skalenetwork/ima/pull/410)
-   Added token whitelisting functionality [\[PR#411\]](https://github.com/skalenetwork/ima/pull/411)
-   Added support for ETH unit names[\[PR#412\]](https://github.com/skalenetwork/ima/pull/412)
-   Added IMA Agent Unit Tests [\[PR#416\]](https://github.com/skalenetwork/ima/pull/416)
-   Fixed remaining typos [\[PR#417\]](https://github.com/skalenetwork/ima/pull/417)
-   Added waiting for receipt after sign-and-send call to Transaction Manager [\[PR#418\]](https://github.com/skalenetwork/ima/pull/418)
-   Fixed wait for transaction receipt [\[PR#420\]](https://github.com/skalenetwork/ima/pull/420)
-   Added basic pending transactions analyzer [\[PR#425\]](https://github.com/skalenetwork/ima/pull/425)
-   Updated dependencies

**SKALE Node CLI ()**

-   Added nginx to base containers [\[PR#394\]](https://github.com/skalenetwork/skale-node-cli/pull/394)
-   Added domain names functionality [\[PR#398\]](https://github.com/skalenetwork/skale-node-cli/pull/398)
-   Added new dir [\[PR#400\]](https://github.com/skalenetwork/skale-node-cli/pull/400)
-   Updated dependencies

**Validator CLI ()**

-   Added revert reason handler [\[PR#254\]](https://github.com/skalenetwork/validator-cli/pull/254)
-   Updated dependencies

**bounty-agent ()**

-   Added call block check [\[PR#114\]](https://github.com/skalenetwork/bounty-agent/pull/114)
-   Updated dependencies

**SKALE.py ()**

-   Changed ports per sChain [\[PR#351\]](https://github.com/skalenetwork/skale.py/pull/351), [\[PR#352\]](https://github.com/skalenetwork/skale.py/pull/352)
-   Fixed transaction manager recovery [\[PR#354\]](https://github.com/skalenetwork/skale.py/pull/354)
-   Added info RPC port to node info  [\[PR#357\]](https://github.com/skalenetwork/skale.py/pull/357)
-   Added domain names functionality [\[PR#360\]](https://github.com/skalenetwork/skale.py/pull/360)
-   Added spawn skale_ima  [\[PR#364\]](https://github.com/skalenetwork/skale.py/pull/364)
-   Added custom schain owner [\[PR#367\]](https://github.com/skalenetwork/skale.py/pull/367)
-   Fixed domain name structure [\[PR#370\]](https://github.com/skalenetwork/skale.py/pull/370)
-   Added delete_schain_by_root [\[PR#371\]](https://github.com/skalenetwork/skale.py/pull/371)
-   Updated dependencies

**Transaction-manager ()**

-   Added call block check [\[PR#148\]](https://github.com/skalenetwork/transaction-manager/pull/148)
-   Updated dependencies

**Watchdog ()**

-   Added sgx and schain healthchecks requests [\[PR#10\]](https://github.com/skalenetwork/skale-watchdog/pull/10)
-   Added hardware and endpoint checks [\[PR#15\]](https://github.com/skalenetwork/skale-watchdog/pull/15)

**sgx.py ()**

-   Fixed hashing [\[PR#94\]](https://github.com/skalenetwork/sgx.py/pull/94)
-   Updated dependencies

