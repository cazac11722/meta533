import Header from "../../components/PageLayout/Header";
import Sidebar from "../../components/PageLayout/Sideber";
import Footer from "../../components/PageLayout/Footer";
import LineChart from "../../components/Chart/LineChart";
import AddressOrganization from "../../components/Body/Address_organization";
import SearchFilter from "../../components/Body/SearchFilter";
import DataList from "../../components/Body/DataList";
import { useEffect, useState } from "react";
import { useForm } from "../../contexts/hooks/useForm";
import { useAuth } from "../../contexts/AuthContext";
import DataTable from "../../components/Body/DataTable";
import { useParams } from "react-router-dom";

const ApplicationManagement = () => {
    var lor = [
        { title: "Home", href: '/' },
        { title: "매체코드 관리", href: '/m/m' }
    ];

    const { user } = useAuth();
    const { id } = useParams();
    const { mainUrl } = useForm();
    const [list, setlist] = useState([
        { title: "총 상담신청", value: 0, percent: 0 },
        { title: "총 체험희망", value: 0, percent: 0 },
        { title: "총 대기중", value: 0, percent: 0 },
        { title: "총 체험거부", value: 0, percent: 0 },
    ]);

    const [dataTable, setDataTable] = useState({
        title: '랜딩 데이터',
        contents: '랜딩 데이터 테이블 입니다.',
        type: 'landing',
        thead: [
            {
                data: [
                    { title: "번호", rowspan: 1 },
                    { title: "이름", rowspan: 1 },
                    { title: "연락처", rowspan: 1 },
                    { title: "상담요청시간", rowspan: 1 },
                    { title: "신청일자", rowspan: 1 },
                    { title: "상담결과", rowspan: 1 },
                    { title: "메모", rowspan: 1 },
                ]
            },
        ],
        data: [],
    });
    const fetchData = async () => {
        try {
            const response = await fetch(`${mainUrl}api/landing/landing-pages/user/${id}/`);
            let result = await response.json();
            let data = [];
            let vis = {
                "vis1": 0,
                "vis2": 0,
                "vis3": 0,
                "vis4": 0,
            };

            const response2 = await fetch(`${mainUrl}api/landing/application-details/user/${id}/`);
            let result2 = await response2.json();

            const dataList = result2.reduce(
                (acc, e) => {
                    if (e.applications_data) {
                        e.applications_data.forEach((j) => {
                            if (j.applications_data) {
                                j.applications_data.forEach((detail) => {
                                    vis['vis1'] += 1;
                                    vis['vis2'] += detail.consultation_result == "Interested" ? 1 : 0;
                                    vis['vis3'] += detail.consultation_result == "Pending" ? 1 : 0;
                                    vis['vis3'] += detail.consultation_result == "Declined" ? 1 : 0;

                                    acc.push([
                                        '-',
                                        detail.name,
                                        detail.contact,
                                        '-',
                                        detail.application_date,
                                        `
                        <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                          <option value="1" ${detail.consultation_result == 'Pending' ? 'checked' : ''}>대기중</option>
                          <option value="1" ${detail.consultation_result == 'Declined' ? 'checked' : ''}>체험거부</option>
                          <option value="1" ${detail.consultation_result == 'Interested' ? 'checked' : ''}>체험희망</option>
                        </select>
                        `,
                                        `<textarea id="message" rows="4" class="block p-2.5 w-300px text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="여기에 여러분의 생각을 적어 보세요...">${detail.memo}</textarea>`
                                    ]);
                                });
                            }
                        });
                    }
                    return acc;
                },
                []
            );
            setDataTable(prevState => ({
                ...prevState,
                data: dataList // API 데이터에 맞게 매핑 필요
            }));

            setlist(prevState => {
                const updatedList = [...prevState]; // 기존 배열 복사
                updatedList[0] = {
                    ...updatedList[0], // 기존 데이터 복사
                    value: vis['vis1'] + '명',
                };
                updatedList[1] = {
                    ...updatedList[1], // 기존 데이터 복사
                    value: vis['vis2'] + '명',
                };
                updatedList[2] = {
                    ...updatedList[2], // 기존 데이터 복사
                    value: vis['vis3'] + '명',
                };
                updatedList[3] = {
                    ...updatedList[3], // 기존 데이터 복사
                    value: vis['vis4'] + '명',
                };
                return updatedList; // 업데이트된 배열 반환
            });
        } catch (error) {
            console.error("API 요청 중 오류 발생:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="bg-gray-50 dark:bg-gray-800">
            <Header />
            <main className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
                <Sidebar />
                <div id="main-content" className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
                    <div className="px-4 pt-6">
                        <AddressOrganization data={lor} />
                        <div className="grid gap-4 mt-4 xl:grid-cols-1 2xl:grid-cols-3">
                            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-3 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex-shrink-0">
                                        <span className="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">요청시간</span>
                                        <h3 className="text-base font-light text-gray-500 dark:text-gray-400">요청시간을 차트로 확인해 보세요.</h3>
                                    </div>
                                    <div className="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">
                                        12.5%
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div id="main-chart">
                                    <LineChart />
                                </div>
                            </div>
                        </div>
                        <DataList data={list} cols={4} />

                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm mt-4 mb-4 dark:border-gray-700 p-4 sm:p-6  dark:bg-gray-800">
                            <div className="items-center justify-between lg:flex">
                                <div className="mb-4 lg:mb-0">
                                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">무료 체험 신청 내역</h3>
                                    <span className="text-base font-normal text-gray-500 dark:text-gray-400">무료 체험 신청 테이블 입니다.</span>
                                </div>

                            </div>
                            <DataTable data={dataTable} />
                        </div>
                    </div>
                    <Footer />
                </div>
            </main>

        </div>
    );
}

export default ApplicationManagement;