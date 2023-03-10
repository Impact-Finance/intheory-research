import { useState } from 'react';

import ImageGenerator from './image-generator';
import { ResearchProject, ImagePropertyObject } from '@/app';
import ImageOptions from './image-options';
import SubmitFunding from './submit-funding';
import styles from './funding-main.module.scss';

interface FundingMainProps {
  project: ResearchProject;
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
      <div className={styles.leftPanel}>
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
            setImageRequested={setImageRequested}
            setImageGenerated={setImageGenerated}
            setImageUrl={setImageUrl}
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
    </section>
  );
};

export default FundingMain;
