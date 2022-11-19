import React from 'react';

import locationIcon from './assets/location-pin.png';
import styles from './CurrentDay.module.css';

const CurrentDay = () => (
    <div className="d-flex">
        <div className={styles.img}></div>
        <div className={styles.gradient}></div>
        <div className={`${styles.cardInner} d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}>
            <div>
                <h2 className="font-weight-bold mb-1"> Ho Chi Minh</h2>
            </div>
            <div>
                <h2 className="font-weight-bold mb-1">
                    <span>100</span>&deg;C
                </h2>
            </div>
        </div>
    </div>
);

export default CurrentDay;
