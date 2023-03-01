import { Dispatch, SetStateAction, useState, useEffect } from 'react';

import { ImagePropertyObject } from './image-generator';
import styles from './image-options.module.scss';

interface ImageOptionsProps {
  setImageProperties: Dispatch<SetStateAction<ImagePropertyObject>>;
}

const ImageOptions = ({ setImageProperties }: ImageOptionsProps) => {
  const [orientation, setOrientation] = useState('portrait');
  const [imageDimensions, setImageDimensions] = useState<number[]>([512, 896]);
  const [imageStyle, setImageStyle] = useState('realistic');

  useEffect(() => {
    setImageProperties({ dimensions: imageDimensions, style: imageStyle });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageDimensions, imageStyle]);

  return (
    <>
      <h5 className={styles.header}>
        Support this research by generating and purchasing a project-inspired
        artwork
      </h5>
      <div className={styles.orientation}>
        <p>image orientation</p>
        <div className={styles.btns}>
          <button
            className={orientation === 'portrait' ? styles.active : ''}
            onClick={() => {
              setImageDimensions([512, 896]);
              setOrientation('portrait');
            }}>
            Portrait
          </button>
          <button
            className={orientation === 'landscape' ? styles.active : ''}
            onClick={() => {
              setImageDimensions([896, 512]);
              setOrientation('landscape');
            }}>
            Landscape
          </button>
          <button
            className={orientation === 'square' ? styles.active : ''}
            onClick={() => {
              setImageDimensions([896, 896]);
              setOrientation('square');
            }}>
            Square
          </button>
        </div>
      </div>
      <div className={styles.imageStyle}>
        <p>image style</p>
        <div className={styles.btns}>
          <button
            className={imageStyle === 'realistic' ? styles.active : ''}
            onClick={() => {
              setImageStyle('realistic');
            }}>
            Realistic
          </button>
          <button
            className={imageStyle === 'abstract' ? styles.active : ''}
            onClick={() => {
              setImageStyle('abstract');
            }}>
            Abstract
          </button>
          <button
            className={imageStyle === 'surreal' ? styles.active : ''}
            onClick={() => {
              setImageStyle('surreal');
            }}>
            Surreal
          </button>
          <button
            className={imageStyle === 'anime' ? styles.active : ''}
            onClick={() => {
              setImageStyle('anime');
            }}>
            Anime
          </button>
          <button
            className={imageStyle === 'psychedelic' ? styles.active : ''}
            onClick={() => {
              setImageStyle('psychedelic');
            }}>
            Psychedelic
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageOptions;
