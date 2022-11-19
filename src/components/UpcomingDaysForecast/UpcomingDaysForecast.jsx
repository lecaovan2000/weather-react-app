import React from 'react';

import styles from './UpcomingDaysForecast.module.css';
import UpcomingDaysForecastItem from '../UpcomingDaysForecastItem';

const UpcomingDaysForecast = () => {
    const weekListDay = [
        { name: 'Mon', value: '75', unit: <>&deg;C</> },
        { name: 'Tue', value: '75', unit: <>&deg;C</> },
        { name: 'Wed', value: '75', unit: <>&deg;C</> },
        { name: 'Thu', value: '75', unit: <>&deg;C</> },
        { name: 'Fri', value: '75', unit: <>&deg;C</> },
    ];
    return (
        <ul className={`${styles.weekList} d-flex justify-content-between p-0`}>
            {weekListDay.map(item => (
                <UpcomingDaysForecastItem {...item} key={item.name} />
            ))}
        </ul>
    );
};

export default UpcomingDaysForecast;
