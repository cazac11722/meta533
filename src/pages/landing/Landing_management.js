import Header from "../../components/PageLayout/Header";
import Sidebar from "../../components/PageLayout/Sideber";
import Footer from "../../components/PageLayout/Footer";
import AddressOrganization from "../../components/Body/Address_organization";
import SearchFilter from "../../components/Body/SearchFilter";
import DataList from "../../components/Body/DataList";

const LandingManagement = () => {

    var lor = [
        { title: "Home", href: '/' },
        { title: "매체코드 관리", href: '/m/m' }
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
                                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">랜딩 데이터</h3>
                                    <span className="text-base font-normal text-gray-500 dark:text-gray-400">랜딩 데이터 테이블 입니다.</span>
                                </div>
                                <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
                                    <button type="button" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto bg-sky-600">
                                        <svg className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                        광고등록
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col mt-6">
                                <div className="overflow-x-auto rounded-lg">
                                    <div className="inline-block min-w-full align-middle">
                                        <div className="overflow-hidden shadow sm:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                                                <thead className="bg-gray-50 dark:bg-gray-700">
                                                    <tr>
                                                        <th scope="col" rowSpan={2} className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                                                            번호
                                                        </th>
                                                        <th scope="col" rowSpan={2} className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                                                            제목
                                                        </th>
                                                        <th scope="col" rowSpan={2} className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white">
                                                            URL복사
                                                        </th>
                                                        <th scope="col" rowSpan={2} className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                                                            광고매체명
                                                        </th>
                                                        <th scope="col" colSpan={3} className="p-4 text-xs font-medium tracking-wider text-center text-gray-500  uppercase dark:text-white " >
                                                            방문
                                                        </th>
                                                        <th scope="col" colSpan={3} className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white">
                                                            신청
                                                        </th>
                                                        <th scope="col" colSpan={2} className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white">
                                                            이탈
                                                        </th>
                                                        <th scope="col" colSpan={2} className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white">
                                                            광고기간
                                                        </th>
                                                        <th scope="col" rowSpan={2} className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                                                            광고비
                                                        </th>
                                                        <th scope="col" rowSpan={2} className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white">
                                                            기타
                                                        </th>
                                                    </tr>
                                                    <tr className="">
                                                        <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white" >방문수</th>
                                                        <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white" >비용</th>
                                                        <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white" >이탈율</th>
                                                        <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white" >신청수</th>
                                                        <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white" >비용</th>
                                                        <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">신청율</th>
                                                        <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white" >이탈수</th>
                                                        <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">이탈율</th>
                                                        <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white" >시작일</th>
                                                        <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">종료일</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white dark:bg-gray-800">
                                                    <tr>
                                                        <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">1</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">기업가치</td>
                                                        <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                                            <div className="text-sm font-normal text-center text-gray-500 dark:text-gray-400">
                                                                <button type="button" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto bg-sky-600">복사</button>
                                                                <div className="text-sm font-normal text-gray-500 dark:text-sky-400 mt-2">클릭</div>
                                                            </div>
                                                        </td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">000-0000-0000</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">1,500</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">1,000</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">3%</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">20</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">7,000</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">15%</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">5</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">20%</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">2024-12-25</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white"></td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-sky-400">무료</td>
                                                        <td className="p-4 text-sm text-center font-normal text-gray-500 whitespace-nowrap dark:text-sky-400">
                                                            <button type="button" data-dropdown-toggle="notification-dropdown" className="p-2 text-gray-500 rounded-lg dark:text-blue-400">
                                                                <span className="sr-only">View notifications</span>
                                                                <span className="material-icons">
                                                                    edit
                                                                </span>
                                                            </button>
                                                            <button type="button" data-dropdown-toggle="notification-dropdown" className="p-2 text-gray-500 rounded-lg dark:text-red-400">
                                                                <span className="sr-only">View notifications</span>
                                                                <span className="material-icons">
                                                                    delete
                                                                </span>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-3 sm:pt-6">
                                <div>
                                    <button className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" type="button" data-dropdown-toggle="transactions-dropdown">Last 7 days <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </main>

        </div>
    );
}

export default LandingManagement;