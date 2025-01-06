import { useEffect, useState } from "react";
import Header from "../../components/PageLayout/Header";
import Sidebar from "../../components/PageLayout/Sideber";
import Footer from "../../components/PageLayout/Footer";
import AddressOrganization from "../../components/Body/Address_organization";
import SearchFilter from "../../components/Body/SearchFilter";
import DataList from "../../components/Body/DataList";
import DataTable from "../../components/Body/DataTable";
import { usePopup } from "../../contexts/hooks/usePopup";

const LandingManagement = () => {
    const { openPopup } = usePopup();
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
        change: {
            2: { html: `<button type="button" class="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto bg-sky-600">복사</button>` }
        },
    });

    const fetchData = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/landing/landing-pages/user/1/");
            let result = await response.json();
            let data = [];
            for (const e of result) {
                data.push([
                    e.id,
                    `<a href="http://${e.title}.localhost:3000" target='_blank'>${e.title}</a>`,
                    `${e.url} <br> <button type="button" class="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto bg-sky-600" >복사</button>`,
                    e.ad_platform, 0, 0, 0, 0, 0, 0, 0, 0, e.start_date, 0, '무료', ''
                ])
            }
            // 데이터를 업데이트
            setDataTable(prevState => ({
                ...prevState,
                data: data // API 데이터에 맞게 매핑 필요
            }));
        } catch (error) {
            console.error("API 요청 중 오류 발생:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const lor = [
        { title: "Home", href: '/' },
        { title: "랜딩 관리", href: '/m/m' }
    ];

    const list1 = [
        {
            title: "총 방문", value: [
                { title: '방문수', vlaue: 1500 },
                { title: '방문당 비용', vlaue: 1500 },
                { title: '이탈율', vlaue: '3%' }
            ],
        },
        {
            title: "총 신청", value: [
                { title: '총 신청', vlaue: 1500 },
                { title: '신청당 비용', vlaue: 1500 },
                { title: '신청율', vlaue: '3%' }
            ],
        },
        {
            title: "총 이탈", value: [
                { title: '이탈수', vlaue: 1500 },
                { title: '이탈율', vlaue: 1500 },
                { title: '재 방문', vlaue: '3%' }
            ],
        },
        { title: "총 광고비", value: '무료', percent: 20 },
    ];

    return (
        <div className="bg-gray-50 dark:bg-gray-800">
            <Header />
            <main className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
                <Sidebar />
                <div id="main-content" className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
                    <div className="px-4 pt-6">
                        <AddressOrganization data={lor} />
                        <SearchFilter />
                        <DataList data={list1} cols={4} />
                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm mt-4 mb-4 dark:border-gray-700 p-4 sm:p-6 dark:bg-gray-800">
                            <div className="items-center justify-between lg:flex">
                                <div className="mb-4 lg:mb-0">
                                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{dataTable.title}</h3>
                                    <span className="text-base font-normal text-gray-500 dark:text-gray-400">{dataTable.contents}</span>
                                </div>
                                <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
                                    <button type="button" onClick={() => openPopup({ type: "landing", setData: setDataTable })} className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto bg-sky-600">
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
