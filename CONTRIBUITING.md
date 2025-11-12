# Contributing to SKALE Network

Welcome\! We appreciate your interest in contributing to the **SKALE Network** and helping to drive its growth. Your contributions, whether reporting bugs, suggesting features, or submitting code, are vital to the health of the ecosystem.

Please note that all contributors are expected to adhere to our [Code of Conduct](https://github.com/skalenetwork/skale-network?tab=coc-ov-file#skale-code-of-conduct).

## Reporting Issues and Feature Requests

The SKALE Network Engineering team uses [GitHub Projects](https://github.com/orgs/skalenetwork/projects/6) and a Kanban process to manage all issues, bugs, and feature requests. Following these guidelines helps us prioritize and address your concerns quickly.

### How to Submit an Issue

1.  **Find the Right Repository:** SKALE is composed of multiple components. Please file your issue in the specific repository where the problem originates.  

      * **BITE-ts:** Issues with encrypted transactions (create, send, decrypt). Problems or unexpected behavior with BITE-ts library APIs (e.g., bite.encryptTransaction(tx), bite.getDecryptedTransactionData(transactionHash). $\rightarrow$ **[`skalenetwork/bite-ts`](https://github.com/skalenetwork/bite-ts)**
      * **SKALE Manager Smart Contracts:** Questions/issues regarding core smart contracts $\rightarrow$ **[`skalenetwork/skale-manager`](https://github.com/skalenetwork/skale-manager)**
      * **SKALE Chains (Transactions/Calls):** Bugs faced when interacting with SKALE chains (calls, transactions, filters, etc.) $\rightarrow$ **[`skalenetwork/skaled`](https://github.com/skalenetwork/skaled)**
      * **IMA Bridge:** Problems noticed while transferring tokens through the IMA bridge $\rightarrow$ **[`skalenetwork/IMA`](https://github.com/skalenetwork/IMA)**
      * **SKALE Portal** Problems with integrated tools/APIs (MetaMask, wallets, bridges, explorers), bugs in page functionality (UI, routing, formatting, performance), bugs in your local or production environment affecting Portal core functionality $\rightarrow$ **[`skalenetwork/portal`](https://github.com/skalenetwork/portal/issues)**
      * **Block Explorer:** Any issues with the Block Explorer (Blockscout) $\rightarrow$ **[`skalenetwork/blockscout`](https://github.com/skalenetwork/blockscout)**
      * **Infrastructure:** Infrastructure or SKALE Node deployment-related problems $\rightarrow$ **[`skalenetwork/skale-node`](https://github.com/skalenetwork/skale-node)**
      * **docs.skale.network** - Raise a ticket if you’re having trouble finding information or encounter any website issues related to page functionality (misspellings, formatting errors, rendering, routing, loading, or page display problems). $\rightarrow$ **[`skalenetwork/docs.skale.space`](https://github.com/skalenetwork/docs.skale.space)**

2. **Before submitting:**
Check if an issue for your problem already exists by searching under Issues.
If you can’t find an open issue addressing it, create a new one — include a clear title and detailed description with all relevant information.

3. **Be Detailed:** Provide as much information as possible to allow the team to effectively troubleshoot. A good bug report includes:

      * **Environment details** (OS, Node version, browser version, etc.).
      * **Steps to reproduce** (clear, numbered steps).
      * **Expected behavior** vs. **Actual behavior**.
      * **Screenshots or logs** (where applicable).

4. **Tag for Triage:** For quick visibility, please assign the newly created issue to **`@polina_skale`** or **`@DmytroNazarenko`**. They will ensure the correct person is assigned to the issue.

5. **Triage and Feedback:** The SKALE Team will triage the finding, determine the engineering plan, and agree on a release strategy. We will post follow-ups and release plans directly to the issue comments to keep you informed.

### Feature Requests & Proposals Sharing
If you’d like to start a discussion about developing a new feature or modifying an existing one, please open a new topic on the [SKALE Forum](https://forum.skale.network/).Share your idea and explain why it would be a valuable addition to the SKALE ecosystem. 

Alternatively, you can start a thread under [GitHub Discussions-> Ideas](https://github.com/orgs/skalenetwork/discussions/categories/ideas).

## Security reports
Please do not open up a GitHub issue if it relates to a security vulnerability, and instead refer to our [security policy](https://github.com/skalenetwork/skale-network?tab=security-ov-file#security).

## I Have a Question

If you want to ask a question please use the following resources available for you:

- [SKALE Docs portal](https://github.com/skalenetwork/docs.skale.space)
-  Join the [SKALE Discord](https://discord.gg/skale) and open a support ticket — our team will be happy to assist you.

## Contributing Code (Pull Requests)

We welcome code contributions\! If you wish to contribute a fix or a new feature, please follow the steps below.

### Before You Start

1. **Check Issues:** See if a similar issue or feature request already exists. If not, consider creating an issue first to discuss your proposed changes with the team. This prevents wasted effort on features that may not align with the network's roadmap.
2. **Clone the Repository:** Fork the relevant repository and clone it locally.
3. **Branching:** Create a new, descriptive branch for your work (e.g., `fix/bug-in-ima-client` or `feat/new-logging-method`).

### Submitting a Pull Request (PR)

1. **Develop & Test:** Implement your fix or feature. Ensure all existing tests pass and add new tests to cover the changes you've made.
2. **Commit Messages:** Write clear, concise, and descriptive commit messages.
4. **Open the PR:** Submit your Pull Request to the `main` or designated branch of the original repository.
5. **Attach ticket** Please attach the relevant issue that this PR fixes or resolves.
6. **Complete the Template:** Fill out the PR template completely, providing a detailed summary of your changes, the motivation for the change, and any relevant technical details.
7. **Review Process:** The engineering team will review your PR. Be responsive to feedback and prepared to make further changes. We may request updates to maintain code quality, consistency, and alignment with SKALE standards.


