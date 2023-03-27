import styles from './status-message.module.scss';

interface StatusMessageProps {
  txnFailed: boolean;
  validInput: boolean;
  minContribution: number;
}

const StatusMessage = ({
  txnFailed,
  validInput,
  minContribution,
}: StatusMessageProps) => {
  return (
    <>
      {!txnFailed && (
        <p
          className={
            validInput ? `${styles.note} ${styles.valid}` : styles.note
          }>
          Please enter a whole number {minContribution} or greater, numbers
          only.
        </p>
      )}
      {txnFailed && (
        <p className={`${styles.note} ${styles.alert}`}>
          Something went wrong, please try again.
        </p>
      )}
    </>
  );
};

export default StatusMessage;
