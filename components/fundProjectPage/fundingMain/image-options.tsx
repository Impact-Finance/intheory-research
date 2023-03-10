import { Dispatch, SetStateAction, useState, useEffect } from 'react';

import { ImagePropertyObject } from '@/app';
import styles from './image-options.module.scss';

interface ImageOptionsProps {
  setImageProperties: Dispatch<SetStateAction<ImagePropertyObject>>;
}

const ImageOptions = ({ setImageProperties }: ImageOptionsProps) => {
  const [imageColor, setImageColor] = useState(
    'bright beautiful vibrant colors'
  );
  const [imageStyle, setImageStyle] = useState('hyper-realistic photograph');

  useEffect(() => {
    setImageProperties({ colorPalette: imageColor, style: imageStyle });
  }, [imageColor, imageStyle, setImageProperties]);

  return (
    <>
      <h5 className={styles.header}>
        Support this research by generating and purchasing a project-inspired
        artwork
      </h5>
      <div className={styles.imageStyle}>
        <p>image style</p>
        <div className={styles.btns}>
          <button
            className={
              imageStyle === 'hyper-realistic photograph' ? styles.active : ''
            }
            onClick={() => {
              setImageStyle('hyper-realistic photograph');
            }}>
            Realistic
          </button>
          <button
            className={
              imageStyle === 'abstract expressionist modern geometric'
                ? styles.active
                : ''
            }
            onClick={() => {
              setImageStyle('abstract expressionist modern geometric');
            }}>
            Abstract
          </button>
          <button
            className={
              imageStyle === 'surreal salvador dali' ? styles.active : ''
            }
            onClick={() => {
              setImageStyle('surreal salvador dali');
            }}>
            Surreal
          </button>
          <button
            className={imageStyle === 'anime illustrated' ? styles.active : ''}
            onClick={() => {
              setImageStyle('anime illustrated');
            }}>
            Anime
          </button>
          <button
            className={imageStyle === 'isometric 3d model' ? styles.active : ''}
            onClick={() => {
              setImageStyle('isometric 3d model');
            }}>
            Isometric
          </button>
          <button
            className={
              imageStyle === 'psychedelic trippy spiritual fibonacci'
                ? styles.active
                : ''
            }
            onClick={() => {
              setImageStyle('psychedelic trippy spiritual fibonacci');
            }}>
            Psychedelic
          </button>
          <button
            className={
              imageStyle === 'impressionist claude monet van gogh'
                ? styles.active
                : ''
            }
            onClick={() => {
              setImageStyle('impressionist claude monet van gogh');
            }}>
            Impressionist
          </button>
        </div>
      </div>
      <div className={styles.colors}>
        <p>image color palette</p>
        <div className={styles.btns}>
          <button
            className={
              imageColor === 'bright beautiful vibrant colors'
                ? styles.active
                : ''
            }
            onClick={() => {
              setImageColor('bright beautiful vibrant colors');
            }}>
            Vibrant
          </button>
          <button
            className={
              imageColor === 'earth tone color palette' ? styles.active : ''
            }
            onClick={() => {
              setImageColor('earth tone color palette');
            }}>
            Earthy
          </button>
          <button
            className={
              imageColor === 'fire tone color palette' ? styles.active : ''
            }
            onClick={() => {
              setImageColor('fire tone color palette');
            }}>
            Fiery
          </button>
          <button
            className={
              imageColor === 'pastel color palette' ? styles.active : ''
            }
            onClick={() => {
              setImageColor('pastel color palette');
            }}>
            Pastel
          </button>
          <button
            className={
              imageColor === 'dark moody blue and purple color palette'
                ? styles.active
                : ''
            }
            onClick={() => {
              setImageColor('dark moody blue and purple color palette');
            }}>
            Moody
          </button>
          <button
            className={imageColor === 'rainbow' ? styles.active : ''}
            onClick={() => {
              setImageColor('rainbow');
            }}>
            Rainbow
          </button>
          <button
            className={
              imageColor === 'retro 80s neon vaporwave synthwave'
                ? styles.active
                : ''
            }
            onClick={() => {
              setImageColor('retro 80s neon vaporwave synthwave');
            }}>
            Neon
          </button>
          <button
            className={imageColor === 'grayscale' ? styles.active : ''}
            onClick={() => {
              setImageColor('grayscale');
            }}>
            Grayscale
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageOptions;
