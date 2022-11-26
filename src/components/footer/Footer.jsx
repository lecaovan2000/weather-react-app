import { Container, Row, Col } from 'react-bootstrap';
import styles from './footer.module.css';
import logoIuh from '../../logo-iuh.jpg';

const Footer = () => {
    return (
        <Container className={styles.box}>
            <Row>
                <Col md={6} className={styles.content} style={{ alignItems: 'center', paddingTop: '25px' }}>
                    <span>
                        <img style={{ width: '200px' }} src={logoIuh} alt="#" />
                    </span>
                    <span>
                        <p style={{ paddingTop: '10px' }}>Địa chỉ liên hệ: 12 Nguyễn Văn Bảo, P4 Gò Vấp, TP HCM </p>
                    </span>
                    <span>
                        <p>Điện thoại: 0965 65 65 54 </p>
                    </span>
                    <span>
                        <p>Email: thanhhunggit00@gmail.com </p>
                    </span>
                </Col>
                <Col md={3} className={styles.content} style={{ textAlign: 'center', alignItems: 'center' }}>
                    {' '}
                    <p>Trang chủ</p>
                    <p>Giới thiệu</p>
                    <p>Mô hình</p>
                    <p>Thiết bị</p>
                    <p>Liệt kê</p>
                </Col>
                <Col md={3} className={styles.content} style={{ textAlign: 'center', alignItems: 'center' }}>
                    <p>
                        <a style={{ color: '#fff' }} href="/">
                            Zalo
                        </a>
                    </p>
                    <p>
                        <a style={{ color: '#fff' }} href="https://www.facebook.com/profile.php?id=100076120746148">
                            Facebook
                        </a>
                    </p>

                    <p>
                        <a style={{ color: '#fff', right: '0' }} href="/">
                            Instagram
                        </a>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
