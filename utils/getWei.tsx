import Web3Utils from 'web3-utils';
import BN from 'bn.js';

const getWei = (network: number, contribution: number) => {
  let convertedNumber = new BN('');
  if (network === 137) {
    convertedNumber = Web3Utils.toBN(contribution * 10 ** 6);
  }
  if (network === 42220) {
    convertedNumber = Web3Utils.toBN(contribution * 10 ** 18);
  }
  if (network === 44787) {
    convertedNumber = Web3Utils.toBN(contribution * 10 ** 18);
  }
  if (network === 80001) {
    convertedNumber = Web3Utils.toBN(contribution * 10 ** 6);
  }
  return convertedNumber;
};

export const fromWei = (network: number, value: string) => {
  let convertedNumber = '';
  if (network === 137) {
    convertedNumber = value.slice(0, -6);
  }
  if (network === 42220) {
    convertedNumber = value.slice(0, -18);
  }
  if (network === 44787) {
    convertedNumber = value.slice(0, -18);
  }
  if (network === 80001) {
    convertedNumber = value.slice(0, -6);
  }
  return convertedNumber;
};

export default getWei;
