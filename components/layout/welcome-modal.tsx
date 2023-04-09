import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

import inTheory from '@/public/company/intheory-logo-mark-beta.png';
import styles from './welcome-modal.module.scss';

interface WelcomeModalProps {
  setShowWelcome: Dispatch<SetStateAction<boolean>>;
}

const WelcomeModal = ({ setShowWelcome }: WelcomeModalProps) => {
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.welcomeBox}>
        <button
          className={styles.exitBtn}
          onClick={() => {
            setShowWelcome(false);
          }}>
          X
        </button>
        <div className={styles.logoBox}>
          <Image
            className={styles.logo}
            src={inTheory}
            alt="intheory logo"
            fill
            sizes=""
          />
        </div>
        <h3 className={styles.header}>Welcome science lovers!</h3>
        <p className={styles.body}>
          inTheory provides researchers with a low-touch platform for
          communicating their work to the world while also earning crowdsourced
          supplementary income. Any user can support science by collecting
          project-inspired generative artworks.
        </p>
        <p className={styles.body}>
          <span>
            NOTE: All projects and researchers currently on the beta platform
            are fictitious.
          </span>{' '}
          Any resemblance to real projects, people, or organizations is purely
          coincidental.
        </p>
        <p className={styles.body}>
          <span>We are looking for researchers!</span> If you would like to have
          your research project featured on inTheory for our mainnet launch,
          please send us an email at info@impact-finance.io.
        </p>
        <button
          className={styles.enterBtn}
          onClick={() => {
            setShowWelcome(false);
          }}>
          Enter Beta
        </button>
      </div>
    </>
  );
};

export default WelcomeModal;
