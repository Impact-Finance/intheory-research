export interface QuestionAnswer {
  question: string;
  answer: string;
}

const generalFAQs = [
  {
    question: 'Why does inTheory exist?',
    answer:
      'inTheory was borne from the idea that science should be accessible to all and driven by an involved and informed community. Our platform aids in the democratization of scientific funding, and our development has been influenced by the emerging decentralized science movement.\ninTheory provides researchers with an entirely new way to fund and communicate their work, shrinking the divide between the science community and the rest of the world.',
  },
  {
    question:
      '***How does inTheory verify the legitimacy of research projects?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    question:
      'Why is funding done using cryptocurrency and what are USDC and cUSD?',
    answer:
      'inTheory processes payments using cryptocurrency because it allows anyone with access to the internet to support the advancement of science, and by tokenizing a funding contribution on the blockchain, we can create a permanent and transparent record of impact.\nThe USDC and cUSD stablecoins (a form of cryptocurrency that is pegged to the US dollar) are widely accepted in web3 as stable stores of value. USDC is available on the Polygon blockchain network and cUSD is available on the Celo blockchain network. Both are available for purchase through Ramp or various decentralized exchanges.',
  },
  {
    question:
      'What are the Polygon and Celo blockchain networks and which network should I use?',
    answer:
      "Polygon is a Layer 2 scaling solution for Ethereum, which aims to increase the speed and lower the cost of transactions on the Ethereum network. Polygon provides a range of benefits to users, including faster confirmation times, lower gas fees, and increased scalability.\nCelo is a standalone blockchain network that is focused on providing financial services to individuals and businesses in developing countries. Celo's mission is to create a more inclusive financial system that empowers people to participate in the global economy, regardless of their location or socioeconomic status.\nWe have selected both networks because of their commitments to sustainability and inclusion, as well as their ability to process transactions quickly, securely, and cheaply.",
  },
  {
    question: 'What AI model is used to generate images?',
    answer: 'inTheory uses the DALL-E API by OpenAI to generate images.',
  },
  {
    question: 'How do I know that transactions are secure?',
    answer:
      'All of our smart contracts have been audited for security by Certik, an industry-leading third-party auditor. Please be aware of phishing scams and bookmark the correct URL (https://www.intheory.app/).',
  },
  {
    question: 'Does inTheory charge any fees?',
    answer:
      'Yes. inTheory charges a 7% fee on all funding contributions, which is comparable to most other crowdfunding platforms. This allows us to keep operations running and to continue to add new features to the platform. The collection of this fee is transparently visible via a blockchain explorer.',
  },
];

export const researcherFAQs = [
  {
    question:
      'Do I have to give up any IP or patent rights to my research when I receive funding through inTheory?',
    answer:
      'No! Neither inTheory nor its community members assume any ownership rights over the outputs of the research conducted by researchers, including, but not limited to, technologies, frameworks, patents, datasets, or other trade secrets that may be developed while associated with inTheory. Though we encourage a transparent and open-access scientific process, researchers are free to decide what information they do or do not share with their supporters.\nAs the technology and regulations surrounding IP-NFTs mature, we may add features allowing researchers to share their IP with community members as a funding incentive, but this will always be on an opt-in basis.',
  },
  {
    question:
      '***What types of people should apply for funding through inTheory?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    question: '***What types of research can inTheory fund?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    question: '***What research will inTheory NOT fund?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    question:
      '***What obligations do I have once my project is live on inTheory?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    question:
      '***How often will I receive funds and how can I transfer funds to my bank account?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    question:
      "***How do I make changes or updates to my research project's profile?",
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

export const userFAQs = [
  {
    question: 'Is a contribution to a project considered an investment?',
    answer:
      'No, contributions to research on inTheory are not considered investments. Contributors are only promised to receive a personalized NFT from inTheory (not the researcher) to commemorate the contribution. The value of these digital collectibles is determined by an open and fair market, and contributors should not reasonably expect financial return on their contribution.',
  },
  {
    question: 'Who owns the rights to the images generated on inTheory?',
    answer:
      'You do! Neither inTheory nor the project researchers claim any ownership over images produced during the funding process. Should you decide to sell or transfer your NFT, the ownership of the image shall also be transfered to the new owner.',
  },
  {
    question:
      'How do I create a cryptocurrency wallet and where do I get USDC or cUSD?',
    answer:
      'There are plenty of useful resources on the web to learn how to install a decentralized wallet and fund your wallet with USDC or cUSD. We recommend MetaMask, as it is one of the most popular and versatile wallets in web3.\nUSDC on Polygon can be purchased and sent to your wallet through popular exchanges like Coinbase or directly through MetaMask or Ramp.\ncUSD is available through decentralized exchanges on the Celo network, like Ubeswap, and is also available for direct purchase through Ramp.',
  },
  {
    question:
      'Which blockchain network should I use for completing my funding contribution?',
    answer:
      'The choice is up to you, but here is some information to help you decide.\nIf you plan to sell or trade your NFT after you have received it, NFT liquidity is generally higher on Polygon and there are more marketplace options for doing so. If you do choose the Polygon network, you will also need to have a balance of MATIC (purchasable through Ramp) in your wallet to cover the gas cost of the transaction.\nIf you choose the Celo network, the gas fee is paid using cUSD and no additional asset is required. Gas fees are also generally much lower on the Celo network.',
  },
  {
    question: '***What is "gas" and why do I have to pay for my transactions?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    question: '***Why does my transaction keep failing?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    question:
      '***How do I find my NFT in my wallet after I have contributed to a project?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    question: 'Can I sell my inTheory NFT on a secondary marketplace? ',
    answer:
      "While inTheory doesn't include a dedicated marketplace for selling our NFTs, it is entirely your decision whether to sell it on a secondary marketplace.",
  },
  {
    question:
      "***What if I contribute to a project and the project owner doesn't do any work?",
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    question:
      '***How can I stay updated with new results and track progress of the projects that I fund?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    question:
      '***Is there a way to contact the researchers that have projects on the platform?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

export default generalFAQs;
