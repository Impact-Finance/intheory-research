import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, ObjectId } from 'mongodb';
import AWS from 'aws-sdk';
import https from 'https';

const mongodb_username = process.env.MONGODB_USERNAME;
const mongodb_password = process.env.MONGODB_PASSWORD;
const mongodb_clustername = process.env.MONGODB_CLUSTERNAME;
const mongodb_database = process.env.MONGODB_DATABASE;
const aws_bucket_name = process.env.AWS_BUCKET_NAME;
const aws_region = process.env.AWS_BUCKET_REGION;
const aws_key_id = process.env.AWS_KEY_ID;
const aws_secret_key = process.env.AWS_SECRET;

const mongoUri = `mongodb+srv://${mongodb_username}:${mongodb_password}@${mongodb_clustername}.4xsak5a.mongodb.net/${mongodb_database}?retryWrites=true&w=majority`;

const s3 = new AWS.S3({
  accessKeyId: aws_key_id,
  secretAccessKey: aws_secret_key,
  region: aws_region,
});
const uploadLocation = aws_bucket_name + '/communityArtworks'; // Folder name in S3 bucket

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    projectId,
    projectName,
    contributionAmount,
    funder,
    txnHash,
    imageUrl,
  } = req.body;
  const projectIdObj = new ObjectId(projectId);
  let client: MongoClient;

  try {
    client = await MongoClient.connect(mongoUri);
    const db = client.db();
    const projectsCollection = db.collection('researchProjects');
    const artworksCollection = db.collection('communityArtworks');

    // Create new art object
    const insertedArt = await artworksCollection.insertOne({
      associatedProjectId: projectId,
      associatedProjectName: projectName,
      fundingAmount: contributionAmount,
      funder: funder,
      txnHash: txnHash,
    });

    const insertedArtId = insertedArt.insertedId.toString();

    // Update project information
    await projectsCollection.updateOne(
      { _id: projectIdObj },
      {
        $inc: {
          fundingRaised: contributionAmount,
        },
        $push: {
          associatedArtIds: insertedArtId,
        },
      }
    );

    // Fetch image from remote url
    https.get(imageUrl, response => {
      let imageBytes = '';
      response.setEncoding('binary');
      response.on('data', chunk => {
        imageBytes += chunk;
      });
      response.on('end', () => {
        const imageBuffer = Buffer.from(imageBytes, 'binary');
        // Upload the image buffer to S3 bucket
        const params = {
          Bucket: uploadLocation,
          Key: insertedArtId + '.jpg',
          Body: imageBuffer,
          ContentType: 'image/jpeg',
        };
        s3.putObject(params, (err, data) => {
          if (err) {
            console.error(err);
          } else {
            console.log('Successfully uploaded image to S3 bucket');
          }
          client.close();
        });
      });
    });

    res.status(200).json({ message: 'Data successfully uploaded' });
  } catch {
    res.status(500).json({ message: 'DATA UPLOAD FAILED' });
  }
}
