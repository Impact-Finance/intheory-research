const colorMainRgb = '12, 41, 75';
const colorAccentRgb = '104, 234, 255';
const colorDarkRgb = '4, 12, 22';
const colorErrorRgb = '254, 0, 254';
const textXtraLarge = '2.6rem';
const textLarge = '2.2rem';
const textMedium = '1.6rem';
const textSmall = '1.2rem';
const textXtraSmall = '1rem';
const boxBorderRadius = '1.8rem';
const btnBorderRadius = '0.8rem';
const fontFamily = 'Jura, sans-serif';
const modalWidth = '60rem';
const modalHeight = '35rem';

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
    font-family: ${fontFamily};
    font-weight: 400;
  }
  .typography--title {
    color: rgb(${colorAccentRgb});
    font-size: ${textXtraLarge};
  }
  .typography--body-normal {
    font-size: ${textLarge};
  }
  .typography--body-small {
    font-size: ${textMedium};
  }
  .typography--dynamic-error-1 {
    color: rgb(${colorErrorRgb});
  }
  .typography--button-primary {
    color: rgb(${colorAccentRgb});
    font-size: ${textMedium};
    transition: all 0.2s;
  }
  .dynamic-connect-button {
    background-color: rgb(${colorMainRgb});
    border-radius: ${btnBorderRadius};
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
      rgb(${colorAccentRgb}),
      rgb(${colorMainRgb}),
      rgb(${colorErrorRgb}),
      rgb(${colorMainRgb}),
      rgb(${colorAccentRgb})
    );
    border-radius: ${btnBorderRadius};
    z-index: -1;
    animation: animatedGradient 6s ease alternate infinite;
    background-size: 300% 300%;
  }
  .dynamic-connect-button:hover {
    background-color: rgb(${colorMainRgb});
    border-color: transparent;
  }
  .dynamic-connect-button:hover > .typography--button-primary {
    color: rgba(${colorAccentRgb}, 0.75)
  }
  .dynamic-connect-button:hover::after {
    animation-play-state: paused;
  }

  .dynamic-auth-layout__modal {
    width: ${modalWidth};
    border-radius: ${boxBorderRadius};
  }
  .dynamic-auth-layout__container {
    border-radius: ${boxBorderRadius};
    border-top: 1px solid rgba(${colorAccentRgb}, 0.5);
    border-bottom: 1px solid rgba(${colorAccentRgb}, 0.5);
  }
  .vertical-accordion__container {
    background-image: linear-gradient(to bottom, rgba(${colorDarkRgb}, 0.75), rgba(${colorDarkRgb}, 1));
    padding: ${textLarge};
    border-radius: ${boxBorderRadius};
  }
  .modal-header {
    padding-top: 0;
  }
  .wallet-list__scroll-container--full-height {
    max-height: ${modalHeight} !important;
    overflow-x: hidden;
  }
  .search__container {
    height: calc(${textLarge} * 1.8);
    padding: ${textSmall};
    border-radius: ${btnBorderRadius};
  }
  .search__input {
    font-size: ${textMedium};
  }
  .search-icon__container {
    height: ${textLarge};
    width: ${textLarge};
  }
  .search__button--clear {
    font-size: ${textMedium};
  }
  .icon-button > svg {
    height: ${textLarge};
    width:${textLarge};
  }
  .wallet-list-item__tile {
    padding: ${textSmall};
    gap: ${textXtraSmall};
    border-top: 1px solid rgba(${colorAccentRgb}, 0);
    border-bottom: 1px solid rgba(${colorAccentRgb}, 0);
    border-radius: ${btnBorderRadius};
    transition: all 0.2s;
  }
  .wallet-list-item__tile:hover {
    border-top: 1px solid rgba(${colorAccentRgb}, 0.25);
    border-bottom: 1px solid rgba(${colorAccentRgb}, 0.25);
    background-color: rgba(${colorMainRgb}, 0.15)
  }
  .wallet-list-item__tile > img {
    width: ${textLarge} !important;
    height: ${textLarge} !important;
  }
  .badge__container {
    gap: 0.75rem;
    padding: 0.5rem 1rem;
    border-radius: ${btnBorderRadius};
    background-color: rgba(${colorMainRgb}, 0.5);
  }
  .badge__container > span {
    font-size: ${textMedium};
  }
  .badge__dot {
    height: 0.75rem;
    width: 0.75rem;
  }
  .search-instead__container > p {
    margin: 0.5rem;
  }
  .error-container {
    color: rgb(${colorErrorRgb});
    background-color: transparent;
  }
  .error-container p {
    color: rgb(${colorErrorRgb});
  }
  .footer {
    background-color: rgba(${colorMainRgb}, 0.5);
    border-radius: ${btnBorderRadius};
  }
  .footer__container--icon svg {
    height: ${textLarge};
    width: ${textLarge};
  }
  .footer__arrow {
    width: ${textLarge};
    height: ${textLarge};
  }
  .footer-buttons-item {
    background-color: rgba(${colorMainRgb}, 0.25);
    border-radius: ${btnBorderRadius};
  }
  .footer-buttons-item__icon--left {
    margin-right: ${textXtraSmall};
  }
  .footer-buttons-item__icon--left img,
  .footer-buttons-item__icon--left svg {
    width: ${textLarge};
    height: ${textLarge};
  }
  .walletlist-footer-content__typography-wrapper {
    margin: 2rem 0;
  }
  .walletlist-footer-content__icon {
    width: 5rem;
    margin-top: ${textXtraSmall};
  }
  .new-to-web3-buttons__container button {
    background-color: rgba(${colorMainRgb}, 0.5);
    color: rgb(${colorAccentRgb});
    border-radius: ${btnBorderRadius};
  }

  .pending-signature__container .pending-signature__title {
    margin-bottom: ${textXtraSmall};
  }
  .pending-signature__container .pending-signature__copy,
  .qrcode-container__content,
  .pending-connect__container .pending-connect__title,
  .pending-connect__container .pending-connect__copy-text {
    line-height: calc(${textLarge} * 1.2);
    max-width: calc(${modalWidth} * 0.66);
  }
  .powered-by-dynamic__logo {
    max-width: 6rem;
  }
  .footer-more-info-content__wrapper {
    gap: ${textSmall};
  }
  .info-item__container .info-item__icon-container,
  .info-item__container .info-item__icon-container svg {
    width: ${textLarge};
    height: ${textLarge};
  }
  .info-item__secondary-text {
    font-size: calc(${textLarge} * 0.85);
    line-height: ${textLarge};
  }
  .icon-button {
    height: calc(${textLarge} * 0.9);
    width: calc(${textLarge} * 0.9);
  }
  .qrcode__container {
    width: calc(${modalWidth} * 0.4);
    height: calc(${modalWidth} * 0.4);
  }
  .qrcode__icon,
  .icon-with-spinner__icon-container,
  .icon-with-spinner__icon-container img {
    width: calc(${textMedium} * 2) !important;
    height: calc(${textMedium} * 2) !important;
  }
  .indicator__wallet-connect,
  .indicator__wallet-connect svg {
    height: ${textSmall} !important;
    width: ${textSmall} !important;
  }
  .qr-code-view__scan-issue-message {
    background-color: transparent;
  }
  .qr-code-view__scan-issue-button {
    color: rgb(${colorAccentRgb});
    font-size: inherit;
  }
  .wallet-help-link__anchor {
    background-color: rgba(${colorMainRgb}, 0.5);
    gap: ${textXtraSmall};
    margin-bottom: ${textXtraSmall};
    border: none;
    border-radius: ${btnBorderRadius};
  }
  .wallet-help-link__anchor img {
    width: ${textLarge} !important;
    height: ${textLarge} !important;
  }
  .wallet-help-link__anchor p {
    color: white;
  }
  .text-button {
    font-size: ${textSmall};
  } 
  .icon--size-small {
    width: ${textMedium};
    height: ${textMedium};
  }
  .icon--size-xsmall {
    width: ${textSmall};
    height: ${textSmall};
  }

  .dynamic-widget-inline-controls {
    max-height: 4.5rem;
    background-color: rgba(${colorMainRgb}, 0.5);
    border-radius: ${btnBorderRadius};
  }
  .dynamic-widget-inline-controls__network-picker,
  .account-control__container {
    border-radius: ${btnBorderRadius};
    color: rgba(${colorAccentRgb}, 0.75);
    gap: ${textXtraSmall};
    font-size: ${textMedium};
    transition: all 0.2s;
  }
  .dynamic-widget-inline-controls__network-picker {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  .account-control__container {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
  .account-control__container svg {
    color: rgba(${colorAccentRgb}, 0.75) !important;
  }
  .dynamic-widget-inline-controls__network-picker > .icon--size-small,
  .account-control__container > .icon--size-small {
    height: calc(${textMedium} * 1.25);
    width: calc(${textMedium} * 1.25);
  }
  .dynamic-widget-inline-controls__network-picker:hover,
  .account-control__container:hover { 
    background-color: rgba(${colorMainRgb}, 0.5);
    filter: opacity(0.85);
  }
  .dynamic-widget-modal {
    max-height: ${modalHeight};
    width: calc(${modalWidth} * 0.75);
  }
  .dynamic-widget-card,
  .widget-portal__container {
    background-image: linear-gradient(to bottom, rgba(${colorDarkRgb}, 0.75), rgba(${colorDarkRgb}, 1));
    border: none;
    border-top: 1px solid rgba(${colorAccentRgb}, 0.5);
    border-bottom: 1px solid rgba(${colorAccentRgb}, 0.5);
    border-radius: ${boxBorderRadius};
  }
  .status-dot, 
  .network__status-icon {
    width: 0.6rem;
    height: 0.6rem;
  }
  .dynamic-widget-header__icon-container{
    height: 6.5rem;
    width: 6.5rem;
    margin-bottom: 1rem;
  }
  .dynamic-widget-header__network-picker.evm-network-control__container {
    height: 3rem;
  }
  .dynamic-widget-header__balance {
    margin-bottom: 0;
    font-size: ${textMedium};
  }
  .non-widget-network-picker .evm-network-control__container--error {
    background-color: rgba(${colorDarkRgb}, 0.75);
    border: 1px solid rgba(${colorErrorRgb}, 0.75);
  }
  .single-wallet-buttons .button--primary {
    background-color: rgba(${colorMainRgb}, 0.5);
    border: none;
    border-radius: ${btnBorderRadius};
  }
  .action-list__container {
    background-color: rgba(${colorMainRgb}, 0.85);
    backdrop-filter: blur(10px);
    border-radius: ${btnBorderRadius};
  }
  .network .network__title-icon {
    width: ${textMedium};
    height: ${textMedium};
  }
  .dynamic-widget-inline-controls__network-picker-list {
    top: 3rem;
  }
  .network-not-supported__continue {
    background-color: rgba(${colorMainRgb}, 0.5);
    border-radius: ${btnBorderRadius};
    border: none;
  }
  .network-not-supported__network-container > img {
    height: 6.5rem !important;
    width: 6.5rem !important;
  }
  .evm-network-control__container--error {
    color: rgb(${colorErrorRgb});
    background-color: rgba(${colorErrorRgb}, 0.15);
    backdrop-filter: blur(15px);
  }
  .network-not-supported__log-out {
    font-size: ${textSmall};
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
