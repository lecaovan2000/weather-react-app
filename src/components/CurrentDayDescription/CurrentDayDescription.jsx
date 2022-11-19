import React from 'react';
import CurrentDayDescriptionItem from '../CurrentDayDescriptionItem';

const CurrentDayDescription = () => {
    const nameInfo = [
        { name: 'Khả năng dự đoán', value: '75', unit: '%' },
        { name: 'Độ ẩm', value: '75', unit: '%' },
        {
            name: 'Áp suất không khí',
            value: '75',
            unit: 'km/h',
        },
        { name: 'Nhiệt độ cao nhất', value: '75', unit: <>&deg;C</> },
        { name: 'Nhiệt độ thấp nhất', value: '75', unit: <>&deg;C</> },
    ];
    return (
        <div className="mt-4 mt-md-2">
            <div className="d-flex flex-column mb-2">
                {nameInfo.map(item => (
                    <CurrentDayDescriptionItem {...item} key={item} />
                ))}
            </div>
        </div>
    );
};

export default CurrentDayDescription;
