import { Container, Row, Col } from 'react-bootstrap';

import styles from './Forecast.module.css';
import '../../server/firebase';
import UpcomingDaysForecast from '../UpcomingDaysForecast';

import CurrentDay from '../CurrentDay';
import IconBui from '../icons/IconBui';
import IconDoAm from '../icons/IconDoAm';
import IconWind from '../icons/IconWind';
import IconUV from '../icons/IconUV';

import '../../server/firebase';
import { getDatabase, ref, child, get } from 'firebase/database';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Forecast = ({ currentDay }) => {
    const [getWeekListDay, setGetWeekListDay] = useState([]);

    const weekListDay = [
        {
            name: 'Bụi PM10',
            value: getWeekListDay?.bui_p10,
            unit: <>μg/m3</>,
            icon: <IconBui />,
            path: 'bui_pm10',
        },
        {
            name: 'Bụi PM25',
            value: getWeekListDay?.bui_p25,
            unit: <>μg/m3</>,
            path: 'bui_pm25',
            icon: <IconBui className={styles.iconWind} />,
        },
        {
            name: 'Gió',
            value: getWeekListDay?.toc_do_gio,
            unit: <>m/s</>,
            icon: <IconWind />,
            path: 'gio',
        },
        {
            name: ' Cảm biến mưa',
            value: getWeekListDay?.Mua === 1 ? 'Có mưa' : 'Không mưa',
            unit: <></>,
            icon: <IconDoAm />,
            path: 'mua',
        },
        {
            name: 'UV',
            value: getWeekListDay?.UV,
            unit: <>mW/cm2</>,
            path: 'uv',
            icon: <IconUV />,
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
                                    <Link to={item.path}>
                                        <UpcomingDaysForecast data={item} />
                                    </Link>
                                </Col>
                            ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Forecast;
