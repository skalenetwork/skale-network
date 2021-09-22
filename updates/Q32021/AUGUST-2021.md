# SKALE Network Product Updates (AUGUST 2021)

These updates are posted in: 

-   <https://github.com/skalenetwork/skale-network/tree/master/updates>
-   <https://forum.skale.network/>
-   [SKALE Discord](https://discord.gg/vvUtWJB)

If you would like to suggest changes, please post, discuss, or open a GitHub issue respective of the channels listed above.

## Month focus

During August, the team has been mostly working on:

-   SKALE Manager: cleanup and CI/CD improvements
-   IMA Hotfix release: stability, memory, logging/search enhancements and critical bug fixes
-   SGX Wallet: started work on supporting threshold signatures
-   Skaled: improved block rotation functionality, snapshot and filestorage bugfixes
-   SKALE Node components: IMA Hotfix release support, docker socket bugfixes


## Code changes

**SKALE Manager (1.8.2-develop.17)**

-   Adding functionality to run tests of skale-manager for everyone [\[PR#647\]](https://github.com/skalenetwork/skale-manager/pull/647)
-   Added test to check schain on in maintenance node [\[PR#654\]](https://github.com/skalenetwork/skale-manager/pull/654)
-   Updated dependencies

**SKALE Consensus**

-   Enabled log_range test [\[PR#480\]](https://github.com/skalenetwork/skale-consensus/pull/480)
-   Fixed mining blocks after sgx downtime [\[PR#484\]](https://github.com/skalenetwork/skale-consensus/pull/484)
-   Fixed RAM memory cleaning [\[PR#485\]](https://github.com/skalenetwork/skale-consensus/pull/485), [\[PR#486\]](https://github.com/skalenetwork/skale-consensus/pull/486), [\[PR#488\]](https://github.com/skalenetwork/skale-consensus/pull/488)
-   Fixed RAM memory usage [\[PR#487\]](https://github.com/skalenetwork/skale-consensus/pull/487)
-   Fixed skaled tests crash in mutex.hpp [\[PR#489\]](https://github.com/skalenetwork/skale-consensus/pull/489)

**SKALED (3.8.0-develop.6 / 3.7.5-beta.4)**

-   Added accepting empty string as SGX url [\[PR#732\]](https://github.com/skalenetwork/skaled/pull/732)
-   Improved way to delete snapshot that failed to unpack [\[PR#734\]](https://github.com/skalenetwork/skaled/pull/734)
-   IMA progressive logs search enhancement [\[PR#736\]](https://github.com/skalenetwork/skaled/pull/736), [\[PR#737\]](https://github.com/skalenetwork/skaled/pull/737)
-   Fixed filestorage hash after restore from snapshot [\[PR#744\]](https://github.com/skalenetwork/skaled/pull/744), [\[PR#747\]](https://github.com/skalenetwork/skaled/pull/747)
-   Added extension check and test[\[PR#748\]](https://github.com/skalenetwork/skaled/pull/748)
-   Added passing block numbers for ETH logs from leading node to verifiers [\[PR#750\]](https://github.com/skalenetwork/skaled/pull/750), [\[PR#753\]](https://github.com/skalenetwork/skaled/pull/753)
-   Fixed blocks rotation in beta branch [\[PR#757\]](https://github.com/skalenetwork/skaled/pull/757)
-   Fixed typos [\[PR#758\]](https://github.com/skalenetwork/skaled/pull/758)
-   Improved IMA message verifier, Main Net connectivity problem handling [\[PR#761\]](https://github.com/skalenetwork/skaled/pull/761), [\[PR#764\]](https://github.com/skalenetwork/skaled/pull/764)
-   Updated SKALE Consensus with setting smaller memory buffers [\[PR#765\]](https://github.com/skalenetwork/skaled/pull/765)
-   Fixed skaled behaviour when operating heavy transactions [\[PR#767\]](https://github.com/skalenetwork/skaled/pull/767)
-   Updated SKALE Consensus with fixes for tests crash in mutex [\[PR#772\]](https://github.com/skalenetwork/skaled/pull/772)
-   Improved HTTP(S) load balancing and overload error handing [\[PR#74\]](https://github.com/skalenetwork/skaled/pull/774)
-   Removed HTTP/S GET requests for file downloads [\[PR#776\]](https://github.com/skalenetwork/skaled/pull/776)

**SGXWallet (1.78.0-develop.6)**

-   Added threshold encryption support [\[PR#340\]](https://github.com/skalenetwork/SGXWallet/pull/340)
-   Added check key ownership false by default [\[PR#341\]](https://github.com/skalenetwork/SGXWallet/pull/341)
-   Removed extra debug output  [\[PR#343\]](https://github.com/skalenetwork/SGXWallet/pull/343), [\[PR#345\]](https://github.com/skalenetwork/SGXWallet/pull/345)
-   Fixed exportable keys, added tests [\[PR#346\]](https://github.com/skalenetwork/SGXWallet/pull/346), [\[PR#347\]](https://github.com/skalenetwork/SGXWallet/pull/347), [\[PR#348\]](https://github.com/skalenetwork/SGXWallet/pull/348)

**IMA (1.0.0-develop.284 / 1.0.0-beta.11)**

-   Improved progressive logs scan [\[PR#763\]](https://github.com/skalenetwork/ima/pull/763)
-   Re-designed event logs search step by step using 1000 blocks per range [\[PR#774\]](https://github.com/skalenetwork/ima/pull/774)
-   Iterative logs search [\[PR#775\]](https://github.com/skalenetwork/ima/pull/775)
-   Fixed error handling on heavy load [\[PR#777\]](https://github.com/skalenetwork/ima/pull/777), [\[PR#778\]](https://github.com/skalenetwork/ima/pull/778)
-   Added fromImaAgentIndex parameter [\[PR#780\]](https://github.com/skalenetwork/ima/pull/780), [\[PR#781\]](https://github.com/skalenetwork/ima/pull/781)
-   Improved S-Chain network discovery [\[PR#790\]](https://github.com/skalenetwork/ima/pull/790)
-   Improved IMA agent compact log output [\[PR#794\]](https://github.com/skalenetwork/ima/pull/794)
-   Improved BLS glue, should not wait for more than threshold signatures to complete [\[PR#800\]](https://github.com/skalenetwork/ima/pull/800)
-   Updated dependencies

**SKALE Admin (2.0.1-develop.31 / 2.0.1-beta.6)**

-   Fixed sChain and node owners allocation  [\[PR#640\]](https://github.com/skalenetwork/skale-admin/pull/640)
-   Reduced gunicorn workers number [\[PR#642\]](https://github.com/skalenetwork/skale-admin/pull/642)
-   Customize docker host [\[PR#645\]](https://github.com/skalenetwork/skale-admin/pull/645)
-   Fixed docker socket in beta [\[PR#648\]](https://github.com/skalenetwork/skale-admin/pull/648)
-   Fixed filebeat.yml update [\[PR#649\]](https://github.com/skalenetwork/skale-admin/pull/649)
-   Fixed skaled restart rules [\[PR#651\]](https://github.com/skalenetwork/skale-admin/pull/651), [\[PR#652\]](https://github.com/skalenetwork/skale-admin/pull/652)
-   Added functionality to save first 400 log lines of removed schain [\[PR#653\]](https://github.com/skalenetwork/skale-admin/pull/653)
-   Updated dependencies

**SKALE Node CLI (2.0.1-develop.15 / 2.0.1-beta.3)**

-   Fixed docker socket error [\[PR#517\]](https://github.com/skalenetwork/skale-node-cli/pull/517)
-   Added docker configuration to init and restore [\[PR#520\]](https://github.com/skalenetwork/skale-node-cli/pull/520)
-   Added ExecStartPre to docker service config [\[PR#523\]](https://github.com/skalenetwork/skale-node-cli/pull/523)
-   Fixed reboot in beta [\[PR#524\]](https://github.com/skalenetwork/skale-node-cli/pull/524)
-   Improved skaled head logs [\[PR#526\]](https://github.com/skalenetwork/skale-node-cli/pull/526)
-   Updated dependencies

**Validator CLI (1.3.0-develop.6)**

-   No updates

**bounty-agent (2.0.1-develop.0 / 2.0.1-beta.1)**

-   No updates

**SKALE.py (5.1dev8)**

-   Updated to use latest block to estimate gas[\[PR#432\]](https://github.com/skalenetwork/skale.py/pull/432)
-   Updated dependencies

**Transaction-manager (2.0.1-develop.8 / 2.0.1-beta.4)**

-   Updated skale.py to 5.1dev8 [\[PR#216\]](https://github.com/skalenetwork/transaction-manager/pull/216)
-   New beta release [\[PR#217\]](https://github.com/skalenetwork/transaction-manager/pull/217)
-   Updated dependencies

**Watchdog (2.0.0-develop.6 / 2.0.0-beta.2)**

-   Added report route [\[PR#66\]](https://github.com/skalenetwork/skale-watchdog/pull/66)
-   New beta release [\[PR#67\]](https://github.com/skalenetwork/skale-watchdog/pull/67)

**sgx.py (0.8dev0)**

-   No updates
