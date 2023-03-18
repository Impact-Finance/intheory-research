import styles from './status-message.module.scss';

interface StatusMessageProps {
  txnFailed: boolean;
  validInput: boolean;
}

const StatusMessage = ({ txnFailed, validInput }: StatusMessageProps) => {
  return (
    <>
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
    </>
  );
};

export default StatusMessage;
