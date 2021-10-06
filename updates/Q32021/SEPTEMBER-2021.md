# SKALE Network Product Updates (SEPTEMBER 2021)

These updates are posted in: 

-   <https://github.com/skalenetwork/skale-network/tree/master/updates>
-   <https://forum.skale.network/>
-   [SKALE Discord](https://discord.gg/vvUtWJB)

If you would like to suggest changes, please post, discuss, or open a GitHub issue respective of the channels listed above.

## Month focus

During September, the team has been mostly working on:

-   IMA Hotfix release activities and final bug fixes
-   SKALE Manager: cleanup and bug fixes
-   Added Proxygen support (Facebook HTTP framework) to improve skaled performance and stability
-   Skaled: improved block rotation functionality and crash resistance, filestorage fixes, test enhancements
-   SGX Wallet: security fixes and release process improvements
-   SKALE Node components: IMA Hotfix release support, Telegram notifications fixes, Proxygen support

## Code changes

**SKALE Manager (1.8.2-develop.25)**

-   Upgraded openzeppelin contracts [\[PR#663\]](https://github.com/skalenetwork/skale-manager/pull/663)
-   Added process handling for X in G2 [\[PR#670\]](https://github.com/skalenetwork/skale-manager/pull/670)
-   Fixed Free Space is not added to node on contracts after receiving complaint [\[PR#675\]](https://github.com/skalenetwork/skale-manager/pull/675)
-   Updated dependencies

**SKALE Consensus**

-   Added build with g++ 9.3.0 which is default on unbuntu 20.04 [\[PR#491\]](https://github.com/skalenetwork/skale-consensus/pull/491)
-   Added facebook http server [\[PR#496\]](https://github.com/skalenetwork/skale-consensus/pull/496)
-   Fixed test running time [\[PR#500\]](https://github.com/skalenetwork/skale-consensus/pull/500), [\[PR#501\]](https://github.com/skalenetwork/skale-consensus/pull/501)
-   Added deadlock detection and cleaned up mutexes [\[PR#503\]](https://github.com/skalenetwork/skale-consensus/pull/503)
-   Enhanced deadlock detection [\[PR#504\]](https://github.com/skalenetwork/skale-consensus/pull/504), [\[PR#505\]](https://github.com/skalenetwork/skale-consensus/pull/505), [\[PR#506\]](https://github.com/skalenetwork/skale-consensus/pull/506)
-   Fixed consensus duplicate processing [\[PR#509\]](https://github.com/skalenetwork/skale-consensus/pull/509)
-   Fixed skaled doesn't mine blocks if has 3 out of 4 nodes [\[PR#511\]](https://github.com/skalenetwork/skale-consensus/pull/511), [\[PR#512\]](https://github.com/skalenetwork/skale-consensus/pull/512)
-   Deps build fix for libJsonRpcCpp [\[PR#514\]](https://github.com/skalenetwork/skale-consensus/pull/514)
-   Increased stuck-restart interval [\[PR#517\]](https://github.com/skalenetwork/skale-consensus/pull/517)

**SKALED (3.8.3-develop.3)**

-   Implemented better crash resistance in block rotation code [\[PR#778\]](https://github.com/skalenetwork/skaled/pull/778)
-   libproxygen built with all deps  [\[PR#780\]](https://github.com/skalenetwork/skaled/pull/780)
-   Cleaning cache in the same thread where blocks created [\[PR#782\]](https://github.com/skalenetwork/skaled/pull/782)
-   Removed redundant to and sender field check in skale_imaVerifyAndSign [\[PR#785\]](https://github.com/skalenetwork/skaled/pull/785), [\[PR#786\]](https://github.com/skalenetwork/skaled/pull/786)
-   Added more logs to download snapshot [\[PR#789\]](https://github.com/skalenetwork/skaled/pull/789)
-   Fixed tests, fixed garbage collector [\[PR#790\]](https://github.com/skalenetwork/skaled/pull/790)
-   Remove bcBasicInsert test and related code pieces [\[PR#793\]](https://github.com/skalenetwork/skaled/pull/793)
-   Fixed pathToFile not created after filestorage tests [\[PR#799\]](https://github.com/skalenetwork/skaled/pull/799)
-   Fixed tests broken after new block rotation [\[PR#804\]](https://github.com/skalenetwork/skaled/pull/804)
-   Fixed filestorage snapshot crashing [\[PR#807\]](https://github.com/skalenetwork/skaled/pull/807)
-   Deps build improvements [\[PR#808\]](https://github.com/skalenetwork/skaled/pull/808)
-   Updated consensus [\[PR#809\]](https://github.com/skalenetwork/skaled/pull/809)
-   Added optionally disabling transaction acceptance [\[PR#811\]](https://github.com/skalenetwork/skaled/pull/811)
-   Fixed build - update libJsonRpcCpp in consensus[\[PR#816\]] (https://github.com/skalenetwork/skaled/pull/816)
-   Repaired support for binary http answers such as snapshot downloads  [\[PR#818\]](https://github.com/skalenetwork/skaled/pull/818)
-   Made json rpc logs compact [\[PR#820\]](https://github.com/skalenetwork/skaled/pull/820)
-   Tested event/log information is lost after block rotation [\[PR#823\]](https://github.com/skalenetwork/skaled/pull/823)

**SGXWallet (1.83.0-develop.4)**

-   Fixed exportable function [\[PR#350\]](https://github.com/skalenetwork/SGXWallet/pull/350)
-   Fixed buffer overflow [\[PR#352\]](https://github.com/skalenetwork/SGXWallet/pull/352)
-   Fixed buffer length  [\[PR#353\]](https://github.com/skalenetwork/SGXWallet/pull/353)
-   Fixed no response[\[PR#354\]](https://github.com/skalenetwork/SGXWallet/pull/354)
-   Fixed automated signed build [\[PR#355\]](https://github.com/skalenetwork/SGXWallet/pull/355)
-   Updated job file for new release procedure [\[PR#356\]](https://github.com/skalenetwork/SGXWallet/pull/356)
-   Fixed register existing key owner [\[PR#358\]](https://github.com/skalenetwork/SGXWallet/pull/358)

**IMA (1.1.0-develop.1)**

-   Fixed lost message [\[PR#805\]](https://github.com/skalenetwork/ima/pull/805)
-   BLS glue crash fix in IMA agent [\[PR#808\]](https://github.com/skalenetwork/ima/pull/808)
-   Fixed burn community pool/schain wallet balance during S2M payment [\[PR#813\]](https://github.com/skalenetwork/ima/pull/813), [\[PR#814\]](https://github.com/skalenetwork/ima/pull/814)
-   Add functionality to recharge user wallet from different address [\[PR#816\]](https://github.com/skalenetwork/ima/pull/816)
-   Improved Dockerfile script [\[PR#817\]](https://github.com/skalenetwork/ima/pull/817)
-   Refactored self recharging wallets [\[PR#818\]](https://github.com/skalenetwork/ima/pull/818)
-   Added upgrade mainnet contracts [\[PR#819\]](https://github.com/skalenetwork/ima/pull/819)
-   Added IMA-JS usage and code samples (ETH, ERC20, ERC721) [\[PR#821\]](https://github.com/skalenetwork/ima/pull/821)
-   Fixed wait for S-Chain info arrived [\[PR#826\]](https://github.com/skalenetwork/ima/pull/826)
-   Added estimate call [\[PR#828\]](https://github.com/skalenetwork/ima/pull/828), [\[PR#829\]](https://github.com/skalenetwork/ima/pull/829)
-   Added transferOwnership script [\[PR#833\]](https://github.com/skalenetwork/ima/pull/833)
-   Updated NPM modules on dependency bot suggestions [\[PR#838\]](https://github.com/skalenetwork/ima/pull/838)
-   Updated dependencies

**SKALE Admin (2.0.2-develop.2)**

-   Fixed registration with already existed data  [\[PR#655\]](https://github.com/skalenetwork/skale-admin/pull/655)
-   Updated ima-predeployed to 1.0.0-beta.11 [\[PR#659\]](https://github.com/skalenetwork/skale-admin/pull/659), [\[PR#660\]](https://github.com/skalenetwork/skale-admin/pull/660)
-   Fixed Telegram notifications [\[PR#661\]](https://github.com/skalenetwork/skale-admin/pull/661)
-   Added proxygen ports to firewall [\[PR#674\]](https://github.com/skalenetwork/skale-admin/pull/674)
-   Fetch all data after key generation error [\[PR#676\]](https://github.com/skalenetwork/skale-admin/pull/676)
-   Updated dependencies

**SKALE Node CLI (2.0.1-develop.21)**

-   Updated restore mountpoint [\[PR#529\]](https://github.com/skalenetwork/skale-node-cli/pull/529)
-   Moved docker-compose rm to docker-compose down [\[PR#530\]](https://github.com/skalenetwork/skale-node-cli/pull/530)
-   Fixed checks [\[PR#532\]](https://github.com/skalenetwork/skale-node-cli/pull/532)
-   Fixed init procedure [\[PR#538\]](https://github.com/skalenetwork/skale-node-cli/pull/538)
-   Fixed restore behavior if checks failed  [\[PR#539\]](https://github.com/skalenetwork/skale-node-cli/pull/539)
-   Fixed restore check type  [\[PR#541\]](https://github.com/skalenetwork/skale-node-cli/pull/541)
-   Updated dependencies

**Validator CLI (1.3.0)**

-   No updates

**bounty-agent (2.0.2-stable.0)**

-   No updates

**SKALE.py (5.2dev0)**

-   Added proxygen ports [\[PR#441\]](https://github.com/skalenetwork/skale.py/pull/441)
-   Updated dependencies

**Transaction-manager (2.0.1-develop.9)**

-   Fixed transaction replacement not working for gas price 1 WEI [\[PR#218\]](https://github.com/skalenetwork/transaction-manager/pull/218)
-   New stable release [\[PR#221\]](https://github.com/skalenetwork/transaction-manager/pull/221)
-   Updated dependencies

**Watchdog (2.0.2-stable.0)**

-   No updates

**sgx.py (0.8dev0)**

-   No updates
