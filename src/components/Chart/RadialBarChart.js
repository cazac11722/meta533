import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '../../contexts/hooks/useTheme';
import { useAuth } from '../../contexts/AuthContext';
import { useForm } from '../../contexts/hooks/useForm';

const BadialBarChart = () => {
    const { isDarkMode } = useTheme();
    const { user } = useAuth();
    const { mainUrl } = useForm();
    const [list, setList] = useState([0, 0, 0]);

    const fetchData = async () => {
        try {
            const response = await fetch(`${mainUrl}api/landing/application-details/user/${user.id}/`);
            const result = await response.json();

            // 데이터 처리 최적화
            const vis = result.reduce(
                (acc, e) => {
                    if (e.applications_data) {
                        e.applications_data.forEach((j) => {
                            if (j.applications_data) {
                                j.applications_data.forEach((detail) => {
                                    acc["Pending"] += detail.consultation_result === "Pending" ? 1 : 0;
                                    acc["Declined"] += detail.consultation_result === "Declined" ? 1 : 0;
                                    acc["Interested"] += detail.consultation_result === "Interested" ? 1 : 0;
                                });
                            }
                        });
                    }
                    return acc;
                },
                { Pending: 0, Declined: 0, Interested: 0 }
            );

            // 상태 업데이트
            setList([vis.Interested, vis.Pending, vis.Declined]);
        } catch (error) {
            console.error("API 요청 중 오류 발생:", error);
        }
    };

    const chartOptions = {
        series: list,
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
                foreColor: isDarkMode ? '#FFFFFF' : '#000',
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
                                return list.reduce((a, b) => a + b, 0); // 총합 표시
                            },
                        },
                    },
                },
            },
            labels: ['총 체험희망', '총 대기중', '총 체험거부'],
        },
    };

    useEffect(() => {
        fetchData();
    }, [user.id]); // `user.id`가 변경될 때만 호출


    return (
        <div>
            <div id="chart">
                <Chart options={chartOptions.options} series={chartOptions.series} type="radialBar" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    );

};


export default BadialBarChart;
