// import React from 'react';
import { useState, useEffect } from 'react';
import locationIcon from './assets/location-pin.png';
import styles from './CurrentDay.module.css';
import '../../server/firebase';
import { getDatabase, ref, child, get } from 'firebase/database';

const CurrentDay = () => {
    const [getData, setGetData] = useState([]);
    const dbRef = ref(getDatabase());
    const fetchData = async () => {
        try {
            const res = await get(child(dbRef, `data`));
            const dataRes = res.val();
            setGetData(dataRes);
            // console.log('hihi', getData);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, [getData]);
    return (
        <div className="d-flex">
            <div className={styles.img}></div>
            <div className={styles.gradient}></div>
            <div className={`${styles.cardInner} d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}>
                <div>
                    <h2 className="font-weight-bold mb-1">
                        <span>
                            <img width={20} src={locationIcon} />
                        </span>
                        Ho Chi Minh
                    </h2>
                </div>
                <div>
                    <h2 className="font-weight-bold mb-1">
                        <span>{getData.nhiet_do || '...'}</span>&deg;C
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default CurrentDay;
