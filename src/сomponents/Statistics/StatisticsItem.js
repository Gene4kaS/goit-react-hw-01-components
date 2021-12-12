import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const StatisticsItem = ({
  backgroundColor,
  stat: { id, label, percentage },
}) => {
  return (
    <li
      className={styles.item}
      style={{ backgroundColor: `${backgroundColor}` }}
      key={id}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticsItem.prototypes = {
  backgroundColor: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
StatisticsItem.defaultProps = {
  backgroundColor: '',
};

export default StatisticsItem;
