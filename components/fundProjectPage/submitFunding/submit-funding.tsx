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
import { ResearchProjectObject } from '@/app';
import submitFunding from '@/utils/submitFunding';
import updateData from '@/utils/updateData';
import sendAlert from '@/utils/sendAlert';
import styles from './submit-funding.module.scss';
import FormInput from './formInput/form-input';
import createMetadata from '@/utils/createMetadata';

interface SubmitFundingProps {
  imageUrl: string;
  project: ResearchProjectObject;
  connectedWallet: string;
  connectedNetwork: number | undefined;
  walletBalance: string;
  setImageRequested: Dispatch<SetStateAction<boolean>>;
  setImageGenerated: Dispatch<SetStateAction<boolean>>;
  setImageUrl: Dispatch<SetStateAction<string>>;
}

const minContribution = 2; // Change for live projects

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
  const [tokenId, setTokenId] = useState<number>();
  const [contractAddress, setContractAddress] = useState('');
  const [metadataCid, setMetadataCid] = useState('');
  const [displayHelp, setDisplayHelp] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTxnSent(true);
    try {
      let txnResponse;

      const metadataUri = await createMetadata(
        imageUrl,
        project.projectName,
        contributionAmount,
        connectedWallet
      );

      if (metadataUri) {
        setMetadataCid(metadataUri.slice(7, -14));
        txnResponse = await submitFunding(
          connectedWallet,
          contributionAmount!,
          connectedNetwork!,
          contractAddress,
          metadataUri
        );
      }

      if (!txnResponse?.newTokenId || !txnResponse?.newTxnHash) {
        setTxnFailed(true);
        setTxnSuccess(false);
        setTxnSent(false);
      } else {
        setTxnSuccess(true);
        setTxnHash(txnResponse.newTxnHash);
        setTokenId(txnResponse.newTokenId);

        const dataUpload = await updateData(
          project,
          contributionAmount!,
          connectedWallet,
          txnResponse.newTxnHash,
          imageUrl,
          connectedNetwork!,
          txnResponse.newTokenId,
          contractAddress,
          metadataUri.slice(7, -14)
        );

        if (!dataUpload) {
          await sendAlert(
            project._id,
            txnResponse.newTxnHash,
            imageUrl,
            connectedWallet,
            contributionAmount!
          );
        }
      }
    } catch {
      setTxnFailed(true);
      setTxnSuccess(false);
      setTxnSent(false);
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
      contributionAmount >= minContribution
    ) {
      setValidInput(true);
    } else {
      setValidInput(false);
    }

    // select correct contract address corresponding to connected network
    if (connectedNetwork === 137 || connectedNetwork === 80001) {
      setContractAddress(project.contractAddress.polygon);
    } else if (connectedNetwork === 42220 || connectedNetwork === 44787) {
      setContractAddress(project.contractAddress.celo);
    } else {
      setContractAddress('');
    }
  }, [
    contributionAmount,
    connectedNetwork,
    project.contractAddress.polygon,
    project.contractAddress.celo,
  ]);

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
          contractAddress={contractAddress}
          network={connectedNetwork}
          metadataCid={metadataCid}
        />
      )}
      {connectedWallet &&
        networkIds.includes(connectedNetwork!) &&
        !txnSuccess && (
          <>
            <div className={styles.fundingBox}>
              <h5 className={styles.mainText}>
                Purchase this artwork as a unique digital collectible by
                contributing {minContribution}{' '}
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
                minContribution={minContribution}
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
