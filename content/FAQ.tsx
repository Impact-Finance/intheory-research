export interface QuestionAnswer {
  question: string;
  answer: string;
}

const generalFAQs = [
  {
    question: 'Why does inTheory exist?',
    answer:
      'inTheory was born from the idea that science should be accessible to all and driven by an involved and informed community. Our platform aids in the democratization of scientific funding, and our development has been influenced by the emerging decentralized science movement.\ninTheory provides researchers with an entirely new way to fund and communicate their work, shrinking the divide between the science community and the rest of the world.',
  },
  {
    question: 'How does inTheory verify the legitimacy of research projects?',
    answer:
      'In order for a project to be added to the platform, a researcher must submit a project application, including references, and complete a 30-minute video interview with our team to verify legitimacy. Funds are distributed to researchers on an intermittent basis. If a researcher ever abandons their project or ceases communications, the project will be become inactive, contributions will cease, and all undisbursed funds will be returned to contributors.\nIf you believe that a certain project may be falsified or illegitimate, please contact us at info@impact-finance.io.',
  },
  {
    question:
      'Why is funding done using cryptocurrency and what are USDC and cUSD?',
    answer:
      'inTheory processes payments using cryptocurrency because it allows anyone with access to the internet to support the advancement of science. Also, by tokenizing a funding contribution on the blockchain, we can create a permanent and transparent record of impact in the form of an indisputable digital receipt.\nThe USDC and cUSD stablecoins (cryptocurrency that is pegged to the US dollar) are widely accepted in web3 as stable stores of value. USDC is available on the Polygon blockchain network and cUSD is available on the Celo blockchain network. Both are available for purchase through Ramp or various decentralized exchanges.',
  },
  {
    question:
      'What are the Polygon and Celo blockchain networks and which network should I use?',
    answer:
      "Polygon is a blockchain network that is interoperable with the Ethereum network (a 'Layer-2') which aims to increase the speed and lower the cost of transactions on Ethereum. Polygon provides a range of benefits to users, including faster confirmation times, lower gas fees, and increased scalability.\nCelo is a standalone blockchain network that is focused on providing financial services to individuals and businesses in developing countries. Celo's mission is to create a more inclusive financial system that empowers people to participate in the global economy, regardless of their location or socioeconomic status.\nWe have selected both networks because of their commitments to sustainability and inclusion, as well as their ability to process transactions quickly, securely, and cheaply.",
  },
  {
    question: 'What AI model is used to generate images?',
    answer: 'inTheory uses the DALL-E API by OpenAI to generate images.',
  },
  {
    question: 'How do I know that transactions are secure?',
    answer:
      'Our smart contracts were developed using the OpenZeppelin contract libraries to ensure security and adherence to ERC token standards. Our contracts have been extensively tested using the Truffle testing suite and analyzed for security vulnerabilities and exploits using the latest AI tooling. The Solidity source code and testing scripts for our smart contracts are available at in the project Github repo: https://github.com/Impact-Finance/intheory-research\nPlease beware of phishing scams, bookmark the correct platform URL (https://www.intheory.app/), and report all scammers or malicious actors to info@impact-finance.io.',
  },
  {
    question: "What's up with the over-the-top digital design choices?",
    answer:
      "Science is hard. And it's even harder to communicate. We want to tell the world about science in a way that everyone can understand - visually!",
  },
  {
    question: 'Does inTheory charge any fees?',
    answer:
      'Yes. inTheory charges a 7% fee on all funding contributions, which is comparable to many other crowdfunding platforms. The collection of this fee is transparently visible via a blockchain explorer.',
  },
];

export const researcherFAQs = [
  {
    question:
      'Do I have to give up any IP or patent rights to my research when I receive funding through inTheory?',
    answer:
      'NO! Neither inTheory nor its community members assume any ownership rights over the outputs of the research conducted by researchers, including, but not limited to, technologies, frameworks, patents, datasets, or other trade secrets that may be developed while associated with inTheory. Though we encourage a transparent and open-access scientific process, researchers are free to decide what information they do or do not share with their supporters.\nAs the technology and regulations surrounding IP-NFTs mature, we may add features allowing researchers to share their IP with community members as a funding incentive, but this will always be on an opt-in basis.',
  },
  {
    question: 'What types of people should apply for funding through inTheory?',
    answer:
      'If you are actively conducting scientific research, feel free to submit an application! We accept a broad range of disciplines from early-career to seasoned researchers. We especially encourage current graduate students, post-docs, or DAO members to apply. We believe that anyone can be a scientist and encourage anyone to apply regardless of their background.',
  },
  {
    question: 'What types of research can inTheory fund?',
    answer:
      'We will accept applications across many scientific disciplines, so long as the research adheres to our design principles of sustainability and social integrity. If in doubt, submit an application!',
  },
  {
    question: 'What research will inTheory NOT fund?',
    answer:
      'We will not accept: projects whose primary application is weaponry, projects that are conducted in or with the support of countries on the OFAC sanctioned countries list, projects that are labeled as confidential by a government authority, or projects that do not adhere to our design principles of sustainability and social integrity.\nFor more information, please read our full terms and conditions.',
  },
  {
    question: 'What obligations do I have once my project is live on inTheory?',
    answer:
      'Work towards the milestones as laid out in your project application.\nPromptly communicate changes to your project milestones or setbacks that you may encounter.\nThough you are free to decide what content (if any) that you share with your contributors, we suggest that you update your supporters with outputs of your research that may include reports, datasets, or manuscripts. Doing so helps to verify the legitimacy of your project (which can encourage more users to contribute).',
  },
  {
    question:
      'How often will I receive funds and how can I transfer funds to my bank account?',
    answer:
      'Contributions to your project will be disbursed on a monthly basis, pending verification that the project is still active and proceeding towards the milestones outlined in the project application.\nWe understand that science is messy and that things change. To ensure that you receive your contributions, we ask that you simply communicate changes or setbacks in a timely manner, along with a plan for moving forward.',
  },
  {
    question:
      "How do I make changes or updates to my research project's profile?",
    answer:
      "If you need to make any changes to your project's profile, please contact us at info@impact-finance.io.",
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
      'You do! Neither inTheory nor the project researchers claim any ownership over images produced during the funding process. Should you decide to sell or transfer your NFT, the ownership of the image shall also be transferred to the new owner.',
  },
  {
    question:
      'How do I create a cryptocurrency wallet and where do I get USDC or cUSD?',
    answer:
      'There are plenty of useful resources on the web to learn how to install a decentralized wallet and fund your wallet with USDC or cUSD. We recommend MetaMask, as it is one of the most popular and interoperable wallets in web3.\nUSDC on Polygon can be purchased and sent to your wallet through popular exchanges like Coinbase or directly through MetaMask or Ramp.\ncUSD is available through decentralized exchanges on the Celo network, like Ubeswap, and is also available for direct purchase through Ramp.',
  },
  {
    question:
      'Which blockchain network should I use for completing my funding contribution?',
    answer:
      'The choice is up to you, but here is some information to help you decide.\nIf you plan to sell or trade your NFT after you have received it, NFT liquidity is generally higher on Polygon and there are more marketplace options for doing so. If you do choose the Polygon network, you will also need to have a balance of MATIC (purchasable through Ramp) in your wallet to cover the gas cost of the transaction.\nThe Celo network was built with an intense commitment to sustainability and real-world impact. NFT liquidity is lower, but potential interoperability with other impact projects is higher. If you choose the Celo network, the gas fee is paid using CELO, which is also available on Ramp or through a centralized exchange.\nGas fees are generally only a few cents on both networks.',
  },
  {
    question: 'What is "gas" and why do I have to pay for my transactions?',
    answer:
      'Each transaction requires a small amount of network "gas" fee be paid to execute. This helps ensure the security and decentralization of the network and the public ledger. These fees are paid in MATIC on the Polygon network and CELO on the Celo network. The gas fees on these networks is small, and a balance of 1 MATIC/CELO should be much more than adequate to cover gas costs for the contribution.\nIf you are encountering issues submitting a contribution, please contact us at info@impact-finance.io.',
  },
  {
    question: 'Why does my transaction keep failing?',
    answer:
      'Insufficient balance of USDC/cUSD: Please ensure that you have enough USDC (if on Polygon network) or cUSD (if on Celo network) in your connected wallet to complete the transaction, and that you approve inTheory to access your payment token when prompted.\nInsufficient balance of MATIC/CELO for gas fees: Each transaction requires a small amount of network "gas" fee be paid to execute. These fees are paid in MATIC on the Polygon network and CELO on the Celo network. The gas fees on these networks is small, and a balance of 1 MATIC/CELO should be much more than adequate to cover gas costs for the contribution.\nIf you are still encountering issues submitting a contribution, please contact us at info@impact-finance.io.',
  },
  {
    question:
      'How do I find my NFT in my wallet after I have contributed to a project?',
    answer:
      'To view your inTheory NFT in your wallet, you can import the token using its contract address. The contract address for your contribution token can be found via the block explorer summary of your contribution.\nIf you need help viewing your NFT in your wallet, please contact us at info@impact-finance.io - we would be happy to assist!',
  },
  {
    question: 'Can I sell my inTheory NFT on a secondary marketplace? ',
    answer:
      'While inTheory does not include a dedicated marketplace for selling our NFTs, it is entirely your decision whether or not to sell it on a secondary marketplace.',
  },
  {
    question:
      "What if I contribute to a project and the project owner doesn't do any work?",
    answer:
      'Funds are distributed to researchers on a monthly basis. If a researcher ever abandons their project or ceases communications, the project will become inactive, contributions will cease, and all undisbursed funds will be returned to contributors.\nIf you believe that a certain project may be falsified or illegitimate, please contact us at info@impact-finance.io.',
  },
  {
    question:
      'How can I stay updated with new results and track progress of the projects that I fund?',
    answer:
      "Researchers are encouraged to share reports, datasets, and more through their project's contributor portal (coming soon). Only users that have submitted a funding contribution to the project and hold their inTheory NFT in their wallet can access the project's contributor portal.",
  },
  {
    question:
      'Is there a way to contact the researchers that have projects on the platform?',
    answer:
      'Please direct all researcher contact requests to info@impact-finance.io. Do not harass researchers through their social accounts or contact websites. We take harassment of our researcher and user communities very seriously and will pursue legal action as necessary.',
  },
];

export default generalFAQs;
