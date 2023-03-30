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
    const filter = contract.filters[eventName]();
    return new Promise(resolve => {
      contract.once(filter, resolve);
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
      const eventPayload: any = await subscribeToEvent(
        projectContract,
        'ContributionReceived'
      );
      const tokenId = eventPayload.args[2];
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
