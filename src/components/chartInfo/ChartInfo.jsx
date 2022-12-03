import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';

const ChartInfo = () => {
    const data = [
        {
            name: '1',
            value: 26.5,
        },
        {
            name: '2',
            value: 27.1,
        },
        {
            name: '3',
            value: 31.3,
        },
        {
            name: '4',
            value: 36.4,
        },
        {
            name: '5',
            value: 35.1,
        },
        {
            name: '6',
            value: 29.6,
        },
        {
            name: '7',
            value: 27.2,
        },
        {
            name: '8',
            value: 45,
        },
        {
            year: '9',
            value: 26,
        },
    ];
    const config = {
        data,
        padding: 'auto',
        xField: 'name',
        yField: 'value',
        annotations: [
            {
                type: 'regionFilter',
                start: ['min', '35'],
                end: ['max', 'max'],
                color: '#f3112f',
            },
            {
                type: 'regionFilter',
                start: ['min', '29'],
                end: ['max', '35'],
                color: '#f3a011',
            },

            {
                type: 'line',
                start: ['min', '35'],
                end: ['max', '35'],
                style: {
                    stroke: '#f31111',
                    lineDash: [2, 2],
                },
            },
        ],
    };
    return <Line {...config} />;
};

export default ChartInfo;
