import {
  useState,
  Dispatch,
  SetStateAction,
  FormEvent,
  ChangeEvent,
  useEffect,
} from 'react';
import { useDynamicContext } from '@dynamic-labs/sdk-react';

import NoWallet from './no-wallet';
import AnimatedDots from '@/components/site/animatedDots/animated-dots';
import SuccessBox from './success-box';
import { ResearchProject } from '@/app';
import submitFunding from '@/utils/submitFunding';
import updateData from '@/utils/updateData';
import styles from './submit-funding.module.scss';
import sendAlert from '@/utils/sendAlert';

interface SubmitFundingProps {
  imageUrl: string;
  project: ResearchProject;
  setImageRequested: Dispatch<SetStateAction<boolean>>;
  setImageGenerated: Dispatch<SetStateAction<boolean>>;
  setImageUrl: Dispatch<SetStateAction<string>>;
}

const SubmitFunding = ({
  imageUrl,
  project,
  setImageRequested,
  setImageGenerated,
  setImageUrl,
}: SubmitFundingProps) => {
  const [contributionAmount, setContributionAmount] = useState<number>();
  const [validInput, setValidInput] = useState(false);
  const [txnSent, setTxnSent] = useState(false);
  const [txnSuccess, setTxnSuccess] = useState(false);
  const [txnFailed, setTxnFailed] = useState(false);
  const [txnHash, setTxnHash] = useState('');
  const [tokenId, setTokenId] = useState('');
  const { primaryWallet } = useDynamicContext();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTxnSent(true);

    const { newTxnHash, newTokenId } = await submitFunding(
      primaryWallet!.address,
      contributionAmount!,
      project.contractAddress
    );

    if (!newTxnHash) {
      setTxnFailed(true);
      setTxnSuccess(false);
      setTxnSent(false);
    } else {
      setTxnSuccess(true);
      setTxnHash(newTxnHash);
      setTokenId(newTokenId);

      const dataUpload = await updateData(
        project,
        contributionAmount!,
        primaryWallet!.address,
        newTxnHash,
        imageUrl
      );

      if (!dataUpload) {
        await sendAlert(
          project._id,
          newTxnHash,
          imageUrl,
          primaryWallet!.address,
          contributionAmount!
        );
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isNaN(parseInt(e.target.value))) {
      setContributionAmount(0);
    } else {
      setContributionAmount(parseInt(e.target.value));
    }
  };

  const handleRestart = () => {
    setImageRequested(false);
    setImageGenerated(false);
    setImageUrl('');
  };

  useEffect(() => {
    if (
      contributionAmount &&
      /^\d+$/.test(contributionAmount.toString()) &&
      contributionAmount >= 25
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
      {!primaryWallet && <NoWallet />}
      {txnSuccess && (
        <SuccessBox
          txnHash={txnHash}
          tokenId={tokenId}
          contractAddress={project.contractAddress}
        />
      )}
      {primaryWallet && !txnSuccess && (
        <>
          <div className={styles.fundingBox}>
            <h5 className={styles.mainText}>
              Purchase this artwork as a unique digital collectible by
              contributing 25 USDC or more to this research.
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
                  Please enter a whole number 25 or greater, numbers only.
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
