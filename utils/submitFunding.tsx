const submitFunding = async (
  walletAddress: string,
  contributionAmount: number,
  contractAddress: string
) => {
  const fundingReqBody = {
    walletAddress: walletAddress,
    contributionAmount: contributionAmount,
    contractAddress: contractAddress,
  };

  const fundingResponse = await fetch('/api/fund', {
    method: 'POST',
    body: JSON.stringify(fundingReqBody),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const fundingData = await fundingResponse.json();

  if (!fundingResponse.ok) {
    return {
      newTxnHash: '',
      newTokenId: '',
    };
  } else {
    return {
      newTxnHash: fundingData.txnHash,
      newTokenId: fundingData.tokenId,
    };
  }
};

export default submitFunding;
