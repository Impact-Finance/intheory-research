import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  txnHash: string;
  tokenId: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let txnHash = '';
  let tokenId = '';
  const { walletAddress, contributionAmount, contractAddress } = req.body;
  console.log(
    'Funding submitted by ' +
      walletAddress +
      ' for ' +
      contributionAmount +
      ' USDC'
  );
  //   try {
  // if (walletAddress && contractAddress && contributionAmount) {}
  if (Math.random() < 0.85) {
    txnHash =
      '0x8e24a77a94324b960bb308549dea058fc508096af9be3a0e90d7ccaf8a995e8e';
    tokenId = '1';
    res.status(200).json({ txnHash: txnHash, tokenId: tokenId });
  } else {
    res.status(500).json({ txnHash: '', tokenId: '' });
  }
  // res.status(200).json({ txnHash: txnHash, tokenId: tokenId });
  //   } catch {
  // res.status(500).json({ txnHash: '', tokenId: '' });
  //   }
}
