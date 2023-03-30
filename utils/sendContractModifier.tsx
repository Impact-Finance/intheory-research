import { ResearchProjectFactory, ResearchProject } from '@/abi/abi';
import { Wallet } from '@dynamic-labs/sdk-react';
import { ethers } from 'ethers';

let contract;
let receipt;

const sendContractModifier = async (
  selectedModifier: string,
  contractAddress: string,
  newValue: string | number | bigint,
  primaryWallet: Wallet
) => {
  const provider =
    (await primaryWallet.connector.getRpcProvider()) as ethers.JsonRpcProvider;
  const signer =
    (await primaryWallet.connector.getSigner()) as ethers.JsonRpcSigner;
  if (selectedModifier === 'setOwnerFactory') {
    contract = new ethers.Contract(
      contractAddress,
      ResearchProjectFactory,
      signer
    );
    receipt = await contract.transferOwnership(newValue);
    await provider.waitForTransaction(receipt.hash);
  } else if (selectedModifier === 'setOwnerProject') {
    contract = new ethers.Contract(contractAddress, ResearchProject, signer);
    receipt = await contract.transferOwnership(newValue);
    await provider.waitForTransaction(receipt.hash);
  } else if (selectedModifier === 'setFeeCollectorProject') {
    contract = new ethers.Contract(contractAddress, ResearchProject, signer);
    receipt = await contract.changeFeeCollector(newValue);
    await provider.waitForTransaction(receipt.hash);
  } else if (selectedModifier === 'setFeeAmountProject') {
    contract = new ethers.Contract(contractAddress, ResearchProject, signer);
    receipt = await contract.changeFeePercentage(newValue);
    await provider.waitForTransaction(receipt.hash);
  } else if (selectedModifier === 'setMinContributionProject') {
    contract = new ethers.Contract(contractAddress, ResearchProject, signer);
    receipt = await contract.changeMinimumContributionAmount(newValue);
    await provider.waitForTransaction(receipt.hash);
  } else if (selectedModifier === 'setResearcherProject') {
    contract = new ethers.Contract(contractAddress, ResearchProject, signer);
    receipt = await contract.changeResearcher(newValue);
    await provider.waitForTransaction(receipt.hash);
  } else if (selectedModifier === 'setStableAddressProject') {
    contract = new ethers.Contract(contractAddress, ResearchProject, signer);
    receipt = await contract.changeStablecoinAddress(newValue);
    await provider.waitForTransaction(receipt.hash);
  } else if (selectedModifier === 'withdrawBalanceProject') {
    const isTrueSet = newValue === 'true';
    contract = new ethers.Contract(contractAddress, ResearchProject, signer);
    receipt = await contract.withdrawBalance(isTrueSet);
    await provider.waitForTransaction(receipt.hash);
  } else {
    return false;
  }
  if (!receipt || receipt.length === 0) {
    return 'ERROR';
  } else {
    return receipt.hash;
  }
};

export const sendClaimRequest = async (
  claimType: string,
  contractAddress: string,
  primaryWallet: Wallet
) => {
  const provider =
    (await primaryWallet.connector.getRpcProvider()) as ethers.JsonRpcProvider;
  const signer =
    (await primaryWallet.connector.getSigner()) as ethers.JsonRpcSigner;
  contract = new ethers.Contract(contractAddress, ResearchProject, signer);
  if (claimType === 'claimFees') {
    receipt = await contract.claimFees();
    await provider.waitForTransaction(receipt.hash);
  } else if (claimType === 'disburseFunds') {
    receipt = await contract.disburseFunds();
    await provider.waitForTransaction(receipt.hash);
  } else {
    return false;
  }
  if (!receipt || receipt.length === 0) {
    return 'ERROR';
  } else {
    return receipt.hash;
  }
};

export default sendContractModifier;
