import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './style.module.css';
import bad from './3d.png';
import imgtt from './mohinhchinh.jpg';

const MoHinh = () => {
    return (
        <Container className={styles.box}>
            <Row>
                <Col className={styles.customText}>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div>
                            <h3>Mô hình 3D</h3>

                            <img style={{ width: '300px', padding: '10px 0px 10px 30px' }} src={bad} alt="#" />
                        </div>
                        <div>
                            <h3>Mô hình thực tế</h3>

                            <img style={{ width: '300px', padding: '10px 0px 10px 30px' }} src={imgtt} alt="#" />
                        </div>
                    </div>
                    <div>
                        <h2>Mô hình được thiết kế bao gồm hai các phần chính như:</h2>
                        <p>
                            - Hai cánh sẽ là vị trí để đặt hai cảm biến nhiệt độ, độ ẩm và cảm biến tia UV. Cùng với đó,
                            trên hai cánh tay của mô hình sẽ được tích hợp mỗi bên là một cảm biến mưa và một tấm pin
                            năng lượng mặt trời.
                        </p>{' '}
                        <p>- Phía trước của mô hình là vị trí để đặt cảm biến Bụi</p>
                        <p>- Phía trên đỉnh của mô hình là nơi đặt vị trí của cảm biến gió</p>
                        <p>- Phía sau của mô hình là phần trung tâm, nơi chứa các bộ điều khiển trung tâm</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default MoHinh;
