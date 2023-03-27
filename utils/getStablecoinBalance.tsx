const getStablecoinBalance = async (
  network: number | undefined,
  walletAddress: string
) => {
  const queryReqBody = {
    network,
    walletAddress,
  };

  const queryResponse = await fetch('/api/query', {
    method: 'POST',
    body: JSON.stringify(queryReqBody),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const { balance } = await queryResponse.json();

  if (queryResponse.ok) {
    return balance;
  } else {
    return '--';
  }
};

export default getStablecoinBalance;
