import Loader from '@/components/site/loader/loader';
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { ImagePropertyObject } from '@/app';
import imagePlaceholder from '@/public/icons/atom.svg';
import styles from './image-generator.module.scss';

interface ImageGeneratorProps {
  imageProperties: ImagePropertyObject;
  keywords: string[];
  imageRequested: boolean;
  setImageGenerated: Dispatch<SetStateAction<boolean>>;
  setImagePath: Dispatch<SetStateAction<string>>;
}

const ImageGenerator = ({
  imageProperties,
  keywords,
  imageRequested,
  setImageGenerated,
  setImagePath,
}: ImageGeneratorProps) => {
  const [success, setSuccess] = useState(false);
  const [imageData, setImageData] = useState('aperture.jpg');
  const [error, setError] = useState(false);

  useEffect(() => {
    setSuccess(false);
    if (imageRequested) {
      setTimeout(() => {
        setSuccess(true);
        setImageGenerated(true);
        setError(false);
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageRequested]);

  return (
    <div className={styles.container}>
      {!imageRequested && (
        <div className={styles.initial}>
          <Image
            src={imagePlaceholder}
            alt="image placeholder"
            height={150}
            width={150}
          />
          <p className={styles.preText}>
            Your masterpiece will be displayed here
          </p>
        </div>
      )}
      {imageRequested && !error && (
        <Loader
          text="generating"
          size="large"
        />
      )}
      {imageRequested && success && imageData && !error && (
        <Image
          className={styles.generatedImage}
          src={'/dummy_images/' + imageData}
          alt="generated image"
          fill
          sizes="50vw"
        />
      )}
      {imageRequested && error && (
        <div className={styles.error}>
          <h3>???</h3>
          <p>Uh oh... image generation failed!</p>
          <p>Please try again.</p>
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;
