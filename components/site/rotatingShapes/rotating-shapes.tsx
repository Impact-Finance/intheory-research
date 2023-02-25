import Image, { StaticImageData } from 'next/image';

import styles from './rotating-shapes.module.scss';

interface RotatingShapesProps {
  shapes: StaticImageData[];
}

const RotatingShapes = ({ shapes }: RotatingShapesProps) => {
  return (
    <>
      {shapes.map((shape, i) => (
        <div
          className={styles.shapeContainer}
          key={i}>
          <Image
            className={styles.shape}
            src={shape}
            alt="rotating shape"
            fill
            sizes="10vw"
          />
        </div>
      ))}
    </>
  );
};

export default RotatingShapes;
