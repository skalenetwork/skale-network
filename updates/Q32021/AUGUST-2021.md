# SKALE Network Product Updates (AUGUST 2021)

These updates are posted in: 

-   <https://github.com/skalenetwork/skale-network/tree/master/updates>
-   <https://forum.skale.network/>
-   [SKALE Discord](https://discord.gg/vvUtWJB)

If you would like to suggest changes, please post, discuss, or open a GitHub issue respective of the channels listed above.

## Month focus

During August, the team has been mostly working on:

-   SKALE Manager: security improvements, increasing tests coverage, code cleanup
-   Denali V2 release and mainnet update support
-   SGX Wallet, SKALED and Consensus: IMA support and bug fixes, shared space updates, ZeroMQ support for IMA
-   IMA: various bug fixes, logs scan and logging improvements
-   SKALE Node components: IMA release support, improved stability and healthchecks, schain allocation updates


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

-   Added accept empty string as SGX url [\[PR#732\]](https://github.com/skalenetwork/skaled/pull/732)
-   Improved way to delete snapshot that failed to unpack [\[PR#734\]](https://github.com/skalenetwork/skaled/pull/734)
-   IMA progressive logs search enhancement [\[PR#736\]](https://github.com/skalenetwork/skaled/pull/736), [\[PR#737\]](https://github.com/skalenetwork/skaled/pull/737)
-   Fixed filestorage hash after restore from snapshot [\[PR#744\]](https://github.com/skalenetwork/skaled/pull/744), [\[PR#747\]](https://github.com/skalenetwork/skaled/pull/747)
-   Added extension check and test[\[PR#748\]](https://github.com/skalenetwork/skaled/pull/748)
-   Added passing block numbers for ETH logs from leading node to verifiers [\[PR#750\]](https://github.com/skalenetwork/skaled/pull/750), [\[PR#753\]](https://github.com/skalenetwork/skaled/pull/753)
-   Fixed blocks rotation in beta branch [\[PR#757\]](https://github.com/skalenetwork/skaled/pull/757)
-   Fixed typos [\[PR#758\]](https://github.com/skalenetwork/skaled/pull/758)
-   Improved IMA message verifier, Main Net connectivity problem handling [\[PR#761\]](https://github.com/skalenetwork/skaled/pull/761), [\[PR#764\]](https://github.com/skalenetwork/skaled/pull/764)
-   Improved IMA message verifier, Main Net connectivity problem handling [\[PR#761\]](https://github.com/skalenetwork/skaled/pull/761)


