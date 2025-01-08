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
        { title: "매체", value: 2340, percent: 10 },
        { title: "광고주", value: 2340, percent: 10 },
        { title: "광고대행사", value: 2340, percent: 10 },
        { title: "진행중", value: 2340, percent: 10 },
        { title: "대기중", value: 2340, percent: 10 },
    ])

    const [dataTable, setDataTable] = useState({
        title: '광고주 데이터',
        contents: '매체, 광고주, 광고대행사 관련 데이터 테이블 입니다.',
        type: 'advertiser',
        thead: [
            {
                data: [
                    { title: '<input type="checkbox" id="all"  />', rowspan: 2 },
                    { title: "번호", rowspan: 2 },
                    { title: "매체명", rowspan: 2 },
                    { title: "광고주", colspan: 4, textAlign: 'center' },
                    { title: "광고대행사", colspan: 4, textAlign: "center" },
                    { title: "진행여부", rowspan: 2 },
                    { title: "랜딩관리", rowspan: 2 },
                    { title: "매체관리", rowspan: 2 },
                    { title: "무료체험관리", rowspan: 2 },
                    { title: "메모", rowspan: 2 },
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
            let vis = {
                "vis1": 0,
                "vis2": 0,
                "vis3": 0,
                "vis4": 0,
                "vis5": 0,
            };

            for (const e of result) {
                let ad_a = e.advertising_agencies[0] || [];
                vis['vis1'] += 1;
                vis['vis2'] += 1;
                vis['vis3'] += ad_a.length > 0 ? 1 : 0;
                vis['vis4'] += e.is_active == '2' ? 1 : 0;
                vis['vis5'] += e.is_active == '1' ? 1 : 0;
                data.push([
                    `<input type="checkbox" id="chk_${e.id}"  />`,
                    e.id,
                    e.media_name || '없음',
                    e.advertiser_name || '없음',
                    e.contact_person || '없음',
                    e.phone_number || '없음',
                    e.email || '없음',
                    ad_a.agency_name || '없음',
                    ad_a.contact_person || '없음',
                    ad_a.phone_number || '없음',
                    ad_a.email || '없음',
                    e.is_active == '1' ? `<span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-purple-100 dark:bg-gray-700 dark:border-purple-500 dark:text-purple-400">대기중</span>`
                        : e.is_active == '2' ? `<span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">진행중</span>`
                            : '',
                    `<a href="http://533.world/l/m/${e.id}" target="_blank" class="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-primary-800">
                        보기
                    </a>`,
                    `<a href="http://533.world/m/m/${e.id}" target="_blank" class="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-primary-800">
                        보기
                    </a>`,
                    `<a href="http://533.world/ap/m/${e.id}" target="_blank" class="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-primary-800">
                        보기
                    </a>`,
                    '<textarea id="message" rows="4" class="block p-2.5 w-300 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>'
                ])
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
                updatedList[4] = {
                    ...updatedList[4], // 기존 데이터 복사
                    value: vis['vis5'] + '명',
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
                        <SearchFilter />
                        <DataList data={list} cols={5} />
                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm mt-4 mb-4 dark:border-gray-700 p-4 sm:p-6 dark:bg-gray-800">
                            <div className="items-center justify-between lg:flex">
                                <div className="mb-4 lg:mb-0">
                                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{dataTable.title}</h3>
                                    <span className="text-base font-normal text-gray-500 dark:text-gray-400">{dataTable.contents}</span>
                                </div>
                                <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
                                    <button type="button" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-red-700 sm:w-auto bg-red-600">
                                        <span class="material-icons text-sm text-white mr-1">delete</span>
                                        삭제
                                    </button>
                                    <button type="button" onClick={() => openPopup({ type: "advertiser", setData: setDataTable })} className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto bg-sky-600">
                                        <svg className="h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                                        광고대행사 등록
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