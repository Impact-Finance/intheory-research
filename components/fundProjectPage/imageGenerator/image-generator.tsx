import Loader from '@/components/site/loader/loader';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

import imagePlaceholder from '@/public/icons/atom.svg';
import styles from './image-generator.module.scss';

interface ImageGeneratorProps {
  imageRequested: boolean;
  generationError: boolean;
  imageUrl: string;
  setImageGenerated: Dispatch<SetStateAction<boolean>>;
}

const ImageGenerator = ({
  imageRequested,
  generationError,
  imageUrl,
  setImageGenerated,
}: ImageGeneratorProps) => {
  return (
    <div className={styles.container}>
      {!imageRequested && !generationError && (
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
      {imageRequested && !generationError && (
        <Loader
          text="generating"
          size="large"
        />
      )}
      {imageRequested && imageUrl && !generationError && (
        <Image
          className={styles.generatedImage}
          src={imageUrl}
          alt="generated image"
          fill
          sizes="60rem"
          onLoadingComplete={() => {
            setImageGenerated(true);
          }}
        />
      )}
      {generationError && (
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
