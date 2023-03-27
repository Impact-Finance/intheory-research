import { ChangeEvent, useEffect, useState } from 'react';

import sendContractQuery from '@/utils/sendContractQuery';
import { AdminModuleProps } from '@/pages/admin-console';
import NetworkSelector from '../networkSelector/network-selector';
import { fromWei } from '@/utils/getWei';
import styles from './contract-queries.module.scss';

const ContractQueries = ({
  primaryWallet,
  network,
  setShowAuthFlow,
}: AdminModuleProps) => {
  const [contractAddress, setContractAddress] = useState('');
  const [selectedQuery, setSelectedQuery] = useState('getAllDeployed');
  const [validAddress, setValidAddress] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [queryResult, setQueryResult] = useState<string | undefined>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setContractAddress(event.target.value.trim());
  };

  const handleSelect = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedQuery(event.target.value);
  };

  const handleQuery = async () => {
    setFetching(true);
    if (primaryWallet) {
      try {
        const result = await sendContractQuery(selectedQuery, contractAddress);
        if (result) {
          if (
            selectedQuery === 'getUnclaimedFunds' ||
            selectedQuery === 'getUnclaimedFees' ||
            selectedQuery === 'getMinContribution'
          ) {
            setQueryResult(fromWei(network!, result) || '0');
          } else {
            if (Array.isArray(result)) {
              setQueryResult(result.join('\n'));
            } else {
              setQueryResult(result);
            }
          }
        } else {
          setQueryResult('ERROR, CHECK LOGS AND TRY AGAIN');
        }
      } catch {
        setQueryResult('ERROR, CHECK LOGS AND TRY AGAIN');
        console.error;
      } finally {
        setFetching(false);
      }
    }
  };

  useEffect(() => {
    setQueryResult('');
    if (/^0x[a-fA-F0-9]{40}$/.test(contractAddress)) {
      setValidAddress(true);
    } else {
      setValidAddress(false);
    }
  }, [contractAddress, network]);

  return (
    <section className={styles.section}>
      <h2 className={styles.header}>Query Contracts</h2>
      <div className={styles.queryBox}>
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
              onChange={handleChange}
              placeholder="0x00000..."
              readOnly={fetching}
            />
          </div>
          <div className={styles.radioSelector}>
            <label className={styles.formLabel}>
              <input
                type="radio"
                value="getAllDeployed"
                checked={selectedQuery === 'getAllDeployed'}
                onChange={handleSelect}
              />
              Get Deployed Projects{' '}
              <span className={styles.factoryMark}>Factory</span>
            </label>
            <label className={styles.formLabel}>
              <input
                type="radio"
                value="getOwnerFactory"
                checked={selectedQuery === 'getOwnerFactory'}
                onChange={handleSelect}
              />
              Get Contract Owner{' '}
              <span className={styles.factoryMark}>Factory</span>
            </label>
            <label className={styles.formLabel}>
              <input
                type="radio"
                value="getOwnerProject"
                checked={selectedQuery === 'getOwnerProject'}
                onChange={handleSelect}
              />
              Get Contract Owner{' '}
              <span className={styles.projectMark}>Project</span>
            </label>
            <label className={styles.formLabel}>
              <input
                type="radio"
                value="getContributors"
                checked={selectedQuery === 'getContributors'}
                onChange={handleSelect}
              />
              Get All Contributors{' '}
              <span className={styles.projectMark}>Project</span>
            </label>
            <label className={styles.formLabel}>
              <input
                type="radio"
                value="getUnclaimedFunds"
                checked={selectedQuery === 'getUnclaimedFunds'}
                onChange={handleSelect}
              />
              Get Unclaimed Contributions{' '}
              <span className={styles.projectMark}>Project</span>
            </label>
            <label className={styles.formLabel}>
              <input
                type="radio"
                value="getUnclaimedFees"
                checked={selectedQuery === 'getUnclaimedFees'}
                onChange={handleSelect}
              />
              Get Unclaimed Fees{' '}
              <span className={styles.projectMark}>Project</span>
            </label>
            <label className={styles.formLabel}>
              <input
                type="radio"
                value="getFeePercentage"
                checked={selectedQuery === 'getFeePercentage'}
                onChange={handleSelect}
              />
              Get Fee Percentage{' '}
              <span className={styles.projectMark}>Project</span>
            </label>
            <label className={styles.formLabel}>
              <input
                type="radio"
                value="getMinContribution"
                checked={selectedQuery === 'getMinContribution'}
                onChange={handleSelect}
              />
              Get Minimum Contribution{' '}
              <span className={styles.projectMark}>Project</span>
            </label>
            <label className={styles.formLabel}>
              <input
                type="radio"
                value="getStableAddress"
                checked={selectedQuery === 'getStableAddress'}
                onChange={handleSelect}
              />
              Get Stablecoin Address{' '}
              <span className={styles.projectMark}>Project</span>
            </label>
            <label className={styles.formLabel}>
              <input
                type="radio"
                value="getResearcher"
                checked={selectedQuery === 'getResearcher'}
                onChange={handleSelect}
              />
              Get Current Researcher{' '}
              <span className={styles.projectMark}>Project</span>
            </label>
            <label className={styles.formLabel}>
              <input
                type="radio"
                value="getFeeCollector"
                checked={selectedQuery === 'getFeeCollector'}
                onChange={handleSelect}
              />
              Get Fee Collector{' '}
              <span className={styles.projectMark}>Project</span>
            </label>
          </div>
        </form>
        <button
          className={styles.actionBtn}
          onClick={handleQuery}
          disabled={!primaryWallet || fetching || !validAddress}>
          Send Query
        </button>
        <form className={styles.inputForm}>
          <textarea
            className={`${styles.formInput} ${styles.areaInput}`}
            id="queryResult"
            name="queryResult"
            rows={10}
            value={queryResult}
            placeholder="Result will be displayed here..."
            readOnly
          />
        </form>
      </div>
    </section>
  );
};

export default ContractQueries;
