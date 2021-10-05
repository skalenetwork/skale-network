# SKALE Network Product Updates (SEPTEMBER 2021)

These updates are posted in: 

-   <https://github.com/skalenetwork/skale-network/tree/master/updates>
-   <https://forum.skale.network/>
-   [SKALE Discord](https://discord.gg/vvUtWJB)

If you would like to suggest changes, please post, discuss, or open a GitHub issue respective of the channels listed above.

## Month focus

During September, the team has been mostly working on:

-   abc
-   abc


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
