export const networkIds = [137, 80001, 42220, 44787];

export const providerUrls = {
  mumbai: 'https://polygon-mumbai.infura.io/v3/',
  alfajores: 'https://celo-alfajores.infura.io/v3/',
  polygon: 'https://polygon-mainnet.infura.io/v3/',
  celo: 'https://celo-mainnet.infura.io/v3/',
};

export const stablecoinAddresses = {
  mumbai: '0x0FA8781a83E46826621b3BC094Ea2A0212e71B23',
  alfajores: '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1',
  polygon: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  celo: '0x765DE816845861e75A25fCA122bb6898B8B1282a',
};

const supportedNetworks = [
  //   {
  //     blockExplorerUrls: ['https://polygonscan.com/'],
  //     chainId: 137,
  //     chainName: 'Matic Mainnet',
  //     iconUrls: ['https://app.dynamic.xyz/assets/networks/polygon.svg'],
  //     nativeCurrency: {
  //       decimals: 18,
  //       name: 'MATIC',
  //       symbol: 'MATIC',
  //     },
  //     networkId: 137,
  //     rpcUrls: ['https://polygon-rpc.com'],
  //     shortName: 'MATIC',
  //     vanityName: 'Polygon',
  //   },
  {
    blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
    chainId: 80001,
    chainName: 'Mumbai Testnet',
    iconUrls: ['https://app.dynamic.xyz/assets/networks/polygon.svg'],
    nativeCurrency: {
      decimals: 18,
      name: 'MATIC',
      symbol: 'MATIC',
    },
    networkId: 80001,
    rpcUrls: ['https://matic-mumbai.chainstacklabs.com'],
    shortName: 'MATIC Test',
    vanityName: 'Mumbai',
  },
  //   {
  //     blockExplorerUrls: ['https://explorer.celo.org'],
  //     chainId: 42220,
  //     chainName: 'Celo Mainnet',
  //     iconUrls: ['https://i.imgur.com/zm3hdoL.png'],
  //     nativeCurrency: {
  //       decimals: 18,
  //       name: 'CELO',
  //       symbol: 'CELO',
  //     },
  //     networkId: 42220,
  //     rpcUrls: ['https://forno.celo.org'],
  //     shortName: 'CELO',
  //     vanityName: 'Celo',
  //   },
  {
    blockExplorerUrls: ['https://alfajores-blockscout.celo-testnet.org'],
    chainId: 44787,
    chainName: 'Alfajores Testnet',
    iconUrls: ['https://i.imgur.com/zm3hdoL.png'],
    nativeCurrency: {
      decimals: 18,
      name: 'CELO',
      symbol: 'CELO',
    },
    networkId: 44787,
    rpcUrls: ['https://alfajores-forno.celo-testnet.org'],
    shortName: 'CELO',
    vanityName: 'Alfajores',
  },
];

export default supportedNetworks;
