import { useState, useEffect, useRef } from 'react';
import { useDynamicContext } from '@dynamic-labs/sdk-react';

import ImageGenerator from '../imageGenerator/image-generator';
import { ResearchProjectObject, ImagePropertyObject } from '@/app';
import ImageOptions from '../imageOptions/image-options';
import SubmitFunding from '../submitFunding/submit-funding';
import getStablecoinBalance from '@/utils/getStablecoinBalance';
import useWindowSize from '@/utils/useWindowSize';
import styles from './funding-main.module.scss';

interface FundingMainProps {
  project: ResearchProjectObject;
}

const FundingMain = ({ project }: FundingMainProps) => {
  const defaultImageProperties = {
    colorPalette: 'bright beautiful vibrant colors',
    style: 'hyper-realistic photograph',
    keywords:
      project.imageGenKeywords[
        Math.floor(Math.random() * project.imageGenKeywords.length)
      ],
  };

  const [imageProperties, setImageProperties] = useState<ImagePropertyObject>(
    defaultImageProperties
  );
  const [imageRequested, setImageRequested] = useState(false);
  const [imageGenerated, setImageGenerated] = useState(false);
  const [generationError, setGenerationError] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [connectedWallet, setConnectedWallet] = useState('');
  const [connectedNetwork, setConnectedNetwork] = useState<number>();
  const [walletBalance, setWalletBalance] = useState('--');
  const [txnSuccess, setTxnSuccess] = useState(false);
  const { primaryWallet, network } = useDynamicContext();
  const size = useWindowSize();
  const leftPanel = useRef<null | HTMLDivElement>(null);

  const refreshBalance = async () => {
    const newBalance = await getStablecoinBalance(network, primaryWallet!);
    setWalletBalance(newBalance);
  };

  useEffect(() => {
    const getBalance = async () => {
      const balance = await getStablecoinBalance(network, primaryWallet!);
      setWalletBalance(balance);
    };
    if (primaryWallet) {
      setConnectedWallet(primaryWallet.address);
      setConnectedNetwork(network);
      getBalance();
    }
    if (!primaryWallet) {
      setConnectedWallet('');
      setConnectedNetwork(undefined);
    }
  }, [primaryWallet, network, connectedWallet]);

  const handleScroll = () => {
    if (leftPanel.current && leftPanel) {
      leftPanel.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGeneration = async () => {
    setImageRequested(true);
    setGenerationError(false);

    const reqBody = {
      styles: imageProperties.style,
      colors: imageProperties.colorPalette,
      keywords:
        project.imageGenKeywords[
          Math.floor(Math.random() * project.imageGenKeywords.length)
        ],
    };

    const response = await fetch('/api/generate', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!data.imageUrl) {
      setGenerationError(true);
      setImageRequested(false);
    } else {
      setImageUrl(data.imageUrl);
    }
  };

  return (
    <section className={styles.section}>
      <div
        className={styles.leftPanel}
        ref={leftPanel}>
        {!imageGenerated && (
          <>
            <ImageOptions setImageProperties={setImageProperties} />
            <button
              className={styles.requestImage}
              onClick={handleGeneration}
              disabled={imageRequested}>
              Generate Image
            </button>
          </>
        )}
        {imageGenerated && (
          <SubmitFunding
            imageUrl={imageUrl}
            project={project}
            connectedWallet={connectedWallet}
            connectedNetwork={connectedNetwork}
            walletBalance={walletBalance}
            setImageRequested={setImageRequested}
            setImageGenerated={setImageGenerated}
            setImageUrl={setImageUrl}
            walletObject={primaryWallet}
            txnSuccess={txnSuccess}
            setTxnSuccess={setTxnSuccess}
            refreshBalance={refreshBalance}
          />
        )}
      </div>
      <div className={styles.imagePanel}>
        <ImageGenerator
          imageRequested={imageRequested}
          generationError={generationError}
          imageUrl={imageUrl}
          setImageGenerated={setImageGenerated}
        />
      </div>
      {size.width && size.width < 1000 && !txnSuccess && (
        <button
          className={styles.continueBtn}
          onClick={handleScroll}
          disabled={!imageGenerated}>
          Continue
        </button>
      )}
    </section>
  );
};

export default FundingMain;
