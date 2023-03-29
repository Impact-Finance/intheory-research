// DO NOT CALL THESE FUNCTIONS FROM THE CLIENT SIDE OR IT WILL EXPOSE MONGODB CREDENTIALS

import { MongoClient, ObjectId } from 'mongodb';

const mongodb_username = process.env.MONGODB_USERNAME;
const mongodb_password = process.env.MONGODB_PASSWORD;
const mongodb_clustername = process.env.MONGODB_CLUSTERNAME;
const mongodb_database = process.env.MONGODB_DATABASE;

const uri = `mongodb+srv://${mongodb_username}:${mongodb_password}@${mongodb_clustername}.4xsak5a.mongodb.net/${mongodb_database}?retryWrites=true&w=majority`;

export const getSingleProjectAllDetails = async (
  projectId: string | undefined,
  numArtworks: number
) => {
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

  let project;
  let researcher;
  let artworks;

  try {
    const projectCollection = db.collection('researchProjects');
    const researcherCollection = db.collection('researcherProfiles');
    const artworkCollection = db.collection('communityArtworks');
    project = await projectCollection.findOne({ _id: objId });
    if (project) {
      researcher = await researcherCollection.findOne({
        _id: new ObjectId(project.researcherId),
      });
    }
    if (researcher && project && numArtworks > 0) {
      const artworkIdArray = project.associatedArtIds.map((id: string) => {
        return new ObjectId(id);
      });
      artworks = await artworkCollection
        .find({ _id: { $in: artworkIdArray } })
        .sort({ _id: -1 })
        .limit(numArtworks)
        .toArray();
    }

    const projectDetails = {
      project,
      researcher,
      artworks,
    };
    return projectDetails;
  } catch (e) {
    return false;
  }
};

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
    return false;
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
    return false;
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
    return false;
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
    return false;
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
    return false;
  }
};

export const getProjectArtworks = async (
  projectArtworkIds: string[],
  numReturned: number
) => {
  let client;
  if (projectArtworkIds) {
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
      return false;
    }
  } else {
    return false;
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
    return false;
  }
};

export const getRandomArtworks = async (numRequested: number) => {
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
      .aggregate([{ $sample: { size: numRequested } }])
      .toArray();
    return findResult;
  } catch (e) {
    return false;
  }
};

export const getRandomProjects = async (numRequested: number) => {
  let client;

  try {
    client = await MongoClient.connect(uri);
  } catch (e) {
    return false;
  }

  const db = client.db();

  try {
    const collection = db.collection('researchProjects');
    const findResult = await collection
      .aggregate([{ $sample: { size: numRequested } }])
      .toArray();
    return findResult;
  } catch (e) {
    return false;
  }
};

export const getHomeContent = async (
  numProjects: number,
  numArtworks: number
) => {
  let client;

  try {
    client = await MongoClient.connect(uri);
  } catch (e) {
    return false;
  }

  const db = client.db();

  try {
    const projectsCollection = db.collection('researchProjects');
    const artworkCollection = db.collection('communityArtworks');
    const projects = await projectsCollection
      .aggregate([{ $sample: { size: numProjects } }])
      .toArray();
    const artworks = await artworkCollection
      .aggregate([{ $sample: { size: numArtworks } }])
      .toArray();
    return {
      projects,
      artworks,
    };
  } catch (e) {
    return false;
  }
};

export const getPlatformStats = async () => {
  let client;
  let celoTotalFunding;
  let polygonTotalFunding;
  let platformTotalFunding;

  try {
    client = await MongoClient.connect(uri);
  } catch (e) {
    return false;
  }

  const db = client.db();

  try {
    const projectsCollection = db.collection('researchProjects');
    const artworkCollection = db.collection('communityArtworks');
    const researcherCollection = db.collection('researcherProfiles');
    const activeProjects = await projectsCollection.countDocuments({
      active: true,
    });
    const inactiveProjects = await projectsCollection.countDocuments({
      active: false,
    });
    const numArtworks = await artworkCollection.countDocuments();
    const numResearchers = await researcherCollection.countDocuments();
    const fundingByNetwork = await artworkCollection
      .aggregate([
        { $group: { _id: '$network', sum_val: { $sum: '$fundingAmount' } } },
      ])
      .toArray();
    if (fundingByNetwork) {
      const celo = fundingByNetwork.filter(n => {
        return n._id === 'alfajores';
      });
      const polygon = fundingByNetwork.filter(n => {
        return n._id === 'mumbai';
      });
      celoTotalFunding = celo[0].sum_val;
      polygonTotalFunding = polygon[0].sum_val;
      platformTotalFunding = celoTotalFunding + polygonTotalFunding;
    }

    return {
      activeProjects,
      inactiveProjects,
      numArtworks,
      numResearchers,
      platformTotalFunding,
      celoTotalFunding,
      polygonTotalFunding,
    };
  } catch (e) {
    return false;
  }
};
