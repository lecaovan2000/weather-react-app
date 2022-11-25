import { Container, Row, Col } from 'react-bootstrap';

import styles from './Forecast.module.css';
import '../../server/firebase';
import CurrentDay from '../CurrentDay';
import UpcomingDaysForecast from '../UpcomingDaysForecast';

import IconNhietDo from '../icons/IconNhietDo';
import IconBui from '../icons/IconBui';
import IconDoAm from '../icons/IconDoAm';

import '../../server/firebase';
import { getDatabase, ref, child, get } from 'firebase/database';

import { useState, useEffect } from 'react';

const Forecast = () => {
    const [getWeekListDay, setGetWeekListDay] = useState([]);

    const weekListDay = [
        {
            name: getWeekListDay?.adc?.name,
            value: getWeekListDay?.adc?.value,
            unit: <>&deg;C</>,
        },
        {
            name: getWeekListDay?.bui_p10?.name,
            value: getWeekListDay?.bui_p10?.value,
            unit: <>%</>,
            icon: <IconBui />,
        },
        {
            name: getWeekListDay?.bui_p25?.name,
            value: getWeekListDay?.bui_p25?.value,
            unit: <>%</>,
            icon: <IconBui />,
        },
        {
            name: getWeekListDay?.do_am?.name,
            value: getWeekListDay?.do_am?.value,
            unit: <>%</>,
            icon: <IconDoAm />,
        },
        {
            name: getWeekListDay?.nhiet_do?.name,
            value: getWeekListDay?.nhiet_do?.value,
            unit: <>&deg;C</>,
            icon: <IconNhietDo />,
        },
        {
            name: getWeekListDay?.bui_p10?.name,
            value: getWeekListDay?.bui_p10?.value,
            unit: <>%</>,
            icon: <IconBui />,
        },
    ];
    useEffect(() => {
        const dbRef = ref(getDatabase());

        const fetchData = async () => {
            try {
                const res = await get(child(dbRef, `data`));
                setGetWeekListDay(res.val());
                console.log('hihihi', res.val());
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [getWeekListDay]);
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
                                weekListDay.length > 0 &&
                                weekListDay.map((item, index) => (
                                    <Col
                                        key={index}
                                        className={`${styles.content} d-flex flex-column justify-content-between`}
                                    >
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
