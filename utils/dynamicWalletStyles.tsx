const dynamicWalletStyles = `
  .typography,
  .typography--primary,
  .typography--secondary, 
  .typography--body-normal,
  .search__input,
  .trailing__badge,
  .search__button--clear,
  p,
  button {
    font-family: Jura, sans-serif;
    font-size: large;
  }
  .typography--title {
    color: #68eaff;
    font-size: 2.4rem;
    line-height: 3.5rem;
  }
  .typography--dynamic-error-1 {
    color: rgb(254, 0, 254);
  }
  .typography--button-primary {
    color: #68eaff;
    font-weight: 400;
    font-size: inherit;
    transition: all 0.2s;
  }
  .dynamic-connect-button {
    background-color: #0c294b;
    border-radius: 0.8rem;
    border-color: transparent;
    padding: 0.8rem 1.5rem;
    width: fit-content;
    height: fit-content;
  }
  .dynamic-connect-button::after {
    --borderWidth: 1px;
    content: '';
    filter: opacity(0.6);
    position: absolute;
    top: calc(-1 * var(--borderWidth));
    left: calc(-1 * var(--borderWidth));
    height: calc(100% + var(--borderWidth) * 2);
    width: calc(100% + var(--borderWidth) * 2);
    background: linear-gradient(
      60deg,
      #68eaff,
      #0c294b,
      #fe00fe,
      #0c294b,
      #68eaff
    );
    border-radius: 0.8rem;
    z-index: -1;
    animation: animatedGradient 6s ease alternate infinite;
    background-size: 300% 300%;
  }
  .dynamic-connect-button:hover {
    background-color: rgb(12, 41, 75);
    border-color: transparent;
  }
  .dynamic-connect-button:hover > .typography--button-primary {
    color: rgba(104, 234, 255, 0.75)
  }
  .dynamic-connect-button:hover::after {
    animation-play-state: paused;
  }

  .dynamic-auth-layout__modal {
    width: 60rem;
    border-radius: 1.8rem;
  }
  .dynamic-auth-layout__container {
    border-radius: 1.8rem;
    border-top: 1px solid rgba(104, 234, 255, 0.25);
    border-bottom: 1px solid rgba(104, 234, 255, 0.25);
  }
  .vertical-accordion__container {
    background-color: rgb(4, 12, 22);
    padding: 2rem;
    border-radius: 1.8rem;
  }
  .wallet-list__scroll-container--full-height {
    max-height: 40rem !important;
  }
  .search__container {
    height: 4rem;
    padding: 1.2rem;
  }
  .search-icon__container {
    height: 2rem;
    width: 2rem;
  }
  
  .icon-button > svg {
    height: 2.2rem;
    width: 2.2rem;
  }

  .wallet-list-item__tile {
    padding: 1.5rem;
    gap: 1rem;
  }
  .wallet-list-item__tile > img {
    width: 2.2rem !important;
    height: 2.2rem !important;
  }

  .badge__container {
    gap: 0.75rem;
    padding: 0.5rem 1rem;
    border-radius: 0.8rem;
  }

  .badge__container > span {
    font-size: 1.6rem;
  }

  .badge__dot {
    height: 0.75rem;
    width: 0.75rem;
  }

  .search-instead__container > p:last-of-type {
    font-size: 1.4rem;
    margin-top: 0.5rem;
  }

  .error-container {
    color: rgb(254, 0, 254);
    background-color: rgba(254, 0, 254, 0.15)
  }
  .error-container p {
    color: rgb(254, 0, 254);
  }

  .footer, 
  .badge__container {
    background-color: rgba(12, 41, 75, 0.5);
  }

  .footer__container--icon svg {
    height: 2.2rem;
    width: 2.2rem;
  }

  .footer__arrow {
    width: 2.2rem;
    height: 2.2rem;
  }
  .footer-buttons-item {
    background-color: rgba(12, 41, 75, 0.25);
  }
  .footer-buttons-item__icon--left {
    margin-right: 1rem;
  }
  .footer-buttons-item__icon--left img,
  .footer-buttons-item__icon--left svg {
    width: 2rem;
    height: 2rem;
  }

  .walletlist-footer-content__icon {
    width: 5rem;
    margin-top: 1rem;
  }

  .new-to-web3-buttons__container button {
    background-color: rgba(12, 41, 75, 0.5);
    color: #68eaff;
  }

  .pending-signature__container .pending-signature__title {
    margin-bottom: 1rem;
  }
  .pending-signature__container .pending-signature__copy {
    line-height: 2.2rem;
  }
  .powered-by-dynamic__logo {
    max-width: 10rem;
  }
  .icon-button,
  .info-item__container .info-item__icon-container,
  .info-item__container .info-item__icon-container svg {
    width: 2.2rem;
    height: 2.2rem;
  }
  .qrcode__container {
    width: 20rem;
    height: 20rem;
  }
  .qrcode__icon,
  .icon-with-spinner__spinner-container,
  .icon-with-spinner__icon-container,
  .icon-with-spinner__icon-container img {
    width: 4rem !important;
    height: 4rem !important;
  }
  .icon-with-spinner__spinner {
    display: none;
  }
  .qr-code-view__scan-issue-message {
    background-color: rgba(12, 41, 75, 0.5)
  }
  .qr-code-view__scan-issue-button {
    font-size: inherit;
    color: #68eaff;
  }
  .pending-signature__container .pending-signature__copy,
  .qrcode-container__content {
    max-width: 35rem;
  }
  .wallet-help-link__anchor {
    background-color: rgba(12, 41, 75, 0.5);
    gap: 1rem;
    border: none;
  }
  .wallet-help-link__anchor img {
    width: 2rem !important;
    height: 2rem !important;
  }
  .copy-button__container {
    font-size: 1.4rem;
  }
  .icon--size-small {
    width: 2rem;
    height: 2rem;
  }

  .dynamic-widget-inline-controls {
    max-height: 4rem;
    background-color: rgba(12, 41, 75, 0.5);
    border-radius: 0.8rem;
  }
  .dynamic-widget-inline-controls__network-picker,
  .account-control__container {
    border-radius: 0.8rem;
    color: rgba(104, 234, 255, 0.75);
    gap: 1rem;
    font-size: 1.8rem;
    transition: all 0.2s;
  }
  .dynamic-widget-inline-controls__network-picker {
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
  }
  .account-control__container {
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
  }
  .account-control__container svg {
    color: rgba(104, 234, 255, 0.75) !important;
  }
  .dynamic-widget-inline-controls__network-picker:hover,
  .account-control__container:hover { 
    background-color: rgba(12, 41, 75, 0.5);
    filter: opacity(0.75);
  }
  .dynamic-widget-modal {
    max-height: 25rem;
    width: 35rem;
  }
  .dynamic-widget-card {
    background-color: rgb(4, 12, 22);
  }
  .status-dot {
    width: 0.75rem;
    height: 0.75rem;
  }
  .dynamic-widget-header__icon-container{
    height: 6rem;
  }
  .dynamic-widget-header__network-picker.evm-network-control__container {
    height: 3rem;
  }
  .single-wallet-buttons .button--primary {
    background-color: rgba(12, 41, 75, 0.5);
    border: none;
  }
  .action-list__container {
    background-color: rgba(12, 41, 75, 0.5);
    backdrop-filter: blur(10px);
  }
  .network .network__title-icon {
    width: 1.8rem;
    height: 1.8rem;
  }
  .network__title-container span {
    font-size: 1.4rem;
  }
  .evm-network-control__container--error span {
    font-size: 1.6rem;
  }

  @keyframes animatedGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export default dynamicWalletStyles;
