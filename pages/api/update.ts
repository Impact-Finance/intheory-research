import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, ObjectId } from 'mongodb';
import { S3 } from 'aws-sdk';
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

const s3 = new S3({
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
    network,
    tokenId,
    contract,
    imageUrl,
    metadataCid,
  } = req.body;
  const projectIdObj = new ObjectId(projectId);
  let mongoClient: MongoClient;

  try {
    mongoClient = await MongoClient.connect(mongoUri);
    const db = mongoClient.db();
    const projectsCollection = db.collection('researchProjects');
    const artworksCollection = db.collection('communityArtworks');

    // Create new art object
    const insertedArt = await artworksCollection.insertOne({
      associatedProjectId: projectId,
      associatedProjectName: projectName,
      fundingAmount: contributionAmount,
      funder: funder,
      txnHash: txnHash,
      network: network,
      tokenId: tokenId,
      contract: contract,
      metadataCid: metadataCid,
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

    // Fetch image from remote url and upload to s3
    const streamToS3 = async (
      url: string,
      bucketName: string,
      objectKey: string
    ) => {
      return new Promise((resolve, reject) => {
        https
          .get(url, res => {
            if (res.statusCode !== 200) {
              reject(
                new Error(
                  `Failed to download image: ${res.statusCode} ${res.statusMessage}`
                )
              );
              return;
            }
            const params = {
              Bucket: bucketName,
              Key: objectKey + '.jpg',
              Body: res,
              ACL: 'public-read',
              ContentType: 'image/jpeg',
            };

            // S3 ManagedUpload with callbacks are not supported in AWS SDK for JavaScript (v3).
            // Please convert to `await client.upload(params, options).promise()`, and re-run aws-sdk-js-codemod.
            s3.upload(params, (err: any, data: any) => {
              if (err) {
                reject(err);
              } else {
                resolve(data);
              }
            });
          })
          .on('error', err => {
            reject(err);
          });
      });
    };

    await streamToS3(imageUrl, uploadLocation, insertedArtId);

    mongoClient.close();

    res.status(200).json({ message: 'Data successfully uploaded' });
  } catch {
    res.status(500).json({ message: 'DATA UPLOAD FAILED' });
  }
}
