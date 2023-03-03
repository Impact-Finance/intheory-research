import { MongoClient, ObjectId } from 'mongodb';

const mongodb_username = process.env.MONGODB_USERNAME;
const mongodb_password = process.env.MONGODB_PASSWORD;
const mongodb_clustername = process.env.MONGODB_CLUSTERNAME;
const mongodb_database = process.env.MONGODB_DATABASE;

const uri = `mongodb+srv://${mongodb_username}:${mongodb_password}@${mongodb_clustername}.4xsak5a.mongodb.net/${mongodb_database}?retryWrites=true&w=majority`;

export const getAllProjects = async () => {
  let client;

  try {
    client = await MongoClient.connect(uri);
  } catch (e) {
    return false;
  }

  const db = client.db();

  try {
    const collection = db.collection('researchProjects');
    const findResult = await collection.find({}).toArray();
    return findResult;
  } catch (e) {
    client.close();
    return false;
  } finally {
    client.close();
  }
};

export const getSingleProject = async (projectId: string | undefined) => {
  let client;
  let objId;

  if (projectId && projectId.length === 24) {
    objId = new ObjectId(projectId);
  } else {
    return false;
  }

  try {
    client = await MongoClient.connect(uri);
  } catch (e) {
    return false;
  }

  const db = client.db();

  try {
    const collection = db.collection('researchProjects');
    const findResult = await collection.findOne({ _id: objId });
    return findResult;
  } catch (e) {
    client.close();
    return false;
  } finally {
    client.close();
  }
};

export const getSingleResearcher = async (researcherId: string | undefined) => {
  let client;
  let objId;

  if (researcherId && researcherId.length === 24) {
    objId = new ObjectId(researcherId);
  } else {
    return false;
  }

  try {
    client = await MongoClient.connect(uri);
  } catch (e) {
    return false;
  }

  const db = client.db();

  try {
    const collection = db.collection('researcherProfiles');
    const findResult = await collection.findOne({
      _id: objId,
    });
    return findResult;
  } catch (e) {
    client.close();
    return false;
  } finally {
    client.close();
  }
};

export const getAllArtworks = async () => {
  let client;

  try {
    client = await MongoClient.connect(uri);
  } catch (e) {
    return false;
  }

  const db = client.db();

  try {
    const collection = db.collection('communityArtworks');
    const findResult = await collection.find({}).toArray();
    return findResult;
  } catch (e) {
    client.close();
    return false;
  } finally {
    client.close();
  }
};

export const getSomeArtworks = async (requestedAmount: number) => {
  let client;

  try {
    client = await MongoClient.connect(uri);
  } catch (e) {
    return false;
  }

  const db = client.db();

  try {
    const collection = db.collection('communityArtworks');
    const findResult = await collection
      .find({})
      .limit(requestedAmount)
      .toArray();
    return findResult;
  } catch (e) {
    client.close();
    return false;
  } finally {
    client.close();
  }
};

export const getProjectArtworks = async (
  projectArtworkIds: string[],
  numReturned: number
) => {
  let client;
  const objIdArray = projectArtworkIds.map(id => {
    return new ObjectId(id);
  });

  try {
    client = await MongoClient.connect(uri);
  } catch (e) {
    return false;
  }

  const db = client.db();

  try {
    const collection = db.collection('communityArtworks');
    const findResult = await collection
      .find({ _id: { $in: objIdArray } })
      .limit(numReturned)
      .toArray();
    return findResult;
  } catch (e) {
    client.close();
    return false;
  } finally {
    client.close();
  }
};

export const getSingleArtwork = async (artworkId: string | undefined) => {
  let client;
  let objId;

  if (artworkId && artworkId.length === 24) {
    objId = new ObjectId(artworkId);
  } else {
    return false;
  }

  try {
    client = await MongoClient.connect(uri);
  } catch (e) {
    return false;
  }

  const db = client.db();

  try {
    const collection = db.collection('communityArtworks');
    const findResult = await collection.findOne({ _id: objId });
    return findResult;
  } catch (e) {
    client.close();
    return false;
  } finally {
    client.close();
  }
};
