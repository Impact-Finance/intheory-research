import { useState } from 'react';

import ImageGenerator, { ImagePropertyObject } from './image-generator';
import { Project } from '@/content/DUMMY_PROJECTS';
import ImageOptions from './image-options';
import SubmitFunding from './submit-funding';
import styles from './funding-main.module.scss';

interface FundingMainProps {
  project: Project;
}

const FundingMain = ({ project }: FundingMainProps) => {
  const defaultImageProperties = {
    dimensions: [512, 896],
    style: 'realistic',
  };

  const [imageProperties, setImageProperties] = useState<ImagePropertyObject>(
    defaultImageProperties
  );
  const [imageRequested, setImageRequested] = useState(false);
  const [imageGenerated, setImageGenerated] = useState(false);
  const [imagePath, setImagePath] = useState('');

  return (
    <section className={styles.section}>
      <div className={styles.leftPanel}>
        {!imageGenerated && (
          <>
            <ImageOptions setImageProperties={setImageProperties} />
            <button
              className={styles.requestImage}
              onClick={() => {
                setImageRequested(true);
              }}
              disabled={imageRequested}>
              Generate Image
            </button>
          </>
        )}
        {imageGenerated && (
          <SubmitFunding
            imagePath={imagePath}
            contractAddress={project.contractAddress}
            setImageRequested={setImageRequested}
            setImageGenerated={setImageGenerated}
            setImagePath={setImagePath}
          />
        )}
      </div>
      <div className={styles.imagePanel}>
        <ImageGenerator
          setImageGenerated={setImageGenerated}
          imageProperties={imageProperties}
          keywords={project.imageKeywords}
          imageRequested={imageRequested}
          setImagePath={setImagePath}
        />
      </div>
    </section>
  );
};

export default FundingMain;
