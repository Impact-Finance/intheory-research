import { useState } from 'react';

import NoWallet from './no-wallet';
import styles from './submit-funding.module.scss';

interface SubmitFundingProps {}

const SubmitFunding = ({}: SubmitFundingProps) => {
  const [walletAddress, setWalletAddress] = useState('');

  return (
    <>
      <h5 className={styles.header}>Looks good!</h5>
      {!walletAddress && <NoWallet setWalletAddress={setWalletAddress} />}
      {walletAddress && <div>Submit funding</div>}
    </>
  );
};

export default SubmitFunding;
