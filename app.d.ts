export interface ResearchProjectObject {
  _id: string;
  projectName: string;
  researcherId: string;
  tags: string[];
  imageGenKeywords: string[];
  shortDescription: string;
  longDescription: string;
  fundingRaised: number;
  associatedArtIds: string[];
  contractAddress: ContractAddressesObject;
  impactScores: number[];
  active: boolean;
}

export interface ResearcherObject {
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

export interface CommunityArtworkObject {
  _id: string;
  associatedProjectId: string;
  associatedProjectName: string;
  fundingAmount: number;
  funder: string;
  txnHash: string;
  network: 'celo' | 'polygon' | 'mumbai' | 'alfajores';
  tokenId: string;
  metadataCid: string;
  contract: string;
}

export interface ImagePropertyObject {
  colorPalette: string;
  style: string;
}

export interface ContractAddressesObject {
  celo: string;
  polygon: string;
}

export interface PlatformStatsObject {
  activeProjects: number;
  inactiveProjects: number;
  numArtworks: number;
  numResearchers: number;
  platformTotalFunding: number;
  celoTotalFunding: number;
  polygonTotalFunding: number;
}
