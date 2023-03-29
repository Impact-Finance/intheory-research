import styles from './status-message.module.scss';

interface StatusMessageProps {
  txnFailed: boolean;
  validInput: boolean;
  minContribution: number;
  walletBalance: string;
  contributionAmount: number | undefined;
}

const StatusMessage = ({
  txnFailed,
  validInput,
  minContribution,
  walletBalance,
  contributionAmount,
}: StatusMessageProps) => {
  return (
    <>
      {!txnFailed &&
        contributionAmount! <= parseInt(walletBalance) &&
        contributionAmount! > 0 &&
        contributionAmount! > minContribution && (
          <p className={`${styles.note} ${styles.valid}`}>-</p>
        )}
      {!txnFailed &&
        contributionAmount! > parseInt(walletBalance) &&
        contributionAmount! > 0 && (
          <p className={`${styles.note} ${styles.alert}`}>
            INSUFFICIENT BALANCE
          </p>
        )}
      {!txnFailed &&
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
      {txnFailed && (
        <p className={`${styles.note} ${styles.alert}`}>
          Something went wrong, please try again.
        </p>
      )}
    </>
  );
};

export default StatusMessage;
