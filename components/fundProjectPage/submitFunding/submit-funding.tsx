import {
  useState,
  Dispatch,
  SetStateAction,
  FormEvent,
  ChangeEvent,
  useEffect,
} from 'react';

import HiddenContent from '@/components/site/hiddenContent/hidden-content';
import { networkIds } from '@/utils/supportedNetworks';
import NoWallet from '../noWallet/no-wallet';
import SuccessBox from '../successBox/success-box';
import { ResearchProject } from '@/app';
import submitFunding from '@/utils/submitFunding';
import updateData from '@/utils/updateData';
import sendAlert from '@/utils/sendAlert';
import styles from './submit-funding.module.scss';
import FormInput from './formInput/form-input';

interface SubmitFundingProps {
  imageUrl: string;
  project: ResearchProject;
  connectedWallet: string;
  connectedNetwork: number | undefined;
  walletBalance: string;
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
  const [displayHelp, setDisplayHelp] = useState(false);

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
      {!connectedWallet && !txnSuccess && (
        <NoWallet
          action="connect"
          handleRestart={handleRestart}
        />
      )}
      {connectedWallet &&
        !networkIds.includes(connectedNetwork!) &&
        !txnSuccess && (
          <NoWallet
            action="switch"
            handleRestart={handleRestart}
          />
        )}
      {txnSuccess && (
        <SuccessBox
          txnHash={txnHash}
          tokenId={tokenId}
          contractAddress={project.contractAddress}
          network={connectedNetwork}
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
              <FormInput
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                contributionAmount={contributionAmount}
                validInput={validInput}
                txnSent={txnSent}
                txnFailed={txnFailed}
                connectedNetwork={connectedNetwork}
                walletBalance={walletBalance}
              />
              <button
                className={styles.howBtn}
                onClick={() => {
                  setDisplayHelp(true);
                }}>
                <span>?</span>I need help submitting my contribution
              </button>
              {displayHelp && (
                <HiddenContent
                  revealFunction={setDisplayHelp}
                  context="funding"
                />
              )}
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
