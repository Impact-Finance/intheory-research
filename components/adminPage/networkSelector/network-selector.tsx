import { AdminModuleProps } from '@/pages/admin-console';
import styles from './network-selector.module.scss';

const NetworkSelector = ({
  network,
  primaryWallet,
  setShowAuthFlow,
}: AdminModuleProps) => {
  return (
    <>
      <p className={styles.networkHead}>Select Network</p>
      <div className={styles.networkSelect}>
        <span
          className={
            primaryWallet && network === 80001
              ? `${styles.networkBtn} ${styles.active}`
              : styles.networkBtn
          }
          onClick={() => {
            !primaryWallet
              ? setShowAuthFlow(true)
              : primaryWallet?.connector.switchNetwork({
                  networkName: 'Mumbai Testnet', // update with mainnet info at launch
                  networkChainId: 80001,
                });
          }}>
          Mumbai Testnet
        </span>
        <span
          className={
            primaryWallet && network === 44787
              ? `${styles.networkBtn} ${styles.active}`
              : styles.networkBtn
          }
          onClick={() => {
            !primaryWallet
              ? setShowAuthFlow(true)
              : primaryWallet?.connector.switchNetwork({
                  networkName: 'Alfajores Testnet',
                  networkChainId: 44787,
                });
          }}>
          Alfajores Testnet
        </span>
        {/* <span
          className={
            primaryWallet && network === 137
              ? `${styles.networkBtn} ${styles.active}`
              : styles.networkBtn
          }
          onClick={() => {
            !primaryWallet
              ? setShowAuthFlow(true)
              : primaryWallet?.connector.switchNetwork({
                  networkName: 'Matic Mainnet',
                  networkChainId: 137,
                });
          }}>
          Polygon Mainnet
        </span>
        <span
          className={
            primaryWallet && network === 42220
              ? `${styles.networkBtn} ${styles.active}`
              : styles.networkBtn
          }
          onClick={() => {
            !primaryWallet
              ? setShowAuthFlow(true)
              : primaryWallet?.connector.switchNetwork({
                  networkName: 'Celo Mainnet',
                  networkChainId: 42220,
                });
          }}>
          Celo Mainnet
        </span> */}
      </div>
    </>
  );
};

export default NetworkSelector;
