import { ethers } from 'ethers';

import { IERC20 } from '@/abi/abi';
import { stablecoinAddresses } from './supportedNetworks';

const approveErc20 = async (
  contributionAmount: number,
  connectedNetwork: number,
  contractAddress: string,
  provider: ethers.JsonRpcProvider,
  signer: ethers.JsonRpcSigner,
  decimals: number
) => {
  try {
    let stableAddress;

    if (connectedNetwork === 137) {
      stableAddress = stablecoinAddresses.polygon;
    } else if (connectedNetwork === 80001) {
      stableAddress = stablecoinAddresses.mumbai;
    } else if (connectedNetwork === 42220) {
      stableAddress = stablecoinAddresses.celo;
    } else if (connectedNetwork === 44787) {
      stableAddress = stablecoinAddresses.alfajores;
    } else {
      return false;
    }

    const stablecoinContract = new ethers.Contract(
      stableAddress,
      IERC20,
      signer
    );

    const tx = await stablecoinContract.approve(
      contractAddress,
      ethers.parseUnits(contributionAmount.toString(), decimals)
    );
    if (tx) {
      await provider.waitForTransaction(tx.hash);
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
};

export default approveErc20;
