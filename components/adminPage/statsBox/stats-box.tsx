import { PlatformStatsObject } from '@/app';
import styles from './stats-box.module.scss';

interface StatsBoxProps {
  stats: PlatformStatsObject;
}

const StatsBox = ({ stats }: StatsBoxProps) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Admin Console</h2>
      <h3 className={styles.header}>Platform Statistics</h3>
      <div className={styles.statsBox}>
        <div className={styles.singleStat}>
          <p className={styles.statHead}>Active Projects</p>
          <p className={styles.statValue}>
            {stats.activeProjects ? stats.activeProjects : 0}
          </p>
        </div>
        <div className={styles.singleStat}>
          <p className={styles.statHead}>Inactive Projects</p>
          <p className={styles.statValue}>
            {stats.inactiveProjects ? stats.inactiveProjects : 0}
          </p>
        </div>
        <div className={styles.singleStat}>
          <p className={styles.statHead}>Total Artworks</p>
          <p className={styles.statValue}>
            {stats.numArtworks ? stats.numArtworks.toLocaleString('en-US') : 0}
          </p>
        </div>
        <div className={styles.singleStat}>
          <p className={styles.statHead}>Total Researchers</p>
          <p className={styles.statValue}>
            {stats.numResearchers ? stats.numResearchers : 0}
          </p>
        </div>
        <div className={styles.singleStat}>
          <p className={styles.statHead}>Total Funding</p>
          <p className={styles.statValue}>
            $
            {stats.platformTotalFunding
              ? stats.platformTotalFunding.toLocaleString('en-US')
              : 0}
          </p>
        </div>
        <div className={styles.singleStat}>
          <p className={styles.statHead}>Funding on Celo</p>
          <p className={styles.statValue}>
            $
            {stats.celoTotalFunding
              ? stats.celoTotalFunding.toLocaleString('en-US')
              : 0}
          </p>
        </div>
        <div className={styles.singleStat}>
          <p className={styles.statHead}>Funding on Polygon</p>
          <p className={styles.statValue}>
            $
            {stats.polygonTotalFunding
              ? stats.polygonTotalFunding.toLocaleString('en-US')
              : 0}
          </p>
        </div>
        <div className={styles.singleStat}>
          <p className={styles.statHead}>Fee Revenue (7%)</p>
          <p className={styles.statValue}>
            $
            {stats.platformTotalFunding
              ? (stats.platformTotalFunding * 0.07).toLocaleString('en-US')
              : 0}
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsBox;
