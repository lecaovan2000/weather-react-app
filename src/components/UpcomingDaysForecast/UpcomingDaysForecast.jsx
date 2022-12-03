import React from 'react';

import styles from './UpcomingDaysForecast.module.css';
import UpcomingDaysForecastItem from '../UpcomingDaysForecastItem';

const UpcomingDaysForecast = ({ data }) => {
    return (
        <ul to className={`${styles.weekList} d-flex justify-content-between p-0`}>
            <UpcomingDaysForecastItem weekListDay={data} />
        </ul>
    );
};

export default UpcomingDaysForecast;
