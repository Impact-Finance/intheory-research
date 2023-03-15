import {
  useState,
  Dispatch,
  SetStateAction,
  FormEvent,
  ChangeEvent,
  useEffect,
} from 'react';

import { networkIds } from '@/utils/supportedNetworks';
import NoWallet from './no-wallet';
import AnimatedDots from '@/components/site/animatedDots/animated-dots';
import SuccessBox from './success-box';
import { ResearchProject } from '@/app';
import submitFunding from '@/utils/submitFunding';
import updateData from '@/utils/updateData';
import sendAlert from '@/utils/sendAlert';
import styles from './submit-funding.module.scss';

interface SubmitFundingProps {
  imageUrl: string;
  project: ResearchProject;
  connectedWallet: string;
  connectedNetwork: number | undefined;
  walletBalance: string | undefined;
  setImageRequested: Dispatch<SetStateAction<boolean>>;
  setImageGenerated: Dispatch<SetStateAction<boolean>>;
  setImageUrl: Dispatch<SetStateAction<string>>;
}

const SubmitFunding = ({
  imageUrl,
  project,
  connectedWallet,
  connectedNetwork,
  walletBalance,
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTxnSent(true);

    const { newTxnHash, newTokenId } = await submitFunding(
      connectedWallet,
      contributionAmount!,
      connectedNetwork!,
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
        connectedWallet,
        newTxnHash,
        imageUrl
      );

      if (!dataUpload) {
        await sendAlert(
          project._id,
          newTxnHash,
          imageUrl,
          connectedWallet,
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
      {!connectedWallet && <NoWallet action="connect" />}
      {connectedWallet && !networkIds.includes(connectedNetwork!) && (
        <NoWallet action="switch" />
      )}
      {txnSuccess && (
        <SuccessBox
          txnHash={txnHash}
          tokenId={tokenId}
          contractAddress={project.contractAddress}
        />
      )}
      {connectedWallet &&
        networkIds.includes(connectedNetwork!) &&
        !txnSuccess && (
          <>
            <div className={styles.fundingBox}>
              <h5 className={styles.mainText}>
                Purchase this artwork as a unique digital collectible by
                contributing 25{' '}
                {connectedNetwork === 137 ||
                  (connectedNetwork === 80001 && <span>USDC</span>)}
                {connectedNetwork === 42220 ||
                  (connectedNetwork === 44787 && <span>cUSD</span>)}{' '}
                or more to this research.
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
                        txnSent
                          ? styles.dots
                          : `${styles.dots} ${styles.hidden}`
                      }>
                      <AnimatedDots />
                    </div>
                  </button>
                </div>
                {/* <div className={styles.currentBalance}>
                  Current balance: {walletBalance}
                </div> */}
                {connectedNetwork === 137 ||
                  (connectedNetwork === 80001 && (
                    <a
                      className={styles.rampLink}
                      href="https://ramp.network/buy/"
                      target="_blank"
                      rel="noreferrer">
                      Buy Polygon USDC on Ramp
                    </a>
                  ))}
                {connectedNetwork === 42220 ||
                  (connectedNetwork === 44787 && (
                    <a
                      className={styles.rampLink}
                      href="https://ramp.network/buy/"
                      target="_blank"
                      rel="noreferrer">
                      Buy Celo cUSD on Ramp
                    </a>
                  ))}
                {!txnFailed && (
                  <p
                    className={
                      validInput
                        ? `${styles.note} ${styles.valid}`
                        : styles.note
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
