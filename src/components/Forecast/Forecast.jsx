import { Container, Row, Col } from 'react-bootstrap';

import styles from './Forecast.module.css';
import '../../server/firebase';
import CurrentDay from '../CurrentDay';
import CurrentDayDescription from '../CurrentDayDescription';
import UpcomingDaysForecast from '../UpcomingDaysForecast';

import '../../server/firebase';
import { getDatabase, ref, child, get } from 'firebase/database';

import { useState, useEffect } from 'react';

const weekListDay = [
    { name: 'Mon', value: '75', unit: <>&deg;C</> },
    { name: 'Tue', value: '75', unit: <>&deg;C</> },
    { name: 'Wed', value: '75', unit: <>&deg;C</> },
    { name: 'Thu', value: '75', unit: <>&deg;C</> },
    { name: 'Fri', value: '75', unit: <>&deg;C</> },
    { name: 'Frifdf', value: '75', unit: <>&deg;C</> },
];

const Forecast = () => {
    // const [weekListDay, setWeekListDay] = useState([]);
    // const dbRef = ref(getDatabase());
    // const fetchData = async () => {
    //     try {
    //         const res = await get(child(dbRef, `/`));
    //         const dataRes = res.val();
    //         setWeekListDay(dataRes);
    //         console.log('hihihi', weekListDay);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    // useEffect(() => {
    //     fetchData();
    // }, [weekListDay]);
    return (
        <Container className={styles.box}>
            <Row>
                <Col xs={12} md={4}>
                    <div className={styles.card}>
                        <CurrentDay />
                    </div>
                </Col>
                <Col xs={12} md={8} className="d-flex flex-column justify-content-between">
                    <div>
                        {/* <CurrentDayDescription /> */}
                        <Row md={3} xs={2}>
                            {weekListDay &&
                                weekListDay.map &&
                                weekListDay.map((item, index) => (
                                    <Col key={index} className="d-flex flex-column justify-content-between">
                                        <UpcomingDaysForecast data={item} />
                                    </Col>
                                ))}
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Forecast;
