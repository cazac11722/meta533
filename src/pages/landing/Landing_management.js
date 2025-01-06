import Header from "../../components/PageLayout/Header";
import Sidebar from "../../components/PageLayout/Sideber";
import Footer from "../../components/PageLayout/Footer";
import AddressOrganization from "../../components/Body/Address_organization";
import SearchFilter from "../../components/Body/SearchFilter";
import DataList from "../../components/Body/DataList";
import DataTable from "../../components/Body/DataTable";

const LandingManagement = () => {

    var lor = [
        { title: "Home", href: '/' },
        { title: "랜딩 관리", href: '/m/m' }
    ];

    var list1 = [
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
    ]

    var dataTable = {
        title: '랜딩 데이터',
        contents: '랜딩 데이터 테이블 입니다.',
        action: [
            {
                title: "랜딩 등록",
                type : "add",
            },
        ],
        type: 'landing',
        thead: [
            {
                data: [
                    { title: "번호", rowspan: 2 },
                    { title: "제목", rowspan: 2 },
                    { title: "URL복사", rowspan: 2 },
                    { title: "광고매체명", rowspan: 2 },
                    { title: "방문", colspan: 4, textAlign: 'center' },
                    { title: "신청", colspan: 4, textAlign: 'center' },
                    { title: "이탈", colspan: 4, textAlign: 'center' },
                    { title: "광고기간", rowspan: 2 },
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
        data: [
        ]
    }


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
                        <DataTable data={dataTable} />

                    </div>
                    <Footer />
                </div>
            </main>

        </div>
    );
}

export default LandingManagement;