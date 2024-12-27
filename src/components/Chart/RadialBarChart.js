import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const BadialBarChart = () => {
    const [state, setState] = React.useState({

        series: [44, 55, 67],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
                foreColor: '#FFFFFF'
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                        total: {
                            show: true,
                            label: '총 신청수',
                            formatter: function (w) {
                                return 249
                            }
                        }
                    }
                }
            },
            labels: ['총 체험희망', '총 대기중', '총 체험거부'],
        },


    });


    return (
        <div>
            <div id="chart">
                <Chart options={state.options} series={state.series} type="radialBar" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    );

};


export default BadialBarChart;
