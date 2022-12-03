import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className={styles.box}>
            <div className={styles.container}>
                <Row>
                    <Col md={6} className={styles.content} style={{ alignItems: 'center', paddingTop: '25px' }}>
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
                        <p>
                            <Link to="/">Trang chủ</Link>
                        </p>
                        <p>
                            <Link to="gioithieu">Giới thiệu</Link>
                        </p>
                        <p>
                            <Link to="mohinh">Mô hình</Link>
                        </p>
                        <p>
                            <Link to="thietbi">Thiết bị</Link>
                        </p>
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
            </div>
        </div>
    );
};

export default Footer;
