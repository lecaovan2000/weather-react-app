import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import styles from './Forecast.module.css';
import CurrentDay from '../CurrentDay';
import CurrentDayDescription from '../CurrentDayDescription';
import UpcomingDaysForecast from '../UpcomingDaysForecast';

const weekListDay = [
    { name: 'Mon', value: '75', unit: <>&deg;C</> },
    { name: 'Tue', value: '75', unit: <>&deg;C</> },
    { name: 'Wed', value: '75', unit: <>&deg;C</> },
    { name: 'Thu', value: '75', unit: <>&deg;C</> },
    { name: 'Fri', value: '75', unit: <>&deg;C</> },
];

const Forecast = () => (
    <Container className={styles.box}>
        <Row>
            <Col xs={12} md={4}>
                <div className={styles.card}>
                    <CurrentDay />
                </div>
            </Col>
            <Col xs={12} md={8} className="d-flex flex-column justify-content-between">
                <div>
                    <CurrentDayDescription />
                    <Row md={4} xs={3}>
                        {weekListDay.map((item, index) => (
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

export default Forecast;
