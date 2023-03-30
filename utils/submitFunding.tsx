import { ethers } from 'ethers';
import { Dispatch, SetStateAction } from 'react';

import { ResearchProject } from '@/abi/abi';

interface ContributionEvent {
  args: [contributor: string, amount: bigint, tokenId: bigint];
}

const submitFunding = async (
  contributionAmount: number,
  contractAddress: string,
  metadataUri: string,
  signer: ethers.JsonRpcSigner,
  decimals: number,
  setRequestingTxn: Dispatch<SetStateAction<boolean>>,
  setTxnGranted: Dispatch<SetStateAction<boolean>>
) => {
  function subscribeToEvent(
    contract: ethers.Contract,
    eventName: string
  ): Promise<ContributionEvent> {
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
      setRequestingTxn(false);
      setTxnGranted(true);
      const eventPayload: ContributionEvent = await subscribeToEvent(
        projectContract,
        'ContributionReceived'
      );
      const tokenId = eventPayload.args[2];
      setTxnGranted(false);
      return {
        newTxnHash: tx.hash,
        newTokenId: tokenId.toString(),
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
