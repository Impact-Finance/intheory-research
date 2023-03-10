import { ResearchProject } from '@/app';

const updateData = async (
  project: ResearchProject,
  contributionAmount: number,
  walletAddress: string,
  txnHash: string,
  imageUrl: string
) => {
  const updateReqBody = {
    projectId: project._id,
    projectName: project.projectName,
    contributionAmount: contributionAmount,
    funder: walletAddress,
    txnHash: txnHash,
    imageUrl: imageUrl,
  };

  const updateResponse = await fetch('/api/update', {
    method: 'POST',
    body: JSON.stringify(updateReqBody),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await updateResponse.json();

  if (updateResponse.ok) {
    return true;
  } else {
    return false;
  }
};

export default updateData;
