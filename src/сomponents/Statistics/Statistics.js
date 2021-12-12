import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import StatisticsItem from './StatisticsItem';

const randomColor = () => {
  let random1 = Math.round(Math.random() * 255);
  let random2 = Math.round(Math.random() * 255);
  let random3 = Math.round(Math.random() * 255);
  return `rgb(${random1}, ${random2}, ${random3})`;
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.stat_list}>
        {stats.map((stat, i) => {
          let backgroundColor = randomColor();
          return (
            <StatisticsItem
              stat={stat}
              backgroundColor={backgroundColor}
              key={stat.id}
            />
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.any.isRequired),
};

Statistics.defaultProps = {
  title: '',
};

export default Statistics;
