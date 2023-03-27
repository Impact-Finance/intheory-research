import { ResearchProjectObject } from '@/app';

const updateData = async (
  project: ResearchProjectObject,
  contributionAmount: number,
  walletAddress: string,
  txnHash: string,
  imageUrl: string,
  network: number,
  tokenId: number,
  contract: string,
  metadataCid: string
) => {
  let networkName;
  if (network === 137) {
    networkName = 'polygon';
  }
  if (network === 42220) {
    networkName = 'celo';
  }
  if (network === 80001) {
    networkName = 'mumbai';
  }
  if (network === 44787) {
    networkName = 'alfajores';
  }

  const updateReqBody = {
    projectId: project._id,
    projectName: project.projectName,
    contributionAmount: contributionAmount,
    funder: walletAddress,
    txnHash: txnHash,
    network: networkName,
    tokenId: tokenId,
    contract: contract,
    imageUrl: imageUrl,
    metadataCid: metadataCid,
  };

  const updateResponse = await fetch('/api/update', {
    method: 'POST',
    body: JSON.stringify(updateReqBody),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  await updateResponse.json();

  if (updateResponse.ok) {
    return true;
  } else {
    return false;
  }
};

export default updateData;
