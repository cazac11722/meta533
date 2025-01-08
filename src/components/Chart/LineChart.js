import React, { useEffect, useState } from 'react';
import { useTheme } from '../../contexts/hooks/useTheme';
import ReactApexChart from 'react-apexcharts';
import { useAuth } from '../../contexts/AuthContext';
import { useForm } from '../../contexts/hooks/useForm';

const LineChart = () => {
    const { isDarkMode } = useTheme();
    const { user } = useAuth();
    const { mainUrl } = useForm();
    const [list, setList] = useState([]);

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
            setList([0, 0, 1]);
            
        } catch (error) {
            console.error("API 요청 중 오류 발생:", error);
        }
    };

    const [state, setState] = React.useState({

        series: [{
            name: "",
            data: list || []
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
        },

    });

    useEffect(() => {
        // fetchData();
    }, [user.id]); // `user.id`가 변경될 때만 호출

    return (
        <div>
            <ReactApexChart options={state.options} series={state.series} type="line" height="350" />
        </div>
    );

};


export default LineChart;
