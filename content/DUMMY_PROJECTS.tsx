export interface Researcher {
  name: string;
  affiliation: string;
  degree: string;
  bio: string;
  links: string[];
  featuredPublications: string[];
  walletAddress: string;
}

export interface Project {
  id: string;
  name: string;
  researcher: Researcher;
  coverImage: string;
  shortDescription: string;
  longDescription: string;
  fundingRaised: number;
  associatedArtwork: string[];
}

const DUMMY_PROJECTS = [
  {
    id: 'uuid-1',
    name: 'Molecular Dynamics of Grain Boundaries',
    researcher: {
      name: 'Satoshi Nakamoto',
      affiliation: 'University of Southern California',
      degree: 'PhD Materials Science',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      links: [
        'https://www.linkedin.com/in/brettcornick/',
        'https://twitter.com/brett_cornick',
      ],
      featuredPublications: [
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
      ],
      walletAddress: '0xD740E2dE99CB47Fb95c4601b597914972e43b0FC',
    },
    coverImage: 'surface.jpg',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    fundingRaised: 450,
    associatedArtwork: [
      'planets.jpg',
      'glow.jpg',
      'ignition.jpg',
      'portal.jpg',
      'node.jpg',
    ],
  },
  {
    id: 'uuid-2',
    name: 'Quantum Materials Research',
    researcher: {
      name: 'Bert Merple',
      affiliation: 'University of California - Los Angeles',
      degree: 'PhD Physics',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      links: [
        'https://www.linkedin.com/in/brettcornick/',
        'https://twitter.com/brett_cornick',
      ],
      featuredPublications: [
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
      ],
      walletAddress: '0x075B7D316FF10EE0B65DF8cEdE4F0f066aCBFDdC',
    },
    coverImage: 'network.jpg',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    fundingRaised: 5000,
    associatedArtwork: [
      'flower.jpg',
      'aperture.jpg',
      'tron.jpg',
      'molecule.jpg',
      'lasers.jpg',
      'node.jpg',
      'glow.jpg',
    ],
  },
  {
    id: 'uuid-3',
    name: 'Novel Methods of Tuning Neuroplasticity',
    researcher: {
      name: 'Isaac Clarke',
      affiliation: 'USG Ishimura',
      degree: 'PhD Biomedical Engineering',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      links: [
        'https://www.linkedin.com/in/brettcornick/',
        'https://twitter.com/brett_cornick',
      ],
      featuredPublications: [
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
      ],
      walletAddress: '0x71b08fb032d6D8000EA5C9326aC4362c6178F3D7',
    },
    coverImage: 'cell.jpg',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    fundingRaised: 50,
    associatedArtwork: [
      'cyber.jpg',
      'helix.jpg',
      'threads.jpg',
      'tron.jpg',
      'iso.jpg',
    ],
  },
  {
    id: 'uuid-4',
    name: 'Molecular Dynamics of Grain Boundaries',
    researcher: {
      name: 'Satoshi Nakamoto',
      affiliation: 'University of Southern California',
      degree: 'PhD Materials Science',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      links: [
        'https://www.linkedin.com/in/brettcornick/',
        'https://twitter.com/brett_cornick',
      ],
      featuredPublications: [
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
      ],
      walletAddress: '0xD740E2dE99CB47Fb95c4601b597914972e43b0FC',
    },
    coverImage: 'surface.jpg',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    fundingRaised: 450,
    associatedArtwork: [
      'planets.jpg',
      'glow.jpg',
      'ignition.jpg',
      'portal.jpg',
      'node.jpg',
    ],
  },
  {
    id: 'uuid-5',
    name: 'Quantum Materials Research',
    researcher: {
      name: 'Bert Merple',
      affiliation: 'University of California - Los Angeles',
      degree: 'PhD Physics',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      links: [
        'https://www.linkedin.com/in/brettcornick/',
        'https://twitter.com/brett_cornick',
      ],
      featuredPublications: [
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
      ],
      walletAddress: '0x075B7D316FF10EE0B65DF8cEdE4F0f066aCBFDdC',
    },
    coverImage: 'network.jpg',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    fundingRaised: 5000,
    associatedArtwork: [
      'flower.jpg',
      'aperture.jpg',
      'tron.jpg',
      'molecule.jpg',
      'lasers.jpg',
      'node.jpg',
      'glow.jpg',
    ],
  },
  {
    id: 'uuid-6',
    name: 'Novel Methods of Tuning Neuroplasticity',
    researcher: {
      name: 'Isaac Clarke',
      affiliation: 'USG Ishimura',
      degree: 'PhD Biomedical Engineering',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      links: [
        'https://www.linkedin.com/in/brettcornick/',
        'https://twitter.com/brett_cornick',
      ],
      featuredPublications: [
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
      ],
      walletAddress: '0x71b08fb032d6D8000EA5C9326aC4362c6178F3D7',
    },
    coverImage: 'cell.jpg',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    fundingRaised: 50,
    associatedArtwork: [
      'cyber.jpg',
      'helix.jpg',
      'threads.jpg',
      'tron.jpg',
      'iso.jpg',
    ],
  },
  {
    id: 'uuid-7',
    name: 'Molecular Dynamics of Grain Boundaries',
    researcher: {
      name: 'Satoshi Nakamoto',
      affiliation: 'University of Southern California',
      degree: 'PhD Materials Science',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      links: [
        'https://www.linkedin.com/in/brettcornick/',
        'https://twitter.com/brett_cornick',
      ],
      featuredPublications: [
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
      ],
      walletAddress: '0xD740E2dE99CB47Fb95c4601b597914972e43b0FC',
    },
    coverImage: 'surface.jpg',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    fundingRaised: 450,
    associatedArtwork: [
      'planets.jpg',
      'glow.jpg',
      'ignition.jpg',
      'portal.jpg',
      'node.jpg',
    ],
  },
  {
    id: 'uuid-8',
    name: 'Quantum Materials Research',
    researcher: {
      name: 'Bert Merple',
      affiliation: 'University of California - Los Angeles',
      degree: 'PhD Physics',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      links: [
        'https://www.linkedin.com/in/brettcornick/',
        'https://twitter.com/brett_cornick',
      ],
      featuredPublications: [
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
      ],
      walletAddress: '0x075B7D316FF10EE0B65DF8cEdE4F0f066aCBFDdC',
    },
    coverImage: 'network.jpg',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    fundingRaised: 5000,
    associatedArtwork: [
      'flower.jpg',
      'aperture.jpg',
      'tron.jpg',
      'molecule.jpg',
      'lasers.jpg',
      'node.jpg',
      'glow.jpg',
    ],
  },
  {
    id: 'uuid-9',
    name: 'Novel Methods of Tuning Neuroplasticity',
    researcher: {
      name: 'Isaac Clarke',
      affiliation: 'USG Ishimura',
      degree: 'PhD Biomedical Engineering',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      links: [
        'https://www.linkedin.com/in/brettcornick/',
        'https://twitter.com/brett_cornick',
      ],
      featuredPublications: [
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
      ],
      walletAddress: '0x71b08fb032d6D8000EA5C9326aC4362c6178F3D7',
    },
    coverImage: 'cell.jpg',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    fundingRaised: 50,
    associatedArtwork: [
      'cyber.jpg',
      'helix.jpg',
      'threads.jpg',
      'tron.jpg',
      'iso.jpg',
    ],
  },
  {
    id: 'uuid-10',
    name: 'Molecular Dynamics of Grain Boundaries',
    researcher: {
      name: 'Satoshi Nakamoto',
      affiliation: 'University of Southern California',
      degree: 'PhD Materials Science',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      links: [
        'https://www.linkedin.com/in/brettcornick/',
        'https://twitter.com/brett_cornick',
      ],
      featuredPublications: [
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
      ],
      walletAddress: '0xD740E2dE99CB47Fb95c4601b597914972e43b0FC',
    },
    coverImage: 'surface.jpg',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    fundingRaised: 450,
    associatedArtwork: [
      'planets.jpg',
      'glow.jpg',
      'ignition.jpg',
      'portal.jpg',
      'node.jpg',
    ],
  },
  {
    id: 'uuid-11',
    name: 'Quantum Materials Research',
    researcher: {
      name: 'Bert Merple',
      affiliation: 'University of California - Los Angeles',
      degree: 'PhD Physics',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      links: [
        'https://www.linkedin.com/in/brettcornick/',
        'https://twitter.com/brett_cornick',
      ],
      featuredPublications: [
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
      ],
      walletAddress: '0x075B7D316FF10EE0B65DF8cEdE4F0f066aCBFDdC',
    },
    coverImage: 'network.jpg',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    fundingRaised: 5000,
    associatedArtwork: [
      'flower.jpg',
      'aperture.jpg',
      'tron.jpg',
      'molecule.jpg',
      'lasers.jpg',
      'node.jpg',
      'glow.jpg',
    ],
  },
  {
    id: 'uuid-12',
    name: 'Novel Methods of Tuning Neuroplasticity',
    researcher: {
      name: 'Isaac Clarke',
      affiliation: 'USG Ishimura',
      degree: 'PhD Biomedical Engineering',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      links: [
        'https://www.linkedin.com/in/brettcornick/',
        'https://twitter.com/brett_cornick',
      ],
      featuredPublications: [
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
      ],
      walletAddress: '0x71b08fb032d6D8000EA5C9326aC4362c6178F3D7',
    },
    coverImage: 'cell.jpg',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    fundingRaised: 50,
    associatedArtwork: [
      'cyber.jpg',
      'helix.jpg',
      'threads.jpg',
      'tron.jpg',
      'iso.jpg',
    ],
  },
  {
    id: 'uuid-13',
    name: 'Molecular Dynamics of Grain Boundaries',
    researcher: {
      name: 'Satoshi Nakamoto',
      affiliation: 'University of Southern California',
      degree: 'PhD Materials Science',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      links: [
        'https://www.linkedin.com/in/brettcornick/',
        'https://twitter.com/brett_cornick',
      ],
      featuredPublications: [
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
      ],
      walletAddress: '0xD740E2dE99CB47Fb95c4601b597914972e43b0FC',
    },
    coverImage: 'surface.jpg',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    fundingRaised: 450,
    associatedArtwork: [
      'planets.jpg',
      'glow.jpg',
      'ignition.jpg',
      'portal.jpg',
      'node.jpg',
    ],
  },
  {
    id: 'uuid-14',
    name: 'Quantum Materials Research',
    researcher: {
      name: 'Bert Merple',
      affiliation: 'University of California - Los Angeles',
      degree: 'PhD Physics',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      links: [
        'https://www.linkedin.com/in/brettcornick/',
        'https://twitter.com/brett_cornick',
      ],
      featuredPublications: [
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
      ],
      walletAddress: '0x075B7D316FF10EE0B65DF8cEdE4F0f066aCBFDdC',
    },
    coverImage: 'network.jpg',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    fundingRaised: 5000,
    associatedArtwork: [
      'flower.jpg',
      'aperture.jpg',
      'tron.jpg',
      'molecule.jpg',
      'lasers.jpg',
      'node.jpg',
      'glow.jpg',
    ],
  },
  {
    id: 'uuid-15',
    name: 'Novel Methods of Tuning Neuroplasticity',
    researcher: {
      name: 'Isaac Clarke',
      affiliation: 'USG Ishimura',
      degree: 'PhD Biomedical Engineering',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      links: [
        'https://www.linkedin.com/in/brettcornick/',
        'https://twitter.com/brett_cornick',
      ],
      featuredPublications: [
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
      ],
      walletAddress: '0x71b08fb032d6D8000EA5C9326aC4362c6178F3D7',
    },
    coverImage: 'cell.jpg',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    fundingRaised: 50,
    associatedArtwork: [
      'cyber.jpg',
      'helix.jpg',
      'threads.jpg',
      'tron.jpg',
      'iso.jpg',
    ],
  },
  {
    id: 'uuid-16',
    name: 'Molecular Dynamics of Grain Boundaries',
    researcher: {
      name: 'Satoshi Nakamoto',
      affiliation: 'University of Southern California',
      degree: 'PhD Materials Science',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      links: [
        'https://www.linkedin.com/in/brettcornick/',
        'https://twitter.com/brett_cornick',
      ],
      featuredPublications: [
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
      ],
      walletAddress: '0xD740E2dE99CB47Fb95c4601b597914972e43b0FC',
    },
    coverImage: 'surface.jpg',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    fundingRaised: 450,
    associatedArtwork: [
      'planets.jpg',
      'glow.jpg',
      'ignition.jpg',
      'portal.jpg',
      'node.jpg',
    ],
  },
  {
    id: 'uuid-17',
    name: 'Quantum Materials Research',
    researcher: {
      name: 'Bert Merple',
      affiliation: 'University of California - Los Angeles',
      degree: 'PhD Physics',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      links: [
        'https://www.linkedin.com/in/brettcornick/',
        'https://twitter.com/brett_cornick',
      ],
      featuredPublications: [
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
      ],
      walletAddress: '0x075B7D316FF10EE0B65DF8cEdE4F0f066aCBFDdC',
    },
    coverImage: 'network.jpg',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    fundingRaised: 5000,
    associatedArtwork: [
      'flower.jpg',
      'aperture.jpg',
      'tron.jpg',
      'molecule.jpg',
      'lasers.jpg',
      'node.jpg',
      'glow.jpg',
    ],
  },
  {
    id: 'uuid-18',
    name: 'Novel Methods of Tuning Neuroplasticity',
    researcher: {
      name: 'Isaac Clarke',
      affiliation: 'USG Ishimura',
      degree: 'PhD Biomedical Engineering',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      links: [
        'https://www.linkedin.com/in/brettcornick/',
        'https://twitter.com/brett_cornick',
      ],
      featuredPublications: [
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
      ],
      walletAddress: '0x71b08fb032d6D8000EA5C9326aC4362c6178F3D7',
    },
    coverImage: 'cell.jpg',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    fundingRaised: 50,
    associatedArtwork: [
      'cyber.jpg',
      'helix.jpg',
      'threads.jpg',
      'tron.jpg',
      'iso.jpg',
    ],
  },
  {
    id: 'uuid-19',
    name: 'Molecular Dynamics of Grain Boundaries',
    researcher: {
      name: 'Satoshi Nakamoto',
      affiliation: 'University of Southern California',
      degree: 'PhD Materials Science',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      links: [
        'https://www.linkedin.com/in/brettcornick/',
        'https://twitter.com/brett_cornick',
      ],
      featuredPublications: [
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
      ],
      walletAddress: '0xD740E2dE99CB47Fb95c4601b597914972e43b0FC',
    },
    coverImage: 'surface.jpg',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    fundingRaised: 450,
    associatedArtwork: [
      'planets.jpg',
      'glow.jpg',
      'ignition.jpg',
      'portal.jpg',
      'node.jpg',
    ],
  },
  {
    id: 'uuid-20',
    name: 'Quantum Materials Research',
    researcher: {
      name: 'Bert Merple',
      affiliation: 'University of California - Los Angeles',
      degree: 'PhD Physics',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      links: [
        'https://www.linkedin.com/in/brettcornick/',
        'https://twitter.com/brett_cornick',
      ],
      featuredPublications: [
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
      ],
      walletAddress: '0x075B7D316FF10EE0B65DF8cEdE4F0f066aCBFDdC',
    },
    coverImage: 'network.jpg',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    fundingRaised: 5000,
    associatedArtwork: [
      'flower.jpg',
      'aperture.jpg',
      'tron.jpg',
      'molecule.jpg',
      'lasers.jpg',
      'node.jpg',
      'glow.jpg',
    ],
  },
  {
    id: 'uuid-21',
    name: 'Novel Methods of Tuning Neuroplasticity',
    researcher: {
      name: 'Isaac Clarke',
      affiliation: 'USG Ishimura',
      degree: 'PhD Biomedical Engineering',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      links: [
        'https://www.linkedin.com/in/brettcornick/',
        'https://twitter.com/brett_cornick',
      ],
      featuredPublications: [
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
        'https://www.wikipedia.org/',
      ],
      walletAddress: '0x71b08fb032d6D8000EA5C9326aC4362c6178F3D7',
    },
    coverImage: 'cell.jpg',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    fundingRaised: 50,
    associatedArtwork: [
      'cyber.jpg',
      'helix.jpg',
      'threads.jpg',
      'tron.jpg',
      'iso.jpg',
    ],
  },
];

export default DUMMY_PROJECTS;
