import React from 'react';
import styles from './HealthNotice.module.css';

const ItemHealth = props => {
    return (
        <div className={styles.healthItem}>
            <div className={styles.healthItem_content}>
                <div className={styles.healthItem_content__icon}>{props.icon || '...'}</div>
                <div className={styles.healthItem_content__name}>{props.name || '...'}</div>
                <div>{props.notice || '...'}</div>
            </div>
        </div>
    );
};

export default ItemHealth;
