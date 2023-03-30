import { ethers } from 'ethers';
import { ResearchProjectFactory, ResearchProject } from '@/abi/abi';
import { Wallet } from '@dynamic-labs/sdk-react';

const sendContractQuery = async (
  selectedQuery: string,
  contractAddress: string,
  primaryWallet: Wallet
) => {
  const provider =
    (await primaryWallet.connector.getRpcProvider()) as ethers.JsonRpcProvider;
  let contract;
  let result;

  if (selectedQuery === 'getAllDeployed') {
    contract = new ethers.Contract(
      contractAddress,
      ResearchProjectFactory,
      provider
    );
    result = await contract.getDeployedProjects();
  } else if (selectedQuery === 'getOwnerFactory') {
    contract = new ethers.Contract(
      contractAddress,
      ResearchProjectFactory,
      provider
    );
    result = await contract.owner();
  } else if (selectedQuery === 'getOwnerProject') {
    contract = new ethers.Contract(contractAddress, ResearchProject, provider);
    result = await contract.owner();
  } else if (selectedQuery === 'getContributors') {
    contract = new ethers.Contract(contractAddress, ResearchProject, provider);
    result = await contract.getAllContributors();
  } else if (selectedQuery === 'getUnclaimedFunds') {
    contract = new ethers.Contract(contractAddress, ResearchProject, provider);
    result = await contract.getUnclaimedContributionsAmount();
  } else if (selectedQuery === 'getUnclaimedFees') {
    contract = new ethers.Contract(contractAddress, ResearchProject, provider);
    result = await contract.getUnclaimedFeeAmount();
  } else if (selectedQuery === 'getFeePercentage') {
    contract = new ethers.Contract(contractAddress, ResearchProject, provider);
    const rawResult = await contract.getFeePercentage();
    result = parseInt(rawResult);
  } else if (selectedQuery === 'getMinContribution') {
    contract = new ethers.Contract(contractAddress, ResearchProject, provider);
    result = await contract.getMinimumContributionAmount();
  } else if (selectedQuery === 'getStableAddress') {
    contract = new ethers.Contract(contractAddress, ResearchProject, provider);
    result = await contract.getStablecoinAddress();
  } else if (selectedQuery === 'getResearcher') {
    contract = new ethers.Contract(contractAddress, ResearchProject, provider);
    result = await contract.getCurrentResearcher();
  } else if (selectedQuery === 'getFeeCollector') {
    contract = new ethers.Contract(contractAddress, ResearchProject, provider);
    result = await contract.getFeeCollector();
  } else {
    return false;
  }
  if (!result || result.length === 0) {
    return 'NO VALUE';
  } else {
    return result;
  }
};

export default sendContractQuery;
