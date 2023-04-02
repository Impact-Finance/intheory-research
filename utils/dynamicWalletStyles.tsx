// Styles for Dynamic wallet are also controlled by shadow-dom in _variables.scss

const colorMainRgb = '12, 41, 75';
const colorAccentRgb = '104, 234, 255';
const colorDarkRgb = '4, 12, 22';
const colorErrorRgb = '254, 0, 254';
const textLarge = '2.2rem';
const textMedium = '1.6rem';
const textSmall = '1.2rem';
const textXtraSmall = '1rem';
const btnBorderRadius = '0.8rem';
const boxBorderRadius = '1.8rem';
const modalWidth = '60rem';
const transition = 'transition: all 0.2s;';

const dynamicWalletStyles = `
  .typography {
    font-weight: 400;
  }

  .dynamic-connect-button {
    border-radius: ${btnBorderRadius};
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
  .typography--button-primary {
    color: rgb(${colorAccentRgb});
    ${transition};
  }
  .typography--title {
    color: rgb(${colorAccentRgb});
  }
  .dynamic-connect-button:hover > .typography--button-primary {
    color: rgba(${colorAccentRgb}, 0.75);
  }
  .dynamic-connect-button:hover::after {
    animation-play-state: paused;
  }

  .dynamic-auth-layout__container {
    border-top: 1px solid rgba(${colorAccentRgb}, 0.5);
    border-bottom: 1px solid rgba(${colorAccentRgb}, 0.5);
  }
  .vertical-accordion__container {
    background-image: linear-gradient(to bottom, rgba(${colorDarkRgb}, 0.75), rgba(${colorDarkRgb}, 1));
  }
  .wallet-list-item__tile {
    gap: ${textXtraSmall};
    border-top: 1px solid rgba(${colorAccentRgb}, 0);
    border-bottom: 1px solid rgba(${colorAccentRgb}, 0);
    ${transition}
  }
  .wallet-list-item__tile > img {
    width: ${textLarge} !important;
    height: ${textLarge} !important;
  }
  .wallet-list-item__tile:hover {
    border-top: 1px solid rgba(${colorAccentRgb}, 0.25);
    border-bottom: 1px solid rgba(${colorAccentRgb}, 0.25);
    background-color: rgba(${colorMainRgb}, 0.15);
  }
  .search__container {
    height: calc(${textLarge} * 1.8);
    padding: ${textSmall};
    border-radius: ${btnBorderRadius};
  }
  .search-icon__container {
    height: ${textLarge};
    width: ${textLarge};
  }
  .search__button--clear {
    font-size: ${textMedium};
  }
  .footer {
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
  }
  .footer-buttons-item__icon--left {
    margin-right: ${textXtraSmall};
  }
  .footer-buttons-item__icon--left img,
  .footer-buttons-item__icon--left svg {
    width: ${textLarge};
    height: ${textLarge};
  }
  .new-to-web3-buttons__container button {
    background-color: rgba(${colorMainRgb}, 0.5);
    color: rgb(${colorAccentRgb});
  }

  .badge__container {
    gap: 0.75rem;
    padding: 0.5rem 1rem;
    font-size: ${textMedium};
  }
  .badge__dot {
    height: 0.75rem;
    width: 0.75rem;
  }
  .search-instead__container > p {
    margin: 0.5rem;
  }

  .pending-signature__container .pending-signature__title {
    margin-bottom: ${textXtraSmall};
  }
  .pending-signature__container .pending-signature__copy,
  .qrcode-container__content,
  .pending-connect__container .pending-connect__title,
  .pending-connect__container .pending-connect__copy-text {
    line-height: calc(${textLarge} * 1.2);
    max-width: calc(${modalWidth} * 0.75);
  }
  .powered-by-dynamic__logo {
    max-width: 8rem;
    width: 8rem;
    height: 3rem;
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
    width: calc(${modalWidth} * 0.75);
  }
  .dynamic-widget-card,
  .widget-portal__container {
    background-image: linear-gradient(to bottom, rgba(${colorDarkRgb}, 0.75), rgba(${colorDarkRgb}, 1));
    border: none;
    border-top: 1px solid rgba(${colorAccentRgb}, 0.5);
    border-bottom: 1px solid rgba(${colorAccentRgb}, 0.5);
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
  .non-widget-network-picker .evm-network-control__container {
    background-color: rgba(${colorMainRgb}, 0.75);
    border: none;
    border-radius: ${btnBorderRadius};
  }
  .non-widget-network-picker .evm-network-control__container--error {
    background-color: rgba(${colorDarkRgb}, 0.75);
    border: 1px solid rgba(${colorErrorRgb}, 0.75);
    border-radius: ${btnBorderRadius};
    width: 7rem;
    height: 4rem;
  }
  .non-widget-network-picker .evm-network-control__container--error > .icon--size-small {
    width: 3.5rem;
    height: 3.5rem;
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
    min-width: 13rem;
    height: fit-content;
  }
  .network .network__title-icon {
    width: ${textMedium};
    height: ${textMedium};
  }
  .dynamic-widget-inline-controls__network-picker-list {
    top: 100%;
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
  .dynamic-widget-header__network-picker_container .evm-network-control__container {
    background-color: rgba(${colorMainRgb}, 0.75);
    backdrop-filter: blur(15px);
    border-radius: ${btnBorderRadius};
  }
  .evm-network-control__container--error {
    color: rgb(${colorErrorRgb});
    background-color: rgba(${colorErrorRgb}, 0.15);
    backdrop-filter: blur(15px);
    border-radius: ${btnBorderRadius};
    ${transition};
  }
  .evm-network-control__container--error:hover {
    cursor: pointer;
    background-color: rgba(${colorErrorRgb}, 0.15);
  }
  .network-not-supported__log-out {
    font-size: ${textSmall};
  }

  @media (max-width: 640px) {
    .dynamic-auth-layout__container {
      border-radius: ${boxBorderRadius};
    }
    .dynamic-auth-layout__modal {
      top: 10rem;
      bottom: unset;
    }
  }

  @media (max-width: 550px) {
    .action-list__container {
      background-image: linear-gradient(to bottom, rgba(${colorDarkRgb}, 0.75), rgba(${colorDarkRgb}, 1));
      border-top: 1px solid rgba(${colorAccentRgb}, 0.5);
    }
  }

  @media (pointer: coarse) {
    .dynamic-widget-inline-controls__network-picker-list {
      background-image: linear-gradient(to bottom, rgba(${colorDarkRgb}, 0.85), rgba(${colorDarkRgb}, 1));
      border-top: 1px solid rgba(${colorAccentRgb}, 0.5);
      border-bottom: 1px solid rgba(${colorAccentRgb}, 0.5);
      top: 80px;
    }
    .dynamic-widget-modal {
      top: 10rem;
      bottom: unset;
      border-radius: ${btnBorderRadius}
    }
    .dynamic-widget-card,
    .widget-portal__container {
      border-radius: ${btnBorderRadius}
    }
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
