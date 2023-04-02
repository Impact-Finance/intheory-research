import Image from 'next/image';
import { ChangeEvent, FormEvent } from 'react';

import StatusMessage from './statusMessage/status-message';
import windowIcon from '@/public/icons/window.svg';
import AnimatedDots from '@/components/site/animatedDots/animated-dots';
import styles from './form-input.module.scss';

interface FormInputProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  contributionAmount: number | undefined;
  validInput: boolean;
  insufficientBalance: boolean;
  txnSent: boolean;
  txnFailed: boolean;
  connectedNetwork: number | undefined;
  walletBalance: string;
  minContribution: number;
  creatingMetadata: boolean;
  requestingApproval: boolean;
  requestingTxn: boolean;
  approvalGranted: boolean;
  txnGranted: boolean;
}

const FormInput = ({
  handleSubmit,
  handleChange,
  contributionAmount,
  validInput,
  insufficientBalance,
  txnSent,
  txnFailed,
  connectedNetwork,
  walletBalance,
  minContribution,
  creatingMetadata,
  requestingApproval,
  requestingTxn,
  approvalGranted,
  txnGranted,
}: FormInputProps) => {
  return (
    <form
      className={styles.fundingForm}
      onSubmit={handleSubmit}>
      <label
        className={styles.label}
        htmlFor="contribution">
        Contribution Amount
      </label>
      <div className={styles.inputDiv}>
        {connectedNetwork === 137 ||
          (connectedNetwork === 80001 && (
            <span className={styles.usdc}>USDC</span>
          ))}
        {connectedNetwork === 42220 ||
          (connectedNetwork === 44787 && (
            <span className={styles.usdc}>cUSD</span>
          ))}
        <input
          className={styles.fundingInput}
          id="contribution"
          name="contribution"
          placeholder="0"
          onChange={handleChange}
          value={contributionAmount || ''}
          readOnly={txnSent}
        />
        <button
          className={styles.submitBtn}
          type="submit"
          disabled={
            !validInput ||
            txnSent ||
            contributionAmount! > parseInt(walletBalance)
          }>
          <span className={txnSent ? styles.hidden : ''}>Submit Funding</span>
          <div
            className={
              txnSent ? styles.dots : `${styles.dots} ${styles.hidden}`
            }>
            <AnimatedDots />
          </div>
        </button>
      </div>
      {connectedNetwork === 137 ||
        (connectedNetwork === 80001 && (
          <div className={styles.subText}>
            <p className={styles.currentBalance}>
              <span>Wallet balance:</span> {walletBalance} USDC
            </p>
            <a
              className={styles.rampLink}
              href="https://ramp.network/buy/"
              target="_blank"
              rel="noreferrer">
              Buy Polygon USDC on Ramp{' '}
              <Image
                className={styles.icon}
                src={windowIcon}
                alt=""
                width={10}
                height={10}
              />
            </a>
          </div>
        ))}
      {connectedNetwork === 42220 ||
        (connectedNetwork === 44787 && (
          <div className={styles.subText}>
            <p className={styles.currentBalance}>
              <span>Wallet balance:</span> {walletBalance} cUSD
            </p>
            <a
              className={styles.rampLink}
              href="https://ramp.network/buy/"
              target="_blank"
              rel="noreferrer">
              Buy Celo cUSD on Ramp{' '}
              <Image
                className={styles.icon}
                src={windowIcon}
                alt=""
                width={10}
                height={10}
              />
            </a>
          </div>
        ))}
      <StatusMessage
        validInput={validInput}
        insufficientBalance={insufficientBalance}
        txnFailed={txnFailed}
        minContribution={minContribution}
        txnSent={txnSent}
        creatingMetadata={creatingMetadata}
        requestingApproval={requestingApproval}
        requestingTxn={requestingTxn}
        approvalGranted={approvalGranted}
        txnGranted={txnGranted}
      />
    </form>
  );
};

export default FormInput;
