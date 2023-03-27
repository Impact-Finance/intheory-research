import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { ResearchProjectFactory, ResearchProject } from '@/abi/abi';
import BN from 'bn.js';

let contract;
let receipt;

const sendContractModifier = async (
  selectedModifier: string,
  contractAddress: string,
  newValue: string | number | BN
) => {
  const web3 = new Web3(window.ethereum);
  if (selectedModifier === 'setOwnerFactory') {
    contract = new web3.eth.Contract(
      ResearchProjectFactory as AbiItem[],
      contractAddress
    );
    receipt = await contract.methods
      .transferOwnership(newValue)
      .send({ from: window.ethereum.selectedAddress });
  } else if (selectedModifier === 'setOwnerProject') {
    contract = new web3.eth.Contract(
      ResearchProject as AbiItem[],
      contractAddress
    );
    receipt = await contract.methods
      .transferOwnership(newValue)
      .send({ from: window.ethereum.selectedAddress });
  } else if (selectedModifier === 'setFeeCollectorProject') {
    contract = new web3.eth.Contract(
      ResearchProject as AbiItem[],
      contractAddress
    );
    receipt = await contract.methods
      .changeFeeCollector(newValue)
      .send({ from: window.ethereum.selectedAddress });
  } else if (selectedModifier === 'setFeeAmountProject') {
    contract = new web3.eth.Contract(
      ResearchProject as AbiItem[],
      contractAddress
    );
    receipt = await contract.methods
      .changeFeePercentage(newValue)
      .send({ from: window.ethereum.selectedAddress });
  } else if (selectedModifier === 'setMinContributionProject') {
    contract = new web3.eth.Contract(
      ResearchProject as AbiItem[],
      contractAddress
    );
    receipt = await contract.methods
      .changeMinimumContributionAmount(newValue)
      .send({ from: window.ethereum.selectedAddress });
  } else if (selectedModifier === 'setResearcherProject') {
    contract = new web3.eth.Contract(
      ResearchProject as AbiItem[],
      contractAddress
    );
    receipt = await contract.methods
      .changeResearcher(newValue)
      .send({ from: window.ethereum.selectedAddress });
  } else if (selectedModifier === 'setStableAddressProject') {
    contract = new web3.eth.Contract(
      ResearchProject as AbiItem[],
      contractAddress
    );
    receipt = await contract.methods
      .changeStablecoinAddress(newValue)
      .send({ from: window.ethereum.selectedAddress });
  } else if (selectedModifier === 'withdrawBalanceProject') {
    const isTrueSet = newValue === 'true';
    contract = new web3.eth.Contract(
      ResearchProject as AbiItem[],
      contractAddress
    );
    receipt = await contract.methods
      .withdrawBalance(isTrueSet)
      .send({ from: window.ethereum.selectedAddress });
  } else {
    return false;
  }
  if (!receipt || receipt.length === 0) {
    return 'ERROR';
  } else {
    return receipt.transactionHash;
  }
};

export const sendClaimRequest = async (
  claimType: string,
  contractAddress: string
) => {
  const web3 = new Web3(window.ethereum);
  contract = new web3.eth.Contract(
    ResearchProject as AbiItem[],
    contractAddress
  );
  if (claimType === 'claimFees') {
    receipt = await contract.methods
      .claimFees()
      .send({ from: window.ethereum.selectedAddress });
  } else if (claimType === 'disburseFunds') {
    receipt = await contract.methods
      .disburseFunds()
      .send({ from: window.ethereum.selectedAddress });
  } else {
    return false;
  }
  if (!receipt || receipt.length === 0) {
    return 'ERROR';
  } else {
    return receipt.transactionHash;
  }
};

export default sendContractModifier;
