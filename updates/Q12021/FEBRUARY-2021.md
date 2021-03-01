# SKALE Network Product Updates (FEBRUARY 2021)

These updates are posted in: 

-   <https://github.com/skalenetwork/skale-network/tree/master/updates>
-   <https://forum.skale.network/>
-   [SKALE Discord](https://discord.gg/vvUtWJB)

If you would like to suggest changes, please post, discuss, or open a GitHub issue respective of the channels listed above.

## Month focus

During February, the team was mostly focused on:


-   TBD

## Code changes

January:

**SKALE Manager (1.8.0-develop.15)**
-   Moved to Open Zeppelin upgrades [\[PR#522\]](https://github.com/skalenetwork/skale-manager/pull/522)
-   Added automatic generation of accounts for testing [\[PR#528\]](https://github.com/skalenetwork/skale-manager/pull/528)
-   Fixed initialize function and add tests [\[PR#529\]](https://github.com/skalenetwork/skale-manager/pull/529)
-   Modified ABI generation  [\[PR#533\]](https://github.com/skalenetwork/skale-manager/pull/533)
-   Fixed schain creation after failed DKG [\[PR#535\]](https://github.com/skalenetwork/skale-manager/pull/535)
-   Fixed refilling validagor wallets [\[PR#537\]](https://github.com/skalenetwork/skale-manager/pull/537)
-   Fixed delete schain after upgrading contracts [\[PR#538\]](https://github.com/skalenetwork/skale-manager/pull/538)
-   Added 'require' for test schain types [\[PR#539\]](https://github.com/skalenetwork/skale-manager/pull/539)
-   Separated NodeWalletRecharged as two different events for more clarity [\[PR#540\]](https://github.com/skalenetwork/skale-manager/pull/540)
-   Added ability to upgrade skale-manager using Gnosis Safe [\[PR#542\]](https://github.com/skalenetwork/skale-manager/pull/542)
-   Fixed typos [\[PR#543\]](https://github.com/skalenetwork/skale-manager/pull/543)

**SKALE Consensus**

-   Reject proposal that has incorrect stateRoot [\[PR#334\]](https://github.com/skalenetwork/skale-consensus/pull/334), [\[PR#335\]](https://github.com/skalenetwork/skale-consensus/pull/335), [\[PR#336\]](https://github.com/skalenetwork/skale-consensus/pull/336), [\[PR#338\]](https://github.com/skalenetwork/skale-consensus/pull/338), [\[PR#339\]](https://github.com/skalenetwork/skale-consensus/pull/339)
-   Fixed read of byte 121 in OpenSSLEdDSAKey [\[PR#340\]](https://github.com/skalenetwork/skale-consensus/pull/340)
-   Added check all data structures are thread safe [\[PR#343\]](https://github.com/skalenetwork/skale-consensus/pull/343)
-   Decrease catchup size [\[PR#345\]](https://github.com/skalenetwork/skale-consensus/pull/345), [\[PR#346\]](https://github.com/skalenetwork/skale-consensus/pull/346)
-   Fixed incorrect block size error in finalization downloader [\[PR#347\]](https://github.com/skalenetwork/skale-consensus/pull/347)
-   Added check SGX failed status in Consensus[\[PR#352\]](https://github.com/skalenetwork/skale-consensus/pull/352)
-   Fixed memory leaks [\[PR#354\]](https://github.com/skalenetwork/skale-consensus/pull/354)
-   Fixed too many log messages in SGX retry and memory leaks [\[PR#356\]](https://github.com/skalenetwork/skale-consensus/pull/356), [\[PR#358\]](https://github.com/skalenetwork/skale-consensus/pull/358), [\[PR#359\]](https://github.com/skalenetwork/skale-consensus/pull/359), [\[PR#360\]](https://github.com/skalenetwork/skale-consensus/pull/360)
-   Made dataDir in ConsensusEngine non-static - for tests [\[PR#357\]](https://github.com/skalenetwork/skale-consensus/pull/357)
-   Integrated ZeroMQ [\[PR#361\]](https://github.com/skalenetwork/skale-consensus/pull/361)
-   Added a check for zero block timestamp [\[PR#363\]](https://github.com/skalenetwork/skale-consensus/pull/363)
-   Fixed block timestamp [\[PR#364\]](https://github.com/skalenetwork/skale-consensus/pull/364)
-   Updated file descriptor stats  [\[PR#366\]](https://github.com/skalenetwork/skale-consensus/pull/366)
-   Cleaned up logs [\[PR#368\]](https://github.com/skalenetwork/skale-consensus/pull/368)
-   Added a detailed consensus log in case of a fatal error on start [\[PR#369\]](https://github.com/skalenetwork/skale-consensus/pull/369)
-   Bumping priority of block processing thread to real time[\[PR#370\]](https://github.com/skalenetwork/skale-consensus/pull/370)
-   Fixed skaled build [\[PR#372\]](https://github.com/skalenetwork/skale-consensus/pull/372)

**SKALED (3.5.7-develop.1)**

-   Added new IMA pending message tracking JSON RPC API [\[PR#453\]](https://github.com/skalenetwork/skaled/pull/453)
-   Using consensus that rejects wrong proposals [\[PR#454\]](https://github.com/skalenetwork/skaled/pull/454)
-   Snapshots improvements [\[PR#455\]](https://github.com/skalenetwork/skaled/pull/455)
-   Disabling Personal, Admin and Miner APIs if there is no --enable-debug-behavior-apis param [\[PR#460\]](https://github.com/skalenetwork/skaled/pull/460)
-   Added better BLS error handling [\[PR#462\]](https://github.com/skalenetwork/skaled/pull/462)
-   Fixed HTTP server crashes [\[PR#464\]](https://github.com/skalenetwork/skaled/pull/464)
-   Added more reliable exit and stack trace  [\[PR#468\]](https://github.com/skalenetwork/skaled/pull/468)
-   Fixed Slice class issue [\[PR#469\]](https://github.com/skalenetwork/skaled/pull/469)
-   Using Consensus with fixed default block timestamp [\[PR#470\]](https://github.com/skalenetwork/skaled/pull/470)
-   Added local runner [\[PR#471\]](https://github.com/skalenetwork/skaled/pull/471)
-   Separated test and publish jobs [\[PR#473\]](https://github.com/skalenetwork/skaled/pull/473)
-   Using Consensus with decreased catchup chunk [\[PR#475\]](https://github.com/skalenetwork/skaled/pull/475)
-   Fixed crash on closing WS connection on UN-DDOS rule applied [\[PR#476\]](https://github.com/skalenetwork/skaled/pull/476)
-   Removed cmake instalation [\[PR#478\]](https://github.com/skalenetwork/skaled/pull/478)
-   Fixed memory issues (Slice and setTransactionDefaults) [\[PR#479\]](https://github.com/skalenetwork/skaled/pull/479)
-   Fixed WS protocol errors on heavy load [\[PR#482\]](https://github.com/skalenetwork/skaled/pull/482)
-   Enabled -O3 [\[PR#488\]](https://github.com/skalenetwork/skaled/pull/488)
-   Remove coverage from publishing [\[PR#489\]](https://github.com/skalenetwork/skaled/pull/489)
-   Updated VERSION [\[PR#494\]](https://github.com/skalenetwork/skaled/pull/494)
-   Updated Consensus [\[PR#495\]](https://github.com/skalenetwork/skaled/pull/495)

**SGXWallet (1.68.1-develop.1)**

-   Enabled ZeroMQ [\[PR#265\]](https://github.com/skalenetwork/SGXWallet/pull/265)
-   Re-enabled certs on server side [\[PR#270\]](https://github.com/skalenetwork/SGXWallet/pull/270)

**IMA (1.0.0-develop.136)**

-   Added basic pending work checker via new skaled APIs [\[PR#433\]](https://github.com/skalenetwork/ima/pull/433)
-   Fixed pending tracker [\[PR#434\]](https://github.com/skalenetwork/ima/pull/434)
-   Added gas estimation in IMA agent [\[PR#435\]](https://github.com/skalenetwork/ima/pull/435)
-   Added Audit report [\[PR#437\]](https://github.com/skalenetwork/ima/pull/437)
-   Gas estimation code refactored [\[PR#438\]](https://github.com/skalenetwork/ima/pull/438)
-   Moved total supply on mainnet to ima contracts [\[PR#455\]](https://github.com/skalenetwork/ima/pull/455)
-   Fixed and improved S-Chain network discovery  [\[PR#459\]](https://github.com/skalenetwork/ima/pull/459)
-   Updated dependencies

