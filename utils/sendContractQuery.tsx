import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { ResearchProjectFactory, ResearchProject } from '@/abi/abi';

const sendContractQuery = async (
  selectedQuery: string,
  contractAddress: string
) => {
  const web3 = new Web3(window.ethereum);
  let contract;
  let result;

  if (selectedQuery === 'getAllDeployed') {
    contract = new web3.eth.Contract(
      ResearchProjectFactory as AbiItem[],
      contractAddress
    );
    result = await contract.methods.getDeployedProjects().call();
  } else if (selectedQuery === 'getOwnerFactory') {
    contract = new web3.eth.Contract(
      ResearchProjectFactory as AbiItem[],
      contractAddress
    );
    result = await contract.methods.owner().call();
  } else if (selectedQuery === 'getOwnerProject') {
    contract = new web3.eth.Contract(
      ResearchProject as AbiItem[],
      contractAddress
    );
    result = await contract.methods.owner().call();
  } else if (selectedQuery === 'getContributors') {
    contract = new web3.eth.Contract(
      ResearchProject as AbiItem[],
      contractAddress
    );
    result = await contract.methods.getAllContributors().call();
  } else if (selectedQuery === 'getUnclaimedFunds') {
    contract = new web3.eth.Contract(
      ResearchProject as AbiItem[],
      contractAddress
    );
    result = await contract.methods.getUnclaimedContributionsAmount().call();
  } else if (selectedQuery === 'getUnclaimedFees') {
    contract = new web3.eth.Contract(
      ResearchProject as AbiItem[],
      contractAddress
    );
    result = await contract.methods.getUnclaimedFeeAmount().call();
  } else if (selectedQuery === 'getFeePercentage') {
    contract = new web3.eth.Contract(
      ResearchProject as AbiItem[],
      contractAddress
    );
    result = await contract.methods.getFeePercentage().call();
  } else if (selectedQuery === 'getMinContribution') {
    contract = new web3.eth.Contract(
      ResearchProject as AbiItem[],
      contractAddress
    );
    result = await contract.methods.getMinimumContributionAmount().call();
  } else if (selectedQuery === 'getStableAddress') {
    contract = new web3.eth.Contract(
      ResearchProject as AbiItem[],
      contractAddress
    );
    result = await contract.methods.getStablecoinAddress().call();
  } else if (selectedQuery === 'getResearcher') {
    contract = new web3.eth.Contract(
      ResearchProject as AbiItem[],
      contractAddress
    );
    result = await contract.methods.getCurrentResearcher().call();
  } else if (selectedQuery === 'getFeeCollector') {
    contract = new web3.eth.Contract(
      ResearchProject as AbiItem[],
      contractAddress
    );
    result = await contract.methods.getFeeCollector().call();
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
