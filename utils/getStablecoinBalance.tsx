import Web3 from 'web3';
import { AbiItem } from 'web3-utils';

const getStablecoinBalance = async (
  network: number | undefined,
  walletAddress: string
) => {
  const infuraKey = process.env.INFURA_API_KEY;
  let web3;
  let tokenAddress;
  let decimals;
  const balanceOfABI = [
    {
      constant: true,
      inputs: [
        {
          name: '_owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          name: 'balance',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
  ];

  if (network === 137) {
    web3 = new Web3(
      new Web3.providers.HttpProvider(
        `https://polygon-mainnet.infura.io/v3/${infuraKey}`
      )
    );
    tokenAddress = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174';
    decimals = 6;
  }
  if (network === 80001) {
    web3 = new Web3(
      new Web3.providers.HttpProvider(
        `https://polygon-mumbai.infura.io/v3/${infuraKey}`
      )
    );
    tokenAddress = '0x0FA8781a83E46826621b3BC094Ea2A0212e71B23';
    decimals = 6;
  }
  if (network === 42220) {
    web3 = new Web3(
      new Web3.providers.HttpProvider(
        `https://celo-mainnet.infura.io/v3/${infuraKey}`
      )
    );
    tokenAddress = '0x765DE816845861e75A25fCA122bb6898B8B1282a';
    decimals = 18;
  }
  if (network === 44787) {
    web3 = new Web3(
      new Web3.providers.HttpProvider(
        `https://celo-alfajores.infura.io/v3/${infuraKey}`
      )
    );
    tokenAddress = '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1';
    decimals = 18;
  }

  if (web3 && tokenAddress && decimals) {
    const contract = new web3.eth.Contract(
      balanceOfABI as AbiItem[],
      tokenAddress
    );
    const result = await contract.methods.balanceOf(walletAddress).call();
    const formattedResult = (result / 10 ** decimals).toString();
    return formattedResult;
  } else {
    return '0';
  }
};

export default getStablecoinBalance;
