import styles from './status-message.module.scss';

interface StatusMessageProps {
  txnFailed: boolean;
  validInput: boolean;
  insufficientBalance: boolean;
  minContribution: number;
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
  insufficientBalance,
  minContribution,
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
            {requestingApproval && (
              <>
                Requesting spending approval.{' '}
                <span className={styles.confirm}>Confirm in wallet...</span>
              </>
            )}
            {approvalGranted && (
              <>
                <span className={styles.approved}>APPROVED. </span>Waiting on
                network confirmation...
              </>
            )}
            {creatingMetadata &&
              'Creating token metadata and uploading to IPFS...'}
            {requestingTxn && (
              <>
                Requesting finalized transaction.{' '}
                <span className={styles.confirm}>Confirm in wallet...</span>
              </>
            )}
            {txnGranted && (
              <>
                <span className={styles.approved}>SUBMITTED. </span>Waiting on
                network confirmation...
              </>
            )}
            <div className={styles.loaderLine}></div>
          </p>
        </>
      )}
      {!txnSent && !txnFailed && insufficientBalance && (
        <p className={`${styles.note} ${styles.alert}`}>
          INSUFFICIENT BALANCE IN WALLET
        </p>
      )}
      {!txnSent && !txnFailed && !insufficientBalance && (
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
