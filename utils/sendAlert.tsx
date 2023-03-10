const sendAlert = async (
  projectId: string,
  txnHash: string,
  imageUrl: string,
  funder: string,
  fundingAmount: number
) => {
  const response = await fetch('/api/alert', {
    method: 'POST',
    body: JSON.stringify({
      projectId,
      txnHash,
      imageUrl,
      funder,
      fundingAmount,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    console.log('Alert sent');
    return true;
  } else {
    console.log('Alert sending failed');
    return false;
  }
};

export default sendAlert;
