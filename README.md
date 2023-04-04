# inTheory Research Funding [![GitHub license](https://img.shields.io/github/license/Impact-Finance/intheory-research)](https://github.com/Impact-Finance/intheory-research/blob/main/LICENSE) [![GitHub forks](https://img.shields.io/github/forks/Impact-Finance/intheory-research)](https://github.com/Impact-Finance/intheory-research/network) [![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FDeSci_Impact)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FImpact-Finance%2Fintheory-mobile-nft-mint-celo)

## About inTheory Research

inTheory is a decentralized science funding platform utilizing web3 technologies. inTheory allows any user to support scientific research by collecting project-inspired digital artworks.

Built using Solidity, ethers.js, TypeScript, Next.js, SASS, and the DALL-E API. For more details check out our [website](https://intheory.science).

## Installation

To install the dependencies, clone the repository and run:

```bash
npm install
```

## Organization

- `/abi`: Application Binary Interface of deployed smart contracts, allowing for interaction through the platform interface.

- `/components`: React components for site, layout, and individual pages.

- `/content`: Content files for FAQ and terms and conditions.

- `/evm`: Smart contracts & testing/deployment scripts (Truffle). A new ResearchProject contract is deployed for each research project on the platform on all supported chains (currently Polygon and Celo for mainnet, Mumbai and Alfajores testnets).

- `/pages`: NextJs page structure.

- `/public`: Images and icons.

- `/styles`: SASS styling.

- `/utils`: Helper functions.

## Env Variables

View `/.env.example` for necessary environment variables. Service providers (MongoDB, Infura, NFT.storage, etc.) may be replaced with those of your choice.

## Contributing

Contributions to this project are welcome. Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.

### Built by [Impact Finance](https://impact-finance.io)

#### Hosted app can be found at [intheory.app](https://intheory.app)

#### Questions about this repo? Contact us at [info@impact-finance.io](mailto:info@impact-finance.io)
