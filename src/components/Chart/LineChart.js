import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const LineChart = () => {
    const [state, setState] = React.useState({

        series: [{
            name: '신청수',
            type: 'column',
            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        }, {
            name: '비율',
            type: 'line',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                foreColor: '#FFFFFF'
            },
            stroke: {
                width: [0, 4]
            },
            dataLabels: {
                enabled: true,
                enabledOnSeries: [1]
            },
            labels: ["2024년 12월 01일",
                "2024년 12월 02일",
                "2024년 12월 03일",
                "2024년 12월 04일",
                "2024년 12월 05일",
                "2024년 12월 06일",
                "2024년 12월 07일",
                "2024년 12월 08일",
                "2024년 12월 09일",
                "2024년 12월 10일",
                "2024년 12월 11일",
                "2024년 12월 12일"],
            yaxis: [{
                title: {
                    text: '신청수',
                },
            }, {
                opposite: true,
                title: {
                    text: '비율'
                }
            }]
        },
    });

    return (
        <div>
            <Chart options={state.options} series={state.series} type="line" height="350" />
        </div>
    );

};


export default LineChart;
