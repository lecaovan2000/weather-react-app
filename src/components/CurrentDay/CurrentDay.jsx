import { useState, useEffect } from 'react';
import locationIcon from './assets/location-pin.png';
import styles from './CurrentDay.module.css';
import '../../server/firebase';
import { getDatabase, ref, child, get } from 'firebase/database';

const CurrentDay = () => {
    const [getData, setGetData] = useState([]);
    const [getToday, setGetToday] = useState('');

    useEffect(() => {
        const dbRef = ref(getDatabase());
        const fetchData = async () => {
            try {
                const res = await get(child(dbRef, `/`));
                setGetData(res.val());
            } catch (error) {
                console.log('err', error);
            }
        };
        fetchData();
    }, [getData]);
    useEffect(() => {
        function newToday() {
            const today = new Date();
            let year = today.getFullYear();
            let month = today.getMonth() + 1;
            let day = today.getDate();
            let dayOfWeek = today.getDay();

            const dayName = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

            setGetToday(dayName[dayOfWeek] + ' ngày ' + day + '/' + month + '/' + year);
        }
        newToday();
    }, [getToday]);

    return (
        <div className="d-flex">
            <div className={styles.img}></div>
            <div className={styles.gradient}></div>
            <div className={`${styles.cardInner} d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}>
                <div>
                    <h2 className="font-weight-bold mb-1">
                        <span>
                            <img className={styles.customImg} src={locationIcon} />
                        </span>
                        {''}
                        <span> Ho Chi Minh</span>
                    </h2>
                    <h4>{getToday}</h4>
                </div>
                <div className={styles.remind}>khu vực nhắc nhỡ</div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <span>
                        <h2 className="font-weight-bold">Nhiệt độ</h2>
                        <h2 className="font-weight-bold mb-1 ">
                            <span>{getData.data?.nhiet_do?.value || '...'}</span> &deg;C
                        </h2>
                    </span>
                    <span>
                        <h2 className="font-weight-bold">Độ ẩm</h2>
                        <h2 className="font-weight-bold mb-1 ">
                            <span>{getData.data?.do_am?.value || '...'}</span> %
                        </h2>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CurrentDay;
