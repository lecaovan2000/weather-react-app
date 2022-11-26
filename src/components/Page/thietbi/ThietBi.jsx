import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './style.module.css';
import CurrentDay from '../../CurrentDay';

const ThietBi = () => {
    return (
        <Container className={styles.box}>
            <Row>
                <Col xs={12} md={4}>
                    <div className={styles.card}>
                        <CurrentDay />
                    </div>
                </Col>
                <Col xs={12} md={8} className="d-flex flex-column justify-content-between">
                    <h1> Trang page Thông tin thiết bị</h1>
                    {/* <Row md={3} xs={2}>
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
            </Row> */}
                </Col>
            </Row>
        </Container>
    );
};

export default ThietBi;
