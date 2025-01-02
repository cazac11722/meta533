import Header from "../../components/PageLayout/Header";
import Sidebar from "../../components/PageLayout/Sideber";
import Footer from "../../components/PageLayout/Footer";
import AddressOrganization from "../../components/Body/Address_organization";
import DataList from "../../components/Body/DataList";
import SearchFilter from "../../components/Body/SearchFilter";
import DataTable from "../../components/Body/DataTable";

const AdvertiserManagement = () => {

    var lor = [
        { title : "Home", href : '/'},
        { title : "광고주 관리", href : '/a/m'}
    ];

    var list = [
        {title : "매체", value : 2340, percent : 20 },
        {title : "광고주", value : 2340, percent : 20 },
        {title : "광고대행사", value : 2340, percent : 20 },
        {title : "진행중", value : 2340, percent : 20 },
        {title : "대기중", value : 2340, percent : 20 },
    ]

    var dataTable = {
        title : '광고주 데이터',
        contents : '매체, 광고주, 광고대행사 관련 데이터 테이블 입니다.',
        type : 'advertiser',
        thead : [
            {
                data : [
                    { title: "번호", rowspan: 2},
                    { title: "매체명", rowspan: 2},
                    { title: "광고주", colspan: 4, textAlign : 'center'},
                    { title: "광고대행사", colspan: 4, textAlign : "center"},
                    { title: "진행여부", rowspan: 2},
                    { title: "랜딩관리", rowspan: 2},
                    { title: "매체관리", rowspan: 2},
                    { title: "무료체험관리", rowspan: 2},
                    { title: "메모", rowspan: 2}
                ]
            },
            {
                data : [
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
        data : [
            [ 1, 'test', '', '', '', '', '', '', '', '', 1, 1, 1, 1, '텍스트 입니다.' ],
        ]
    }

    return (
        <div className="bg-gray-50 dark:bg-gray-800">
            <Header />
            <main className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
                <Sidebar  />
                <div id="main-content" className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
                    <div className="px-4 pt-6">
                        <AddressOrganization data={lor} />
                        <SearchFilter  />
                        <DataList data={list} cols={3} />
                        <DataTable data={dataTable} />
                    </div>
                    <Footer />
                </div>
            </main>

        </div>
    );
}

export default AdvertiserManagement;