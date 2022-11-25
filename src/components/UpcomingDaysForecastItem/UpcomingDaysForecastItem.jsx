import React from 'react';

import styles from './UpcomingDaysForecastItem.module.css';

const UpcomingDaysForecastItem = ({ weekListDay }) => (
    <div className={`${styles.weekday} d-flex flex-column justify-content-center align-items-center p-2`}>
        <span className="mb-2">{weekListDay.name || '...'}</span>
        <span className="mb-2">{weekListDay.value || '...'}</span>
        {/* <span className="mb-2">{weekListDay?.unit || '...'}</span> */}
    </div>
);

export default UpcomingDaysForecastItem;
