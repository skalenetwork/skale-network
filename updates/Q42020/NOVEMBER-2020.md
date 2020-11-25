# SKALE Network Product Updates (OCTOBER 2020)

These updates are posted in: 

-   <https://github.com/skalenetwork/skale-network/tree/master/updates>
-   <https://forum.skale.network/>
-   [SKALE Discord](https://discord.gg/vvUtWJB)

If you would like to suggest changes, please post, discuss, or open a GitHub issue respective of the channels listed above.

## Month focus

During November, the team was mostly focused on:

-   Mainnet Phase 2 support and bug fixes


## Code changes

October:

**SKALE Manager ()**

-   Fixed Bounty V2 migrartion issue [\[PR#419\]](https://github.com/skalenetwork/skale-manager/pull/419)
-   Added independent audits references to the documentation[\[PR#420\]](https://github.com/skalenetwork/skale-manager/pull/420)
-   Added name check as a part of the IMA improvements [\[PR#423\]](https://github.com/skalenetwork/skale-manager/pull/423)
-   Merged release artifacts to the develop branch [\[PR#426\]](https://github.com/skalenetwork/skale-manager/pull/426)
-   Added range check as part of the Crypto audit enhancements [\[PR#427\]](https://github.com/skalenetwork/skale-manager/pull/427)
-   Added support of 1/32 of a node configuration for the schains launch [\[PR#431\]](https://github.com/skalenetwork/skale-manager/pull/431)
-   Updated dependencies

**SKALE Consensus**

-   Added BLAKE3 hashing as a part of the performance improvements [\[PR#282\]](https://github.com/skalenetwork/skale-consensus/pull/282), [\[PR#283\]](https://github.com/skalenetwork/skale-consensus/pull/283), [\[PR#284\]](https://github.com/skalenetwork/skale-consensus/pull/284), [\[PR#286\]](https://github.com/skalenetwork/skale-consensus/pull/286)
-   Fixed libBLS build after latest libff update [\[PR#285\]](https://github.com/skalenetwork/skale-consensus/pull/285)
-   Updated libBLS [\[PR#288\]](https://github.com/skalenetwork/skale-consensus/pull/288)
-   Removed incorrect warning [\[PR#289\]](https://github.com/skalenetwork/skale-consensus/pull/289)
-   Fixed stop after assert in BlockProposalClientAgent[\[PR#290\]](https://github.com/skalenetwork/skale-consensus/pull/290)
-   Fixed busy wait in NetworkReadLoop if there are no messages [\[PR#291\]](https://github.com/skalenetwork/skale-consensus/pull/291)
-   Fixed sending too many rebroadcasts [\[PR#292\]](https://github.com/skalenetwork/skale-consensus/pull/292), [\[PR#293\]](https://github.com/skalenetwork/skale-consensus/pull/293)
-   Fixed: don't do an ECDSA signature check on a default block[\[PR#294\]](https://github.com/skalenetwork/skale-consensus/pull/294)
-   Fixed retry to SGX when the server is down [\[PR#295\]](https://github.com/skalenetwork/skale-consensus/pull/295)
-   Fixed empty block time is consensus [\[PR#296\]](https://github.com/skalenetwork/skale-consensus/pull/296)

**SGXWallet (1.59.1-develop.2)**

-   Fixed memory leak in BLS [\[PR#194\]](https://github.com/skalenetwork/SGXWallet/pull/194)
-   Extended tests for DKG procedure [\[PR#195\]](https://github.com/skalenetwork/SGXWallet/pull/195)
-   Added ECDSA key import [\[PR#196\]](https://github.com/skalenetwork/SGXWallet/pull/196)
-   Updated libBLS [\[PR#197\]](https://github.com/skalenetwork/SGXWallet/pull/197), [\[PR#199\]](https://github.com/skalenetwork/SGXWallet/pull/199)
-   Performance improvements: added fast ECDSA signatures [\[PR#200\]](https://github.com/skalenetwork/SGXWallet/pull/200)
-   Updated SGX wallet to always use signed enclave for SGX hardware builds [\[PR#201\]](https://github.com/skalenetwork/SGXWallet/pull/201)
-   Fixed SGX init crash on GitHub actions [\[PR#208\]](https://github.com/skalenetwork/SGXWallet/pull/208)
-   Removed SetDKGPoly call [\[PR#210\]](https://github.com/skalenetwork/SGXWallet/pull/210)
-   GitHub actions CI process improvements [\[PR#213\]](https://github.com/skalenetwork/SGXWallet/pull/213), [\[PR#215\]](https://github.com/skalenetwork/SGXWallet/pull/215)
-   Fixed SGX_ERROR_OUT_OF_TCS  [\[PR#219\]](https://github.com/skalenetwork/SGXWallet/pull/219)
-   Added nightly tests  [\[PR#224\]](https://github.com/skalenetwork/SGXWallet/pull/224), [\[PR#225\]](https://github.com/skalenetwork/SGXWallet/pull/225)
-   Intel Whitelisting submission [\[PR#226\]](https://github.com/skalenetwork/SGXWallet/pull/226), [\[PR#227\]](https://github.com/skalenetwork/SGXWallet/pull/227), [\[PR#228\]](https://github.com/skalenetwork/SGXWallet/pull/228), [\[PR#229\]](https://github.com/skalenetwork/SGXWallet/pull/229), [\[PR#230\]](https://github.com/skalenetwork/SGXWallet/pull/230), [\[PR#231\]](https://github.com/skalenetwork/SGXWallet/pull/231), [\[PR#232\]](https://github.com/skalenetwork/SGXWallet/pull/232), [\[PR#233\]](https://github.com/skalenetwork/SGXWallet/pull/233), [\[PR#234\]](https://github.com/skalenetwork/SGXWallet/pull/234)
