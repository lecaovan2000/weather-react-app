import React from 'react';

import styles from './UpcomingDaysForecastItem.module.css';

const UpcomingDaysForecastItem = ({ name, value, unit }) => (
    <li className={`${styles.weekday} d-flex flex-column justify-content-center align-items-center p-2`}>
        <span className="mb-2">{name}</span>
        <span className="mb-2">{value}</span>
        <span className="mb-2">{unit}</span>
    </li>
);

export default UpcomingDaysForecastItem;
