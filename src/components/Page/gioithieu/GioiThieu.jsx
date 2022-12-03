import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './style.module.css';
import imgIot from './img.png';

const GioiThieu = () => {
    return (
        <Container className={styles.box}>
            <Row>
                <Col className={styles.customText}>
                    <p>
                        Mỗi ngày, có hơn hàng ngàn trạm trung tâm thời tiết trên toàn thế giới đang hoạt động, với nhiệm
                        vụ chính đó là thu thập những thông tin số liệu, những biến đổi của thời tiết. Từ đó đưa ra các
                        cảnh bào đến người dân để họ có thể tìm ra các giải pháp ứng phó với thời tiết.
                    </p>
                    <p>
                        Việt Nam được đánh giá là một trong những quốc gia chịu ảnh hưởng nặng nề của biến đổi khí hậu,
                        dự báo thiên tai ngày càng gia tăng và có xu hướng cực đoan hơn ở hầu hết các vùng miền trên cả
                        nước. Là đơn vị có chức năng quản lý nhà nước về khí tượng thủy văn, trong năm 2022, Tổng cục
                        chỉ đạo Trung tâm Dự báo KTTV quốc gia tăng cường theo dõi chặt chẽ tình hình thời tiết, thiên
                        tai trên phạm vi cả nước; cảnh báo, dự báo kịp thời các hiện tượng thời tiết nguy hiểm như bão,
                        áp thấp nhiệt đới, mưa lớn, lũ lớn, lũ quét, sạt lở đất, ... để thông tin kịp thời, phục vụ hiệu
                        quả công tác phòng, chống thiên tai.
                    </p>
                    <p>
                        Nắm bắt được tình hình trên, để cho sinh viên Đại học Công nghiệp thành phố Hồ Chí Minh có thể
                        nhận biết thời tiết và cũng như các số liệu về thời tiết xung quanh khu vực trường mình, em đã
                        quyết định xây dựng một trạm quan trắc đơn giản và đặt tại trường.
                    </p>
                    <p>
                        Mô hình sẽ bao gồm các con cảm biến như: cảm biến đo nhiệt độ, độ ẩm, cảm biến tốc độ gió, cảm
                        biến tia UV, cảm biến góc nghiêng. Các cảm biến này sẽ thực hiện nhiệm vụ thu thập các thông số
                        dữ liệu từ môi trường sau đó xử lý và gửi các giá trị thu thập được lên trên website. Từ đó
                        người dùng có thể biết được biến động của môi trường xung quanh mình diễn ra như thế nào.
                    </p>
                    <div style={{ width: '100%', margin: 'auto', textAlign: 'center' }}>
                        <img style={{ width: '400px', alignItems: 'center' }} src={imgIot} alt="#" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default GioiThieu;
