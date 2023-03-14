export const networkIds = [137, 80001, 42220, 44787];

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
    rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
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
