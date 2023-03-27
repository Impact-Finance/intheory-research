const createMetadata = async (
  imageUrl: string,
  projectName: string,
  contributionAmount: number | undefined,
  minter: string
) => {
  const metadataReqBody = {
    imageUrl,
    projectName,
    contributionAmount,
    minter,
  };

  const metadataResponse = await fetch('/api/metadata', {
    method: 'POST',
    body: JSON.stringify(metadataReqBody),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const { metadataUri } = await metadataResponse.json();

  if (metadataResponse.ok) {
    return metadataUri;
  } else {
    return false;
  }
};

export default createMetadata;
