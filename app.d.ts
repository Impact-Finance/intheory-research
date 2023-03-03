export interface ResearchProject {
  _id: string;
  projectName: string;
  researcherId: string;
  tags: string[];
  imageGenKeywords: string[];
  shortDescription: string;
  longDescription: string;
  fundingRaised: number;
  associatedArtIds: string[];
  contractAddress: string;
  impactScores: number[];
}

export interface Researcher {
  _id: string;
  researcherName: string;
  affiliation: string;
  degree: string;
  bio: string;
  links: {
    website: string;
    twitter: string;
    linkedin: string;
  };
  featuredPublications: string[];
  walletAddress: string;
  associatedProjectIds: string[];
}

export interface CommunityArtwork {
  _id: string;
  associatedProjectId: string;
  associatedProjectName: string;
  fundingAmount: number;
  funder: string;
  txnHash: string;
}

export interface ImagePropertyObject {
  dimensions: number[];
  style: string;
}
