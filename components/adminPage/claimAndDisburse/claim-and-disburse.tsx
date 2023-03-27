import { ChangeEvent, useEffect, useState } from 'react';

import sendContractQuery from '@/utils/sendContractQuery';
import { AdminModuleProps } from '@/pages/admin-console';
import NetworkSelector from '../networkSelector/network-selector';
import styles from './claim-and-disburse.module.scss';
import { sendClaimRequest } from '@/utils/sendContractModifier';
import { fromWei } from '@/utils/getWei';

const ClaimAndDisburse = ({
  primaryWallet,
  network,
  setShowAuthFlow,
}: AdminModuleProps) => {
  const [contractAddress, setContractAddress] = useState('');
  const [unclaimedFees, setUnclaimedFees] = useState<number | string>('');
  const [undisbursedFunds, setUndisbursedFunds] = useState<number | string>('');
  const [fetching, setFetching] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [pending, setPending] = useState(false);
  const [txnHash, setTxnHash] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setContractAddress(event.target.value.trim());
    setFetching(false);
    setFetched(false);
  };

  const handleClaimRequest = async (claimType: string) => {
    setPending(true);
    setSuccess(false);
    setFailed(false);
    setTxnHash('');
    if (primaryWallet) {
      try {
        const hash = await sendClaimRequest(claimType, contractAddress);
        setSuccess(true);
        setTxnHash(hash);
        setUnclaimedFees('');
        setUndisbursedFunds('');
      } catch {
        setFailed(true);
        console.error;
      } finally {
        setPending(false);
      }
    }
  };

  useEffect(() => {
    setUnclaimedFees('');
    setUndisbursedFunds('');

    const fetchData = async () => {
      setFetching(true);
      setFetched(false);
      try {
        const fees = await sendContractQuery(
          'getUnclaimedFees',
          contractAddress
        );
        const funds = await sendContractQuery(
          'getUnclaimedFunds',
          contractAddress
        );
        if (fees === null || funds === null) {
          setUnclaimedFees('ERROR, CHECK LOGS AND TRY AGAIN');
          setUndisbursedFunds('ERROR, CHECK LOGS AND TRY AGAIN');
        } else {
          setUnclaimedFees(fromWei(network!, fees) || 0);
          setUndisbursedFunds(fromWei(network!, funds) || 0);
        }
      } catch {
        setUnclaimedFees('ERROR, CHECK LOGS AND TRY AGAIN');
        setUndisbursedFunds('ERROR, CHECK LOGS AND TRY AGAIN');
        console.error;
      } finally {
        setFetching(false);
        setFetched(true);
      }
    };
    if (/^0x[a-fA-F0-9]{40}$/.test(contractAddress) && primaryWallet) {
      setFetched(false);
      setFetching(true);

      fetchData();
    }
  }, [contractAddress, primaryWallet, network]);

  return (
    <section className={styles.section}>
      <h2 className={styles.header}>Claim Fees and Disburse Funds</h2>
      <div className={styles.claimBox}>
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
              Paste project contract address:
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
          <div>
            <label
              className={styles.formLabel}
              htmlFor="fees">
              Unclaimed fee amount:
            </label>
            <input
              className={styles.formInput}
              id="fees"
              name="fees"
              type="text"
              value={unclaimedFees.toLocaleString('en-US')}
              placeholder={
                fetching ? 'Fetching data...' : 'Paste contract address above'
              }
              readOnly
            />
          </div>
          <div>
            <label
              className={styles.formLabel}
              htmlFor="funds">
              Undisbursed funds amount:
            </label>
            <input
              className={styles.formInput}
              id="funds"
              name="funds"
              type="text"
              value={undisbursedFunds.toLocaleString('en-US')}
              placeholder={
                fetching ? 'Fetching data...' : 'Paste contract address above'
              }
              readOnly
            />
          </div>
        </form>
        <button
          className={styles.actionBtn}
          onClick={() => {
            handleClaimRequest('claimFees');
          }}
          disabled={
            !primaryWallet ||
            pending ||
            !fetched ||
            unclaimedFees === 'ERROR, CHECK LOGS AND TRY AGAIN' ||
            unclaimedFees == 0
          }>
          Claim Fees
        </button>
        <button
          className={styles.actionBtn}
          onClick={() => {
            handleClaimRequest('disburseFunds');
          }}
          disabled={
            !primaryWallet ||
            pending ||
            !fetched ||
            undisbursedFunds === 'ERROR, CHECK LOGS AND TRY AGAIN' ||
            undisbursedFunds == 0
          }>
          Send Funds to Researcher
        </button>
        <p className={styles.status}>
          Transfer status:{' '}
          {success && <span className={styles.success}>success</span>}
          {pending && <span className={styles.pending}>pending...</span>}
          {failed && <span className={styles.failed}>failed</span>}
        </p>
        <p className={styles.status}>
          Txn hash: <span className={styles.pending}>{txnHash}</span>
        </p>
      </div>
    </section>
  );
};

export default ClaimAndDisburse;
