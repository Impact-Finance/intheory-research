import Web3 from 'web3';
import { AbiItem } from 'web3-utils';

import { ResearchProject, IERC20 } from '@/abi/abi';
import { stablecoinAddresses } from './supportedNetworks';
import getWei from './getWei';

const submitFunding = async (
  walletAddress: string,
  contributionAmount: number,
  connectedNetwork: number,
  contractAddress: string,
  metadataUri: string
) => {
  try {
    let stableAddress;
    let contributeReceipt;
    if (connectedNetwork === 137) {
      stableAddress = stablecoinAddresses.polygon;
    }
    if (connectedNetwork === 80001) {
      stableAddress = stablecoinAddresses.mumbai;
    }
    if (connectedNetwork === 42220) {
      stableAddress = stablecoinAddresses.celo;
    }
    if (connectedNetwork === 44787) {
      stableAddress = stablecoinAddresses.alfajores;
    }
    const web3 = new Web3(window.ethereum);

    const projectContract = new web3.eth.Contract(
      ResearchProject as AbiItem[],
      contractAddress
    );
    const stablecoinContract = new web3.eth.Contract(
      IERC20 as AbiItem[],
      stableAddress
    );

    await stablecoinContract.methods
      .approve(contractAddress, getWei(connectedNetwork, contributionAmount))
      .send({ from: walletAddress });
    contributeReceipt = await projectContract.methods
      .contribute(getWei(connectedNetwork, contributionAmount), metadataUri)
      .send({
        from: walletAddress,
      });

    console.log(contributeReceipt);

    const tokenId =
      contributeReceipt.events.ContributionReceived.returnValues.tokenId;

    return {
      newTxnHash: contributeReceipt.transactionHash,
      newTokenId: tokenId,
    };
  } catch {
    return {
      newTxnHash: '',
      newTokenId: undefined,
    };
  }
};

export default submitFunding;
