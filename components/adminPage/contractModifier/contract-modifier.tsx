import { useState, useEffect, ChangeEvent } from 'react';
import { ethers } from 'ethers';

import sendContractModifier from '@/utils/sendContractModifier';
import { AdminModuleProps } from '@/pages/admin-console';
import NetworkSelector from '../networkSelector/network-selector';
import styles from './contract-modifier.module.scss';

const ContractModifier = ({
  primaryWallet,
  network,
  setShowAuthFlow,
}: AdminModuleProps) => {
  const [contractAddress, setContractAddress] = useState('');
  const [validAddress, setValidAddress] = useState(false);
  const [selectedModifier, setSelectedModifier] = useState('setOwnerFactory');
  const [newValue, setNewValue] = useState<string | number | bigint>('');
  const [fetching, setFetching] = useState(false);
  const [txnHash, setTxnHash] = useState('');
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [decimals, setDecimals] = useState(1);

  const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    setContractAddress(event.target.value.trim());
  };

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewValue(event.target.value.trim());
  };

  const handleSelect = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedModifier(event.target.value);
  };

  const handleModify = async () => {
    setFetching(true);
    setSuccess(false);
    setFailed(false);
    setTxnHash('');

    if (primaryWallet && network) {
      try {
        let hash;
        if (selectedModifier === 'setMinContributionProject') {
          hash = await sendContractModifier(
            selectedModifier,
            contractAddress,
            ethers.parseUnits(newValue.toString(), decimals),
            primaryWallet
          );
        } else {
          hash = await sendContractModifier(
            selectedModifier,
            contractAddress,
            newValue,
            primaryWallet
          );
        }

        if (hash) {
          setSuccess(true);
          setTxnHash(hash);
        } else {
          setFailed(true);
        }
      } catch {
        setFailed(true);
        console.error;
      } finally {
        setFetching(false);
      }
    }
  };

  useEffect(() => {
    if (/^0x[a-fA-F0-9]{40}$/.test(contractAddress)) {
      setValidAddress(true);
    } else {
      setValidAddress(false);
    }
    if (network === 137 || network === 80001) {
      setDecimals(6);
    }
    if (network === 42220 || network === 44787) {
      setDecimals(18);
    }
  }, [contractAddress, network]);

  return (
    <section className={styles.section}>
      <h2 className={styles.header}>Modify Contracts</h2>
      <div className={styles.modifierBox}>
        <NetworkSelector
          network={network}
          primaryWallet={primaryWallet}
          setShowAuthFlow={setShowAuthFlow}
        />
        <form className={styles.inputForm}>
          <div>
            <label
              className={styles.formLabel}
              htmlFor="contractAddress">
              Paste contract address:
            </label>
            <input
              className={styles.formInput}
              type="text"
              id="contractAddress"
              name="contractAddress"
              value={contractAddress}
              onChange={handleAddressChange}
              placeholder="0x00000..."
              readOnly={fetching}
            />
          </div>
          <div className={styles.radioSelector}>
            <label className={styles.formLabel}>
              <input
                type="radio"
                value="setOwnerFactory"
                checked={selectedModifier === 'setOwnerFactory'}
                onChange={handleSelect}
              />
              Change Contract Owner{' '}
              <span className={styles.factoryMark}>Factory</span>
            </label>
            <label className={styles.formLabel}>
              <input
                type="radio"
                value="setOwnerProject"
                checked={selectedModifier === 'setOwnerProject'}
                onChange={handleSelect}
              />
              Change Contract Owner{' '}
              <span className={styles.projectMark}>Project</span>
            </label>
            <label className={styles.formLabel}>
              <input
                type="radio"
                value="setFeeCollectorProject"
                checked={selectedModifier === 'setFeeCollectorProject'}
                onChange={handleSelect}
              />
              Change Fee Collector{' '}
              <span className={styles.projectMark}>Project</span>
            </label>
            <label className={styles.formLabel}>
              <input
                type="radio"
                value="setFeeAmountProject"
                checked={selectedModifier === 'setFeeAmountProject'}
                onChange={handleSelect}
              />
              Change Fee Percentage{' '}
              <span className={styles.projectMark}>Project</span>
            </label>
            <label className={styles.formLabel}>
              <input
                type="radio"
                value="setMinContributionProject"
                checked={selectedModifier === 'setMinContributionProject'}
                onChange={handleSelect}
              />
              Change Minimum Contribution{' '}
              <span className={styles.projectMark}>Project</span>
            </label>
            <label className={styles.formLabel}>
              <input
                type="radio"
                value="setResearcherProject"
                checked={selectedModifier === 'setResearcherProject'}
                onChange={handleSelect}
              />
              Change Researcher{' '}
              <span className={styles.projectMark}>Project</span>
            </label>
            <label className={styles.formLabel}>
              <input
                type="radio"
                value="setStableAddressProject"
                checked={selectedModifier === 'setStableAddressProject'}
                onChange={handleSelect}
              />
              Change Stablecoin Address{' '}
              <span className={styles.projectMark}>Project</span>
            </label>
            <label className={styles.formLabel}>
              <input
                type="radio"
                value="withdrawBalanceProject"
                checked={selectedModifier === 'withdrawBalanceProject'}
                onChange={handleSelect}
              />
              Withdraw Balance **CAUTION**{' '}
              <span className={styles.projectMark}>Project</span>
            </label>
          </div>
          <div>
            <label
              className={styles.formLabel}
              htmlFor="newValue">
              Enter new value:
            </label>
            <input
              className={styles.formInput}
              type="text"
              id="newValue"
              name="newValue"
              value={newValue.toString()}
              onChange={handleValueChange}
              placeholder="Reference ResearchProject.sol for reqs..."
              readOnly={fetching}
            />
          </div>
        </form>
        <button
          className={styles.actionBtn}
          onClick={handleModify}
          disabled={!primaryWallet || fetching || !validAddress || !newValue}>
          Modify Contract
        </button>
        <p className={styles.status}>
          Update status:{' '}
          {success && <span className={styles.success}>success</span>}
          {fetching && <span className={styles.pending}>pending...</span>}
          {failed && <span className={styles.failed}>failed</span>}
        </p>
        <p className={styles.status}>
          Txn hash: <span className={styles.pending}>{txnHash}</span>
        </p>
      </div>
    </section>
  );
};

export default ContractModifier;
