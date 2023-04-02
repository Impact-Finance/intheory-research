import { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadarController,
  LineElement,
  PointElement,
  RadialLinearScale,
  Filler,
} from 'chart.js';

import styles from './radar-chart.module.scss';

interface RadarChartProps {
  impacts: number[];
}

ChartJS.register(
  RadarController,
  LineElement,
  PointElement,
  RadialLinearScale,
  Filler
);

const RadarChart = ({ impacts }: RadarChartProps) => {
  const [impactArray, setImpactArray] = useState([0, 0, 0, 0, 0, 0]);

  const populateData = () => {
    const newValues = impacts;
    setImpactArray(newValues);
  };

  const impactData = {
    labels: ['SUS', 'GH', 'SOC', 'DIG', 'MAN', 'TRA'],
    datasets: [
      {
        data: impactArray,
        backgroundColor: 'rgba(254, 0, 254, 0.15)',
        borderColor: 'rgba(254, 0, 254, 0.75)',
        borderWidth: 1,
        spanGaps: true,
        pointRadius: 3,
      },
    ],
    color: '#68eaff',
  };

  const config = {
    scales: {
      r: {
        grid: {
          display: true,
          color: [
            'rgba(104, 234, 255, 0.6)',
            'rgba(104, 234, 255, 0.2)',
            'rgba(104, 234, 255, 0.28)',
            'rgba(104, 234, 255, 0.36)',
            'rgba(104, 234, 255, 0.44)',
            'rgba(104, 234, 255, 0.52)',
          ],
        },
        angleLines: {
          display: true,
          color: 'rgba(104, 234, 255, 0.3)',
        },
        pointLabels: {
          color: 'rgba(104, 234, 255, 1)',
          font: { family: "'Jura', sans-serif", size: 14 },
          padding: 14,
        },
        min: 0,
        max: 6,
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      <h3 className={styles.title}>Impact Map</h3>
      <Waypoint
        onEnter={populateData}
        bottomOffset="40%">
        <div>
          <Radar
            data={impactData}
            options={config}
          />
        </div>
      </Waypoint>
      <ul className={styles.legend}>
        <li className={styles.legendItem}>
          <span>SUS:</span> Sustainability
        </li>
        <li className={styles.legendItem}>
          <span>GH:</span> Global Health
        </li>
        <li className={styles.legendItem}>
          <span>SOC:</span> Social Science
        </li>
        <li className={styles.legendItem}>
          <span>DIG:</span> Digital Technology
        </li>
        <li className={styles.legendItem}>
          <span>MAN:</span> Manufacturing
        </li>
        <li className={styles.legendItem}>
          <span>TRA:</span> Transportation
        </li>
      </ul>
    </>
  );
};

export default RadarChart;
