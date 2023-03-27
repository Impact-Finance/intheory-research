import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import windowIcon from '@/public/icons/window.svg';
import Loader from '@/components/site/loader/loader';
import { CommunityArtworkObject } from '@/app';
import styles from './art-display.module.scss';

interface ArtDisplayProps {
  artwork: CommunityArtworkObject;
}

const ArtDisplay = ({ artwork }: ArtDisplayProps) => {
  const [txnUrl, setTxnUrl] = useState('');

  useEffect(() => {
    if (artwork.network === 'polygon') {
      setTxnUrl('https://polygonscan.com/tx/' + artwork.txnHash);
    }
    if (artwork.network === 'mumbai') {
      setTxnUrl('https://mumbai.polygonscan.com/tx/' + artwork.txnHash);
    }
    if (artwork.network === 'celo') {
      setTxnUrl('https://explorer.celo.org/mainnet/tx/' + artwork.txnHash);
    }
    if (artwork.network === 'alfajores') {
      setTxnUrl('https://explorer.celo.org/alfajores/tx/' + artwork.txnHash);
    }
  }, [artwork.network, artwork.txnHash]);

  return (
    <section className={styles.section}>
      {artwork && (
        <div className={styles.mainContent}>
          <div className={styles.leftContent}>
            <div className={styles.loaderBox}>
              <Loader
                text="loading"
                size="large"
              />
            </div>
            <div className={styles.imageBox}>
              <Image
                className={styles.image}
                src={`https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_BUCKET_REGION}.amazonaws.com/communityArtworks/${artwork._id}.jpg`}
                alt="artwork"
                fill
                sizes="65rem"
              />
            </div>
          </div>
          <div className={styles.sidebar}>
            <p>
              <span>Research Funded </span>
              {artwork.associatedProjectName}
            </p>
            <p>
              <span>Created by </span>
              {artwork.funder.slice(0, 5)}...
              {artwork.funder.slice(-8)}
            </p>
            <p>
              <span>Funding amount </span>
              {artwork.fundingAmount}
              <span> USDC</span>
            </p>
            <p>
              <span>Transaction Hash </span>
              <Link
                className={styles.inlineLink}
                href={txnUrl}
                target="_blank"
                rel="noreferrer">
                {artwork.txnHash.slice(0, 5)}...
                {artwork.txnHash.slice(-8)}
                <Image
                  className={styles.icon}
                  src={windowIcon}
                  alt=""
                  width={22}
                  height={22}
                />
              </Link>
            </p>
            <div className={styles.links}>
              <Link
                className={styles.link}
                href={
                  'https://ipfs.io/ipfs/' +
                  artwork.metadataCid +
                  '/metadata.json'
                }
                target="_blank"
                rel="noreferrer">
                View Metadata
              </Link>
              <Link
                className={styles.link}
                href={'/projects/' + artwork.associatedProjectId}>
                View Research
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ArtDisplay;
