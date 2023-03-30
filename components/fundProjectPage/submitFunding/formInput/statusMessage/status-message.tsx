import styles from './status-message.module.scss';

interface StatusMessageProps {
  txnFailed: boolean;
  validInput: boolean;
  minContribution: number;
  walletBalance: string;
  contributionAmount: number | undefined;
  txnSent: boolean;
  creatingMetadata: boolean;
  requestingApproval: boolean;
  requestingTxn: boolean;
  approvalGranted: boolean;
  txnGranted: boolean;
}

const StatusMessage = ({
  txnFailed,
  validInput,
  minContribution,
  walletBalance,
  contributionAmount,
  txnSent,
  creatingMetadata,
  requestingApproval,
  requestingTxn,
  approvalGranted,
  txnGranted,
}: StatusMessageProps) => {
  return (
    <>
      {txnSent && (
        <>
          <div className={styles.overlay}></div>
          <p className={`${styles.note} ${styles.status}`}>
            {requestingApproval &&
              'Requesting spending approval. Confirm in wallet...'}
            {/* {approvalGranted && 'APPROVED. Waiting on network confirmation.'} */}
            {approvalGranted && (
              <>
                <span>APPROVED. </span>Waiting on network confirmation...
              </>
            )}
            {creatingMetadata &&
              'Creating token metadata and uploading to IPFS...'}
            {requestingTxn &&
              'Requesting finalized transaction. Confirm in wallet...'}
            {txnGranted && (
              <>
                <span>SUBMITTED. </span>Waiting on network confirmation...
              </>
            )}
            <div className={styles.loaderLine}></div>
          </p>
        </>
      )}
      {!txnSent &&
        !txnFailed &&
        contributionAmount! <= parseInt(walletBalance) &&
        contributionAmount! > 0 &&
        contributionAmount! > minContribution && (
          <p className={`${styles.note} ${styles.valid}`}>-</p>
        )}
      {!txnSent &&
        !txnFailed &&
        contributionAmount! > parseInt(walletBalance) &&
        contributionAmount! > 0 && (
          <p className={`${styles.note} ${styles.alert}`}>
            INSUFFICIENT BALANCE
          </p>
        )}
      {!txnSent &&
        !txnFailed &&
        (!contributionAmount ||
          contributionAmount === 0 ||
          contributionAmount! <= minContribution) && (
          <p
            className={
              validInput ? `${styles.note} ${styles.valid}` : styles.note
            }>
            Please enter a whole number {minContribution} or greater, numbers
            only.
          </p>
        )}
      {!txnSent && txnFailed && (
        <p className={`${styles.note} ${styles.alert}`}>
          Something went wrong, please try again.
        </p>
      )}
    </>
  );
};

export default StatusMessage;
