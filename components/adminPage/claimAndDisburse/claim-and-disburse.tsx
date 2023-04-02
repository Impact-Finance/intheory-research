import { ChangeEvent, useEffect, useState } from 'react';
import { ethers } from 'ethers';

import sendContractQuery from '@/utils/sendContractQuery';
import { AdminModuleProps } from '@/pages/admin-console';
import NetworkSelector from '../networkSelector/network-selector';
import { sendClaimRequest } from '@/utils/sendContractModifier';
import styles from './claim-and-disburse.module.scss';

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
  const [decimals, setDecimals] = useState(1);

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
        const hash = await sendClaimRequest(
          claimType,
          contractAddress,
          primaryWallet
        );
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
    if (network === 137 || network === 80001) {
      setDecimals(6);
    }
    if (network === 42220 || network === 44787) {
      setDecimals(18);
    }
    const fetchData = async () => {
      setFetching(true);
      setFetched(false);
      try {
        const fees = await sendContractQuery(
          'getUnclaimedFees',
          contractAddress,
          primaryWallet!
        );
        const funds = await sendContractQuery(
          'getUnclaimedFunds',
          contractAddress,
          primaryWallet!
        );
        if (fees === null || funds === null) {
          setUnclaimedFees('ERROR, CHECK LOGS AND TRY AGAIN');
          setUndisbursedFunds('ERROR, CHECK LOGS AND TRY AGAIN');
        } else {
          if (fees !== 'NO VALUE') {
            const formattedFees = ethers.formatUnits(fees, decimals);
            setUnclaimedFees(formattedFees || 0);
          } else {
            setUnclaimedFees(0);
          }
          if (funds !== 'NO VALUE') {
            const formattedFunds = ethers.formatUnits(funds, decimals);
            setUndisbursedFunds(formattedFunds || 0);
          } else {
            setUndisbursedFunds(0);
          }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <p
          className={styles.status}
          onClick={() => {
            navigator.clipboard.writeText(txnHash);
          }}>
          Transfer status:{' '}
          {success && <span className={styles.success}>success</span>}
          {pending && <span className={styles.pending}>pending...</span>}
          {failed && <span className={styles.failed}>failed</span>}
        </p>
        <p
          className={styles.status}
          onClick={() => {
            navigator.clipboard.writeText(txnHash);
          }}>
          Txn hash:{' '}
          <span className={styles.pending}>
            {txnHash && <>{txnHash.slice(0, 8) + '...' + txnHash.slice(-8)}</>}
          </span>
        </p>
      </div>
    </section>
  );
};

export default ClaimAndDisburse;
