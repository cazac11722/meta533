import { useEffect, useState } from "react";
import Header from "../../components/PageLayout/Header";
import Sidebar from "../../components/PageLayout/Sideber";
import Footer from "../../components/PageLayout/Footer";
import AddressOrganization from "../../components/Body/Address_organization";
import DataList from "../../components/Body/DataList";
import DataTable from "../../components/Body/DataTable";
import { usePopup } from "../../contexts/hooks/usePopup";
import { useForm } from "../../contexts/hooks/useForm";
import { useParams } from "react-router-dom";

const LandingManagement = () => {
    const { id } = useParams();
    const { openPopup } = usePopup();
    const { mainUrl } = useForm();
    const [dataTable, setDataTable] = useState({
        title: '랜딩 데이터',
        contents: '랜딩 데이터 테이블 입니다.',
        type: 'landing',
        thead: [
            {
                data: [
                    { title: "번호", rowspan: 2 },
                    { title: "제목", rowspan: 2 },
                    { title: "URL복사", rowspan: 2 },
                    { title: "광고매체명", rowspan: 2 },
                    { title: "방문", colspan: 3 },
                    { title: "신청", colspan: 3 },
                    { title: "이탈", colspan: 2 },
                    { title: "광고기간", colspan: 2 },
                    { title: "광고비", rowspan: 2 },
                    { title: "기타", rowspan: 2 }
                ]
            },
            {
                data: [
                    { title: "방문수" },
                    { title: "비용" },
                    { title: "이탈율" },
                    { title: "신청수" },
                    { title: "비용" },
                    { title: "신청율" },
                    { title: "이탈수" },
                    { title: "이탈율" },
                    { title: "시작일" },
                    { title: "종료일" }
                ]
            }
        ],
        data: [],
    });

    const [list, setlist] = useState([
        {
            title: "총 방문", value: [
                { title: '방문수', value: 0 },
                { title: '방문당 비용', value: 0 },
                { title: '이탈율', value: '0%' }
            ],
        },
        {
            title: "총 신청", value: [
                { title: '총 신청', value: 0 },
                { title: '신청당 비용', value: 0 },
                { title: '신청율', value: '0%' }
            ],
        },
        {
            title: "총 이탈", value: [
                { title: '이탈수', value: 0 },
                { title: '이탈율', value: 0 },
                { title: '재 방문', value: '0%' }
            ],
        },
        { title: "총 광고비", value: '무료', percent: 10 },
    ])

    const fetchData = async () => {
        try {
            const response = await fetch(`${mainUrl}api/landing/landing-pages/user/${id}/`);
            let result = await response.json();
            let data = [];
            let vis = {
                "visit_count": 0,
                "visit_cost": 0,
                "bounce_count": 0,
            };
            let app = {
                'application_count': 0,
                'application_cost': 0,
            }

            for (const e of result) {
                let visits = e.visits_data[0];
                let applications = e.applications_data[0];

                data.push([
                    e.id,
                    `<a href="http://533.world/l/v/${e.url}" target='_blank'>${e.title}</a>`,
                    `${e.url} <br> <button type="button" data-url="http://533.world/l/v/${e.url}" class="copy-button inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto bg-sky-600" >복사</button>`,
                    e.ad_platform,
                    `${visits.visit_count}명`,
                    `${parseInt(visits.visit_cost)}원`,
                    `${((visits.bounce_count / visits.visit_count) * 100).toFixed(2)}%`,
                    `${applications.application_count}명`, `${parseInt(applications.application_cost)}원`,
                    "0%",
                    `${visits.bounce_count}명`,
                    `${((visits.bounce_count / visits.visit_count) * 100).toFixed(2)}%`,
                    e.start_date,
                    e.end_date,
                    '무료',
                    `<button type="button" class="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-red-700 sm:w-auto bg-red-600 mr-1" >삭제</button>
                    <button type="button" class="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto bg-sky-600" >수정</button>`
                ])
                vis['visit_count'] += visits.visit_count;
                vis['visit_cost'] += parseInt(visits.visit_cost);
                vis['bounce_count'] += visits.bounce_count;

                app['application_count'] += applications.application_count;
                app['application_cost'] += parseInt(applications.application_cost);

                
            }
            // 데이터를 업데이트
            setDataTable(prevState => ({
                ...prevState,
                data: data // API 데이터에 맞게 매핑 필요
            }));
            setlist(prevState => {
                const updatedList = [...prevState]; // 기존 배열 복사
                updatedList[0] = {
                    ...updatedList[0], // 기존 데이터 복사
                    value: [
                        { title: '방문수', value: vis['visit_count'] + "명" },
                        { title: '방문당 비용', value: vis['visit_cost'] + "원" },
                        { title: '이탈율', value: parseInt(((vis['bounce_count'] / vis['visit_count']) * 100) || 0) + "%" }
                    ],
                };
                updatedList[1] = {
                    ...updatedList[1], // 기존 데이터 복사
                    value: [
                        { title: '총 신청', value: app['application_count'] + "명" },
                        { title: '신청당 비용', value: app['application_cost'] + "원" },
                        { title: '신청율', value: parseInt(((vis['visit_count'] / app['application_count']) * 100) || 0) + "%" }
                    ],
                };
                updatedList[2] = {
                    ...updatedList[2], // 기존 데이터 복사
                    value: [
                        { title: '이탈수', value: vis['bounce_count'] + "명" },
                        { title: '이탈율', value: parseInt(((vis['bounce_count'] / vis['visit_count']) * 100) || 0) + "%" },
                        { title: '재 방문', value: '0%' }
                    ],
                };
                return updatedList; // 업데이트된 배열 반환
            });
        } catch (error) {
            console.error("API 요청 중 오류 발생:", error);
        }
    };

    const handleCopy = (event) => {
        const target = event.target;
        if (target.classList.contains("copy-button")) {
            const url = target.getAttribute("data-url");
            if (url) {
                navigator.clipboard.writeText(url)
                    .then(() => {
                        alert(`URL 복사 완료: ${url}`);
                    })
                    .catch(err => {
                        console.error("URL 복사 실패:", err);
                        alert("URL 복사에 실패했습니다.");
                    });
            }
        }
    };

    useEffect(() => {
        fetchData();
        // 이벤트 리스너 추가
        document.addEventListener("click", handleCopy);
        return () => {
            // 컴포넌트 언마운트 시 이벤트 리스너 제거
            document.removeEventListener("click", handleCopy);
        };
    }, []);

    const lor = [
        { title: "Home", href: '/' },
        { title: "랜딩 관리", href: '/m/m' }
    ];


    return (
        <div className="bg-gray-50 dark:bg-gray-800">
            <Header />
            <main className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
                <Sidebar />
                <div id="main-content" className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
                    <div className="px-4 pt-6">
                        <AddressOrganization data={lor} />
                        <DataList data={list} cols={4} />
                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm mt-4 mb-4 dark:border-gray-700 p-4 sm:p-6 dark:bg-gray-800">
                            <div className="items-center justify-between lg:flex">
                                <div className="mb-4 lg:mb-0">
                                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{dataTable.title}</h3>
                                    <span className="text-base font-normal text-gray-500 dark:text-gray-400">{dataTable.contents}</span>
                                </div>
                                <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
                                    <button type="button" onClick={() => openPopup({ type: "landing", setData: setDataTable, id: id })} className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto bg-sky-600">
                                        <svg className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                                        랜딩 등록
                                    </button>
                                </div>
                            </div>
                            <DataTable data={dataTable} />
                        </div >
                    </div>
                    <Footer />
                </div>
            </main>
        </div>
    );
}

export default LandingManagement;
