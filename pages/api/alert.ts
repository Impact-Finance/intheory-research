import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      const { projectId, txnHash, imageUrl, funder, fundingAmount } = req.body;

      const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
          user: 'impact.finance.utility@gmail.com',
          pass: process.env.GOOGLE_PW,
        },
        secure: true,
      });

      const mailData = {
        from: 'impact.finance.utility@gmail.com',
        to: 'brett.cornick@impact-finance.io',
        subject: `Error uploading inTheory DB Data for Project ${projectId}`,
        text:
          'Error uploading data for funding transaction on project ID: ' +
          projectId +
          ' | Transaction hash: ' +
          txnHash +
          ' | Image URL: ' +
          imageUrl +
          ' | Funder: ' +
          funder +
          ' | Contribution amount: ' +
          fundingAmount,
        html: `<div>Error uploading data for funding transaction on project ID: ${projectId}</div><p>Transaction hash:
        ${txnHash}</p><p>Image URL ${imageUrl}</p><p>Funder: ${funder}</p><p>Contribution amount: ${fundingAmount}</p>`,
      };

      await transporter.sendMail(mailData);

      res.status(201).json({ message: 'Message received!' });
    } catch {
      res.status(500).json({ message: 'Error sending message' });
    }
  }
}
