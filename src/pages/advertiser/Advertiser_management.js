import Header from "../../components/PageLayout/Header";
import Sidebar from "../../components/PageLayout/Sideber";
import Footer from "../../components/PageLayout/Footer";
import AddressOrganization from "../../components/Body/Address_organization";
import DataList from "../../components/Body/DataList";
import SearchFilter from "../../components/Body/SearchFilter";
import DataTable from "../../components/Body/DataTable";
import { useEffect, useState } from "react";
import { useForm } from "../../contexts/hooks/useForm";
import { useParams } from "react-router-dom";
import { usePopup } from "../../contexts/hooks/usePopup";

const AdvertiserManagement = () => {
    const { mainUrl } = useForm();
    const { id } = useParams();
    const { openPopup } = usePopup();

    var lor = [
        { title: "Home", href: '/' },
        { title: "광고주 관리", href: '/a/m' }
    ];

    const [list, setlist] = useState([
        { title: "매체", value: 2340, percent: 20 },
        { title: "광고주", value: 2340, percent: 20 },
        { title: "광고대행사", value: 2340, percent: 20 },
        { title: "진행중", value: 2340, percent: 20 },
        { title: "대기중", value: 2340, percent: 20 },
    ])

    const [dataTable, setDataTable] = useState({
        title: '광고주 데이터',
        contents: '매체, 광고주, 광고대행사 관련 데이터 테이블 입니다.',
        type: 'advertiser',
        thead: [
            {
                data: [
                    { title: "번호", rowspan: 2 },
                    { title: "매체명", rowspan: 2 },
                    { title: "광고주", colspan: 4, textAlign: 'center' },
                    { title: "광고대행사", colspan: 4, textAlign: "center" },
                    { title: "진행여부", rowspan: 2 },
                    { title: "랜딩관리", rowspan: 2 },
                    { title: "매체관리", rowspan: 2 },
                    { title: "무료체험관리", rowspan: 2 },
                    { title: "메모", rowspan: 2 }
                ]
            },
            {
                data: [
                    { title: "광고주명" },
                    { title: "담당자" },
                    { title: "전화번호" },
                    { title: "이메일" },
                    { title: "광고대행사명" },
                    { title: "담당자" },
                    { title: "전화번호" },
                    { title: "이메일" }
                ]
            }
        ],
        data: [
        ]
    });

    const fetchData = async () => {
        try {
            const response = await fetch(`${mainUrl}api/accounts/users/`);
            let result = await response.json();
            let data = [];
            
            for (const e of result) {
                console.log(e);
                data.push([
                    e.id,
                    '없음',
                    '없음',
                    '없음',
                    '없음',
                    e.email,
                    '없음',
                    '없음',
                    '없음',
                    '없음',
                    '없음',
                    `<a href="http://533.world/l/m/${e.id}" target="_blank" class="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-primary-800">
                        보기
                    </a>`,
                    `<a href="http://533.world/m/m/${e.id}" target="_blank" class="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-primary-800">
                        보기
                    </a>`,
                    `<a href="http://533.world/ap/m/${e.id}" target="_blank" class="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-primary-800">
                        보기
                    </a>`
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


    return (
        <div className="bg-gray-50 dark:bg-gray-800">
            <Header />
            <main className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
                <Sidebar />
                <div id="main-content" className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
                    <div className="px-4 pt-6">
                        <AddressOrganization data={lor} />
                        <SearchFilter />
                        <DataList data={list} cols={5} />
                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm mt-4 mb-4 dark:border-gray-700 p-4 sm:p-6 dark:bg-gray-800">
                            <div className="items-center justify-between lg:flex">
                                <div className="mb-4 lg:mb-0">
                                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{dataTable.title}</h3>
                                    <span className="text-base font-normal text-gray-500 dark:text-gray-400">{dataTable.contents}</span>
                                </div>
                                <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
                                    <button type="button" onClick={() => openPopup({ type: "landing", setData: setDataTable })} className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto bg-sky-600">
                                        <svg className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                                        등록
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

export default AdvertiserManagement;