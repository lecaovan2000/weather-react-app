import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import styles from './HealthNotice.module.css';
import ItemHealth from './ItemHealth';
import '../../server/firebase';
import { getDatabase, ref, child, get } from 'firebase/database';

import IconO from '../icons/O';
import IconMatTroi from '../icons/IconMatTroi';
import IconAo from '../icons/IconAo';

const HealthNotice = () => {
    const [data, setData] = useState([]);
    const optionHealth = [
        {
            icon: <IconO />,
            name: 'Ô',
            notice: data.Mua === 1 ? 'Mang theo ô' : 'Không cần',
        },
        {
            icon: <IconMatTroi />,
            name: 'Chỉ số UV',
            notice: 'Trung bình',
        },
        {
            icon: <IconAo />,
            name: 'Quần áo',
            notice: data.nhiet_do < 22 ? 'Áo ấm' : data.nhiet_do > 30 ? 'Áo khoát' : 'Mát mẻ',
        },
    ];
    useEffect(() => {
        const dbRef = ref(getDatabase());

        const fetchData = async () => {
            try {
                const res = await get(child(dbRef, `data`));
                setData(res.val());
                console.log('jhjhdkfhd', res.val());
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [data]);
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
