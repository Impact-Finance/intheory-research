import { useDynamicContext } from '@dynamic-labs/sdk-react';
import Link from 'next/link';

import polygon from '@/public/site/polygon-logo.png';
import celo from '@/public/site/celo-logo.png';
import styles from './no-wallet.module.scss';
import Image from 'next/image';

interface NoWalletProps {
  action: 'connect' | 'switch';
  handleRestart: () => void;
}

const NoWallet = ({ action, handleRestart }: NoWalletProps) => {
  const { setShowAuthFlow, primaryWallet } = useDynamicContext();
  return (
    <div className={styles.noWallet}>
      <div className={styles.text}>
        {action === 'connect' && (
          <>
            <p>Connect your web3 wallet to support this research.</p>
            <p className={styles.subtext}>
              Your generated artwork will then be sent to your connected wallet
              address as a digital collectible (non-fungible token).
            </p>
          </>
        )}
        {action === 'switch' && (
          <>
            <p>Current network not supported.</p>
            <p className={styles.subtext}>
              Choose your preferred blockchain network below for sending your
              funding contribution and receiving your digital collectible.
              Transactions are conducted in USDC on Polygon and cUSD on Celo.
            </p>
          </>
        )}
      </div>
      {action === 'connect' && (
        <button
          className={styles.connectWallet}
          onClick={() => {
            setShowAuthFlow(true);
          }}>
          Connect Wallet
        </button>
      )}
      {action === 'switch' && (
        <div className={styles.networkButtons}>
          <button
            className={styles.connectWallet}
            onClick={() => {
              primaryWallet?.connector.switchNetwork({
                networkName: 'Mumbai Testnet', // update with mainnet info at launch
                networkChainId: 80001,
              });
            }}>
            <div className={styles.logoContainer}>
              <Image
                className={styles.chainLogo}
                src={polygon}
                alt="polygon"
                fill
                sizes="5vw"
              />
            </div>
            Polygon
          </button>
          <button
            className={styles.connectWallet}
            onClick={() => {
              primaryWallet?.connector.switchNetwork({
                networkName: 'Alfajores Testnet', // update with mainnet info at launch
                networkChainId: 44787,
              });
            }}>
            <div className={styles.logoContainer}>
              <Image
                className={styles.chainLogo}
                src={celo}
                alt="celo"
                fill
                sizes="5vw"
              />
            </div>
            Celo
          </button>
        </div>
      )}
      <div className={styles.help}>
        {action === 'connect' && (
          <>
            <p className={styles.helpHead}>
              Don&apos;t have a web3 wallet yet?
            </p>
            <p className={styles.helpSub}>
              Check out{' '}
              <span>
                <Link
                  href="/submit-project/#FAQ"
                  target="_blank"
                  rel="noreferrer">
                  our FAQ
                </Link>
              </span>{' '}
              to learn how to set one up and why you need one. Then come back
              here to claim your art!
            </p>
            <p className={styles.tryAgain}>
              Don&apos;t like your artwork?{' '}
              <span onClick={handleRestart}>Generate again</span>
            </p>
          </>
        )}
        {action === 'switch' && (
          <>
            <p className={styles.helpHead}>How do I choose?</p>
            <p className={styles.helpSub}>
              Check out{' '}
              <span>
                <Link
                  href="/submit-project/#FAQ"
                  target="_blank"
                  rel="noreferrer">
                  our FAQ
                </Link>
              </span>{' '}
              to learn about Celo and Polygon and why we chose them for our
              application. Then come back here to claim your art!
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default NoWallet;
