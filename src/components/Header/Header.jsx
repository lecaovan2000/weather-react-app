import React from 'react';

import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ props }) => {
    const mainNav = [
        { display: 'Trang chủ', path: '/' },
        { display: 'Giới thiệu', path: '/gioithieu' },
        { display: 'Mô Hình', path: '/mohinh' },
        { display: 'Thiết bị', path: '/thietbi' },
    ];
    const { pathname } = useLocation();
    const activeNav = mainNav.findIndex(e => e.path === pathname);
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.header__menu}>
                        {mainNav.map((items, index) => (
                            <div key={index} className={index === activeNav ? styles.active : ''}>
                                <Link to={items.path}>
                                    <span>{items.display}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <h1 className={styles.heading}>
                <span className={styles.light}>Sensor</span> Forecast
            </h1>
        </div>
    );
};

export default Header;
