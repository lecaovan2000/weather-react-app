import { Container, Row, Col } from 'react-bootstrap';

import styles from './Forecast.module.css';
import '../../server/firebase';
import UpcomingDaysForecast from '../UpcomingDaysForecast';

import CurrentDay from '../CurrentDay';
import IconBui from '../icons/IconBui';
import IconDoAm from '../icons/IconDoAm';
import IconWind from '../icons/IconWind';

import '../../server/firebase';
import { getDatabase, ref, child, get } from 'firebase/database';

import { useState, useEffect } from 'react';

const Forecast = ({ currentDay }) => {
    const [getWeekListDay, setGetWeekListDay] = useState([]);

    const weekListDay = [
        {
            name: 'Bụi PM10',
            value: getWeekListDay?.bui_p10,
            unit: <>%</>,
            icon: <IconBui />,
        },
        {
            name: 'Bụi PM25',
            value: getWeekListDay?.bui_p25,
            unit: <>%</>,
            icon: <IconBui className={styles.iconWind} />,
        },
        {
            name: 'Gió',
            value: getWeekListDay?.toc_do_gio,
            unit: <>%</>,
            icon: <IconDoAm />,
        },
        {
            name: 'Mưa',
            value: getWeekListDay?.Mua,
            unit: <>&deg;C</>,
            icon: <IconWind />,
        },
        {
            name: 'UV',
            value: getWeekListDay?.UV,
            unit: <>&deg;C</>,
        },
    ];
    useEffect(() => {
        const dbRef = ref(getDatabase());

        const fetchData = async () => {
            try {
                const res = await get(child(dbRef, `data`));
                setGetWeekListDay(res.val());
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
                </Col>
            </Row>
        </Container>
    );
};

export default Forecast;
