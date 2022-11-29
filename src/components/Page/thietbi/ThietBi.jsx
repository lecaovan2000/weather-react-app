import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './style.module.css';
import CurrentDay from '../../CurrentDay';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.png';
import img5 from './img5.png';

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
                    tiếp để kết nối cảm biến với máy tính nếu cần.
                    <div style={{ width: '100%', margin: 'auto', textAlign: 'center' }}>
                        <img style={{ width: '300px' }} src={img2} alt="#" />
                    </div>
                    <p>
                        Cảm biến tốc độ gió: Cảm biến tốc độ gió bao gồm một vỏ, bộ nhận gió 3 cánh và 1 cáp đầu ra 4
                        dây, được làm bằng vật liệu hợp kim nhôm. Toàn bộ cảm biến có độ bền cao, chống chịu thời tiết
                        tốt, chống ăn mòn và khả năng chịu nước, sẽ được để đảm bảo sử dụng lâu dài.
                    </p>
                    <p>
                        Cảm biến tốc độ gió được sử dụng rộng rãi trong máy móc kỹ thuật (cần trục, cần cẩu bánh xích,
                        cần cẩu tháp, v.v.), đường sắt, cảng, bến cảng, nhà máy điện, khí tượng, cáp treo, môi trường,
                        nhà kính, chăn nuôi, điều hòa không khí, nông nghiệp…
                    </p>
                    <p>
                        Nguyên lý hoạt động: Cảm biến tốc độ gió là một thiết bị vật lý dùng để đo tốc độ gió. Gió do
                        luồng không khí tạo ra sẽ thúc đẩy ba cốc gió trên cùng quay và trục trung tâm điều khiển tích
                        hợp phần tử cảm biến bên trong để tạo tín hiệu đầu ra, được sử dụng để tính toán tốc độ gió.
                    </p>
                    <div style={{ width: '100%', margin: 'auto', textAlign: 'center' }}>
                        <img style={{ width: '300px' }} src={img3} alt="#" />
                    </div>
                    <p>
                        Cảm biến tia UV ML8511: Cảm biến tia UV ML8511 Ultraviolet Light Sensor sử dụng ic MP8511 UV
                        (tia cực tím) dùng để phát hiện và nghiên cứu chỉ số tia UV trong môi trường.
                    </p>
                    <p>
                        Cảm biến tia UV ML8511 phát hiện ánh sáng 280-390nm hiệu quả nhất (vùng cực tím). Điều này được
                        phân loại như là một phần của UVB (tia đốt) phổ và hầu hết các UVA (tanning tia) quang phổ. Cảm
                        biến cho đầu ra giá trị điện áp analog được quan hệ tuyến tính với cường độ đo UV (mW / cm2).
                        Nếu vi điều khiển của bạn có thể làm tương tự với chuyển đổi tín hiệu số thì bạn có thể phát
                        hiện mức UV.
                    </p>
                    <p>
                        Theo các chuyên gia, tia UV mạnh nhất vào mùa hè (từ tháng 5 - 8), yếu hơn vào mùa xuân, thu và
                        yếu nhất vào mùa đông. Nhiều người nghĩ vào mùa mưa, khi trời không có nắng hoặc nhiều mây là
                        không có tia UV nhưng thực tế không phải, lúc nào cũng có chỉ là cường độ khác nhau. Cường độ
                        mạnh nhất trong ngày là từ 10 giờ đến tầm 15 giờ.
                    </p>
                    <div style={{ width: '100%', margin: 'auto', textAlign: 'center' }}>
                        <img style={{ width: '300px' }} src={img4} alt="#" />
                    </div>
                    <p>
                        ESP32: là một hệ thống vi điều khiển trên chip (SoC) chi phí thấp của Espressif Systems, nhà
                        phát triển của ESP8266 SoC nổi tiếng. Nó là sự kế thừa của SoC ESP8266 và có cả hai biến thể lõi
                        đơn và lõi kép của Bộ vi xử lý 32-bit Xtensa LX6 của Tensilica với Wi-Fi và Bluetooth tích hợp.
                    </p>
                    <p>
                        Điểm tốt về ESP32, giống như ESP8266 là các thành phần RF tích hợp của nó như Bộ khuếch đại công
                        suất, Bộ khuếch đại nhận tiếng ồn thấp, Công tắc ăng-ten, Bộ lọc và RF Balun. Điều này làm cho
                        việc thiết kế phần cứng xung quanh ESP32 rất dễ dàng vì bạn yêu cầu rất ít thành phần bên ngoài.
                    </p>
                    <p>
                        Một điều quan trọng khác cần biết về ESP32 là nó được sản xuất bằng công nghệ 40 nm công suất
                        cực thấp của TSMC. Vì vậy, việc thiết kế các ứng dụng chạy bằng pin như thiết bị đeo, thiết bị
                        âm thanh, màn hình trẻ em, đồng hồ thông minh, v.v., sử dụng ESP32 sẽ rất dễ dàng.
                    </p>
                    <div style={{ width: '100%', margin: 'auto', textAlign: 'center' }}>
                        <img style={{ width: '300px' }} src={img5} alt="#" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ThietBi;
