import {
  useState,
  Dispatch,
  SetStateAction,
  FormEvent,
  ChangeEvent,
  useEffect,
} from 'react';

import NoWallet from './no-wallet';
import styles from './submit-funding.module.scss';
import AnimatedDots from '@/components/site/animatedDots/animated-dots';
import SuccessBox from './success-box';

interface SubmitFundingProps {
  imagePath: string;
  contractAddress: string;
  setImageRequested: Dispatch<SetStateAction<boolean>>;
  setImageGenerated: Dispatch<SetStateAction<boolean>>;
  setImagePath: Dispatch<SetStateAction<string>>;
}

const SubmitFunding = ({
  imagePath,
  contractAddress,
  setImageRequested,
  setImageGenerated,
  setImagePath,
}: SubmitFundingProps) => {
  const [walletAddress, setWalletAddress] = useState('');
  const [contributionAmount, setContributionAmount] = useState('');
  const [validInput, setValidInput] = useState(false);
  const [txnSent, setTxnSent] = useState(false);
  const [txnSuccess, setTxnSuccess] = useState(false);
  const [txnFailed, setTxnFailed] = useState(false);
  const [txnHash, setTxnHash] = useState('');
  const [tokenId, setTokenId] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTxnSent(true);
    setTimeout(() => {
      if (Math.random() < 0.5) {
        setTxnSuccess(true);
        setTxnHash(
          '0x8e24a77a94324b960bb308549dea058fc508096af9be3a0e90d7ccaf8a995e8e'
        );
        setTokenId('1');
        setTxnFailed(false);
      } else {
        setTxnSuccess(false);
        setTxnFailed(true);
        setTxnSent(false);
      }
    }, 2000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContributionAmount(e.target.value);
  };

  const handleRestart = () => {
    setImageRequested(false);
    setImageGenerated(false);
    setImagePath('');
  };

  useEffect(() => {
    if (
      /^\d+$/.test(contributionAmount) &&
      parseInt(contributionAmount) >= 10
    ) {
      setValidInput(true);
    } else {
      setValidInput(false);
    }
  }, [contributionAmount]);

  return (
    <>
      {!txnSuccess && <h3 className={styles.header}>Looks good!</h3>}
      {txnSuccess && <h3 className={styles.header}>Well done!</h3>}
      {!walletAddress && <NoWallet setWalletAddress={setWalletAddress} />}
      {txnSuccess && (
        <SuccessBox
          txnHash={txnHash}
          tokenId={tokenId}
          contractAddress={contractAddress}
        />
      )}
      {walletAddress && !txnSuccess && (
        <>
          <div className={styles.fundingBox}>
            <h5 className={styles.mainText}>
              Purchase this artwork as a unique digital collectible by
              contributing 10 USDC or more to this research.
            </h5>
            <form
              className={styles.fundingForm}
              onSubmit={handleSubmit}>
              <label
                className={styles.label}
                htmlFor="contribution">
                Contribution Amount
              </label>
              <div className={styles.inputDiv}>
                <span className={styles.usdc}>USDC</span>
                <input
                  className={styles.fundingInput}
                  id="contribution"
                  name="contribution"
                  placeholder="0"
                  onChange={handleChange}
                  value={contributionAmount}
                />
                <button
                  className={styles.submitBtn}
                  type="submit"
                  disabled={!validInput || txnSent}>
                  <span className={txnSent ? styles.hidden : ''}>
                    Submit Funding
                  </span>
                  <div
                    className={
                      txnSent ? styles.dots : `${styles.dots} ${styles.hidden}`
                    }>
                    <AnimatedDots />
                  </div>
                </button>
              </div>
              {!txnFailed && (
                <p
                  className={
                    validInput ? `${styles.note} ${styles.valid}` : styles.note
                  }>
                  Please enter a whole number 10 or greater, numbers only.
                </p>
              )}
              {txnFailed && (
                <p className={`${styles.note} ${styles.alert}`}>
                  Something went wrong, please try again.
                </p>
              )}
            </form>
          </div>
          <p className={styles.tryAgain}>
            Don&apos;t like your artwork?{' '}
            <span onClick={handleRestart}>Generate again</span>
          </p>
        </>
      )}
    </>
  );
};

export default SubmitFunding;
