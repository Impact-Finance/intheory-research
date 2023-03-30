import {
  useState,
  Dispatch,
  SetStateAction,
  FormEvent,
  ChangeEvent,
  useEffect,
} from 'react';
import { Wallet } from '@dynamic-labs/sdk-react';
import { ethers } from 'ethers';

import HiddenContent from '@/components/site/hiddenContent/hidden-content';
import { networkIds } from '@/utils/supportedNetworks';
import NoWallet from '../noWallet/no-wallet';
import SuccessBox from '../successBox/success-box';
import { ResearchProjectObject } from '@/app';
import submitFunding from '@/utils/submitFunding';
import updateData from '@/utils/updateData';
import sendAlert from '@/utils/sendAlert';
import FormInput from './formInput/form-input';
import createMetadata from '@/utils/createMetadata';
import approveErc20 from '@/utils/approveErc20';
import styles from './submit-funding.module.scss';

interface SubmitFundingProps {
  imageUrl: string;
  project: ResearchProjectObject;
  connectedWallet: string;
  connectedNetwork: number | undefined;
  walletBalance: string;
  walletObject: Wallet | null;
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
  walletObject,
  setImageRequested,
  setImageGenerated,
  setImageUrl,
}: SubmitFundingProps) => {
  const [contributionAmount, setContributionAmount] = useState<number>();
  const [validInput, setValidInput] = useState(false);
  const [txnSent, setTxnSent] = useState(false);
  const [creatingMetadata, setCreatingMetadata] = useState(false);
  const [requestingApproval, setRequestingApproval] = useState(false);
  const [approvalGranted, setApprovalGranted] = useState(false);
  const [requestingTxn, setRequestingTxn] = useState(false);
  const [txnGranted, setTxnGranted] = useState(false);
  const [txnSuccess, setTxnSuccess] = useState(false);
  const [txnFailed, setTxnFailed] = useState(false);
  const [txnHash, setTxnHash] = useState('');
  const [tokenId, setTokenId] = useState('');
  const [contractAddress, setContractAddress] = useState('');
  const [metadataCid, setMetadataCid] = useState('');
  const [displayHelp, setDisplayHelp] = useState(false);
  const [decimals, setDecimals] = useState(1);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTxnSent(true);
    setCreatingMetadata(false);
    setRequestingApproval(false);
    setRequestingTxn(false);

    try {
      let txnResponse;
      let approveResponse;
      let metadataUri;
      let provider;
      let signer;
      if (walletObject) {
        provider =
          (await walletObject.connector.getRpcProvider()) as ethers.JsonRpcProvider;
        signer =
          (await walletObject.connector.getSigner()) as ethers.JsonRpcSigner;
        setRequestingApproval(true);
        approveResponse = await approveErc20(
          contributionAmount!,
          connectedNetwork!,
          contractAddress,
          provider,
          signer,
          decimals,
          setRequestingApproval,
          setApprovalGranted
        );
        if (approveResponse) {
          setCreatingMetadata(true);
          metadataUri = await createMetadata(
            imageUrl,
            project.projectName,
            contributionAmount,
            connectedWallet
          );
          setMetadataCid(metadataUri.slice(7, -14));
          setCreatingMetadata(false);

          if (approveResponse && metadataUri && walletObject) {
            setRequestingTxn(true);
            txnResponse = await submitFunding(
              contributionAmount!,
              contractAddress,
              metadataUri,
              signer,
              decimals,
              setRequestingTxn,
              setTxnGranted
            );
          } else {
            setTxnFailed(true);
            setTxnSuccess(false);
            setTxnSent(false);
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
        } else {
          setTxnFailed(true);
          setTxnSuccess(false);
          setTxnSent(false);
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
      setDecimals(6);
    } else if (connectedNetwork === 42220 || connectedNetwork === 44787) {
      setContractAddress(project.contractAddress.celo);
      setDecimals(18);
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
                creatingMetadata={creatingMetadata}
                requestingApproval={requestingApproval}
                approvalGranted={approvalGranted}
                requestingTxn={requestingTxn}
                txnGranted={txnGranted}
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
