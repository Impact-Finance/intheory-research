import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAIApi, Configuration } from 'openai';

type Data = {
  imageUrl: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const imagePrompt =
    req.body.keywords +
    ' | ultra detailed | 8k | award winning science images | ' +
    req.body.styles +
    ' art style | ' +
    req.body.colors;

  console.log('New image requested with prompt: ' + imagePrompt);

  try {
    const genResponse = await openai.createImage({
      prompt: imagePrompt,
      n: 1,
      size: '1024x1024',
    });

    const imageUrl = genResponse.data.data[0].url;

    res.status(200).json({ imageUrl: imageUrl! });
  } catch (e) {
    console.error;
    res.status(500).json({ imageUrl: '' });
  }
}
