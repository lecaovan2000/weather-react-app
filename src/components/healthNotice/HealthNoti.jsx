import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './HealthNotice.module.css';
import ItemHealth from './ItemHealth';

import IconO from '../icons/O';
import IconMatTroi from '../icons/IconMatTroi';
import IconAo from '../icons/IconAo';

const HealthNotice = () => {
    const optionHealth = [
        {
            icon: <IconO />,
            name: 'Ô',
            notice: 'Không Cần',
        },
        {
            icon: <IconMatTroi />,
            name: 'Chỉ số UV',
            notice: 'Trung bình',
        },
        {
            icon: <IconAo />,
            name: 'Quần áo',
            notice: 'Áo khoác chống nắng',
        },
    ];
    return (
        <Container>
            <div className={styles.box}>
                <p style={{ color: '#ffffff', fontWeight: '600' }}>Chuẩn bị cho ngày của bạn</p>
                <div>
                    {optionHealth.map((items, index) => (
                        <ItemHealth key={index} {...items} />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default HealthNotice;
