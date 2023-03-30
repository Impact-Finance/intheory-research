import { ethers } from 'ethers';

import { ResearchProject } from '@/abi/abi';

const submitFunding = async (
  contributionAmount: number,
  contractAddress: string,
  metadataUri: string,
  signer: ethers.JsonRpcSigner,
  decimals: number
) => {
  function subscribeToEvent(contract: ethers.Contract, eventName: string) {
    return new Promise((resolve, reject) => {
      const filter = contract.filters[eventName]();
      contract.on(eventName, (contributor, amount, tokenId) => {
        contract.removeListener(eventName, listener);
        resolve(tokenId);
      });
      const listener = (contributor: string, amount: any, tokenId: any) => {
        contract.removeListener(eventName, listener);
        resolve(tokenId);
      };
      contract.once(filter, listener);
    });
  }

  try {
    const projectContract = new ethers.Contract(
      contractAddress,
      ResearchProject,
      signer
    );
    const tx = await projectContract.contribute(
      ethers.parseUnits(contributionAmount.toString(), decimals),
      metadataUri
    );
    if (tx) {
      const tokenId = await subscribeToEvent(
        projectContract,
        'ContributionReceived'
      );
      return {
        newTxnHash: tx.hash,
        newTokenId: parseInt((tokenId as bigint).toString()),
      };
    } else {
      return {
        newTxnHash: '',
        newTokenId: undefined,
      };
    }
  } catch {
    return {
      newTxnHash: '',
      newTokenId: undefined,
    };
  }
};

export default submitFunding;
