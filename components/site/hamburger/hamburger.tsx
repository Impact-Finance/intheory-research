import { Dispatch, SetStateAction } from 'react';
import styles from './hamburger.module.scss';

interface HamburgerProps {
  currentState: boolean;
  changeState: Dispatch<SetStateAction<boolean>>;
}

const Hamburger = ({ currentState, changeState }: HamburgerProps) => {
  return (
    <button
      className={styles.hamburgerBtn}
      onClick={() => {
        changeState(!currentState);
      }}>
      <div
        className={
          !currentState
            ? styles.hamburger
            : `${styles.hamburger} ${styles.open}`
        }>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
};

export default Hamburger;
