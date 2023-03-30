import { Wallet } from '@dynamic-labs/sdk-react';
import { ethers } from 'ethers';
import { IERC20 } from '@/abi/abi';
import { stablecoinAddresses } from './supportedNetworks';

const getStablecoinBalance = async (
  network: number | undefined,
  primaryWallet: Wallet
) => {
  let contract;
  let decimals;
  try {
    const signer =
      (await primaryWallet.connector.getSigner()) as ethers.JsonRpcSigner;
    if (network === 137) {
      contract = new ethers.Contract(
        stablecoinAddresses.polygon,
        IERC20,
        signer
      );
      decimals = 6;
    } else if (network === 42220) {
      contract = new ethers.Contract(stablecoinAddresses.celo, IERC20, signer);
      decimals = 18;
    } else if (network === 44787) {
      contract = new ethers.Contract(
        stablecoinAddresses.alfajores,
        IERC20,
        signer
      );
      decimals = 18;
    } else if (network === 80001) {
      contract = new ethers.Contract(
        stablecoinAddresses.mumbai,
        IERC20,
        signer
      );
      decimals = 6;
    } else {
      return '--';
    }
    const stableBalance = await contract.balanceOf(primaryWallet.address);
    const formattedBalance = ethers.formatUnits(stableBalance, decimals);
    return formattedBalance;
  } catch {
    console.log('error');
    return '--';
  }
};

export default getStablecoinBalance;
