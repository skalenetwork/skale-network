# SKALE Network Product Updates (MARCH 2021)

These updates are posted in: 

-   <https://github.com/skalenetwork/skale-network/tree/master/updates>
-   <https://forum.skale.network/>
-   [SKALE Discord](https://discord.gg/vvUtWJB)

If you would like to suggest changes, please post, discuss, or open a GitHub issue respective of the channels listed above.

## Month focus

During March, the team has been mostly working on:

-   


## Code changes

March:

**SKALE Manager (1.8.0-develop.25)**
-   Upgraded libraties [\[PR#545\]](https://github.com/skalenetwork/skale-manager/pull/545)
-   Added upgrades transactions to multisig wallet [\[PR#546\]](https://github.com/skalenetwork/skale-manager/pull/546)
-   Added hotfix for manifest filename [\[PR#548\]](https://github.com/skalenetwork/skale-manager/pull/548)
-   Updated dependencies

**SKALE Consensus**

-   Added Consensus statistics [\[PR#374\]](https://github.com/skalenetwork/skale-consensus/pull/374), [\[PR#379\]](https://github.com/skalenetwork/skale-consensus/pull/379)
-   Fixed lastCommittedBlockID after snapshot download [\[PR#377\]](https://github.com/skalenetwork/skale-consensus/pull/377)
-   Added logs to diagnose block finalization download problems[\[PR#381\]](https://github.com/skalenetwork/skale-consensus/pull/381)
-   Fixed graceful schain stop [\[PR#384\]](https://github.com/skalenetwork/skale-consensus/pull/384)
-   dependency-link-fix resolved problem with not found libs by cmake [\[PR#385\]](https://github.com/skalenetwork/skale-consensus/pull/385)
-   Fixed Skaled hangs on exit if wrong block number in DB [\[PR#386\]](https://github.com/skalenetwork/skale-consensus/pull/386)
-   Increased minimum gas price [\[PR#388\]](https://github.com/skalenetwork/skale-consensus/pull/388)
-   Set last commit id earlier during startup [\[PR#390\]](https://github.com/skalenetwork/skale-consensus/pull/390), [\[PR#391\]](https://github.com/skalenetwork/skale-consensus/pull/391)
-   Fixed SIGSEGV during processProposalRequest [\[PR#392\]](https://github.com/skalenetwork/skale-consensus/pull/392)
-   Fixed ZeroMq close [\[PR#395\]](https://github.com/skalenetwork/skale-consensus/pull/395), [\[PR#396\]](https://github.com/skalenetwork/skale-consensus/pull/396), [\[PR#399\]](https://github.com/skalenetwork/skale-consensus/pull/399)
-   Added a flag to consensus to enable ZeroMQ to SGX [\[PR#400\]](https://github.com/skalenetwork/skale-consensus/pull/400)

**SKALED (3.5.15-develop.0)**

-   Fixed timeout exit with requested earlier code [\[PR#504\]](https://github.com/skalenetwork/skaled/pull/504)
-   Fixed broken snapshots [\[PR#505\]](https://github.com/skalenetwork/skaled/pull/505)
-   Re-designed true/fail tests for REST client/server [\[PR#508\]](https://github.com/skalenetwork/skaled/pull/508)
-   Cleanup before starting from snapshot [\[PR#509\]](https://github.com/skalenetwork/skaled/pull/509)
-   Added skaled emulator [\[PR#512\]](https://github.com/skalenetwork/skaled/pull/512)
-   Adjsuted IMA MessageProxy contract call parameters [\[PR#518\]](https://github.com/skalenetwork/skaled/pull/518)
-   Fixed IMA message envelope validation  [\[PR#522\]](https://github.com/skalenetwork/skaled/pull/522)
-   Switched to manual SSL init [\[PR#531\]](https://github.com/skalenetwork/skaled/pull/531)
-   Integrated Consensus with exit fix [\[PR#538\]](https://github.com/skalenetwork/skaled/pull/538)
-   Updated snapshots documentation [\[PR#541\]](https://github.com/skalenetwork/skaled/pull/541)
-   Set exit timeout 57 sec [\[PR#543\]](https://github.com/skalenetwork/skaled/pull/543), [\[PR#544\]](https://github.com/skalenetwork/skaled/pull/544)
-   Fixed partial catchup [\[PR#546\]](https://github.com/skalenetwork/skaled/pull/546)
-   Updated consensus [\[PR#547\]](https://github.com/skalenetwork/skaled/pull/547)



