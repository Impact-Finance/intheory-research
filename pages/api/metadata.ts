import type { NextApiRequest, NextApiResponse } from 'next';
import { NFTStorage, File } from 'nft.storage';
// import fetch from "node-fetch";

type Data = {
  metadataUri: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { imageUrl, projectName, contributionAmount, minter } = req.body;

  const nftStorage = new NFTStorage({ token: process.env.NFT_STORAGE_API_KEY });

  const fetchedImage = await fetch(imageUrl);
  const buffer = await fetchedImage.arrayBuffer();
  const imageFile = new File([buffer], 'intheory-nft.jpg', {
    type: 'image/jpeg',
  });

  const metadata = await nftStorage.store({
    name: 'inTheory Research NFT',
    description:
      "The existence of this NFT certifies a contribution towards the advancement of scientific research, as detailed in the properties field of this token's metadata. Thank you for supporting human progress. Learn more at https://intheory.science.",
    image: imageFile,
    properties: {
      researchFunded: projectName,
      createdBy: minter,
      contributionAmount: contributionAmount + ' USD',
    },
  });
  try {
    res.status(200).json({ metadataUri: metadata.url });
  } catch {
    res.status(500).json({ metadataUri: '' });
  }
}
