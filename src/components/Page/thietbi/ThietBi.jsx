import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './style.module.css';
import CurrentDay from '../../CurrentDay';
import img1 from './img1.jpg';

const ThietBi = () => {
    return (
        <Container className={styles.box}>
            <Row>
                <Col className={styles.customText}>
                    - Cảm biến nhiệt độ độ ẩm DHT22: DHT22 đang đóng một vai trò quan trọng trong môi trường của chúng
                    ta để đo nhiệt độ và độ ẩm. Chi phí thấp, dễ sử dụng một cảm biến nhỏ. Cảm biến này được sử dụng tại
                    các trạm thời tiết khác nhau để đo nhiệt độ và tỷ lệ độ ẩm trong không khí, theo cách này, chúng cho
                    biết về nhiệt độ hoặc dự đoán mưa
                    <div style={{ width: '100%', margin: 'auto', textAlign: 'center' }}>
                        <img style={{ width: '300px' }} src={img1} alt="#" />
                    </div>
                    - Cảm biến bụi laser SDS001: Cảm biến bụi quang học này có thể đo chất lượng không khí rất chính xác
                    bằng cách đo các hạt không khí hoặc bụi dựa trên phát hiện laser, có thể nhận được nồng độ hạt trong
                    khoảng từ 0,3 đến 10um trong không khí, nó kết nối với đầu ra kỹ thuật số và quạt tích hợp là ổn
                    định và đáng tin cậy. Cảm biến này được cung cấp cùng với cáp đi kèm và bộ chuyển đổi USB sang nối
                    tiếp để kết nối cảm biến với máy tính nếu cần. Hình ảnh:
                </Col>
                {/* <Col xs={12} md={4}>
                    <div className={styles.card}>
                        <CurrentDay />
                    </div>
                </Col>
                <Col xs={12} md={8} className="d-flex flex-column justify-content-between">
                    <h1> Trang page Thông tin thiết bị</h1>
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
                </Col> */}
            </Row>
        </Container>
    );
};

export default ThietBi;
