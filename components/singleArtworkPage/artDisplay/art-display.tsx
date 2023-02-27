import styles from './art-display.module.scss';

interface ArtDisplayProps {
  artId: string | string[] | undefined;
}

const ArtDisplay = ({ artId }: ArtDisplayProps) => {
  return (
    <section>
      <h1>{artId}</h1>
    </section>
  );
};

export default ArtDisplay;
