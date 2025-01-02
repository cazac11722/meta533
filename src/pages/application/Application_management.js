import Header from "../../components/PageLayout/Header";
import Sidebar from "../../components/PageLayout/Sideber";
import Footer from "../../components/PageLayout/Footer";
import LineChart from "../../components/Chart/LineChart";
import AddressOrganization from "../../components/Body/Address_organization";
import SearchFilter from "../../components/Body/SearchFilter";
import DataList from "../../components/Body/DataList";

const ApplicationManagement = () => {
    var lor = [
        { title: "Home", href: '/' },
        { title: "매체코드 관리", href: '/m/m' }
    ];

    var list1 = [
        { title: "총 상담신청", value: '1,500', percent: 20 },
        { title: "총 체험희망", value: '1,500', percent: 20 },
        { title: "총 대기중", value: '1,500', percent: 20 },
        { title: "총 체험거부", value: '1,500', percent: 20 },
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
                        <DataList data={list1} cols={4} />
                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm mt-4 mb-4 dark:border-gray-700 p-4 sm:p-6  dark:bg-gray-800">
                            <div className="items-center justify-between lg:flex">
                                <div className="mb-4 lg:mb-0">
                                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">무료 체험 신청 내역</h3>
                                    <span className="text-base font-normal text-gray-500 dark:text-gray-400">무료 체험 신청 테이블 입니다.</span>
                                </div>

                            </div>
                            <div className="flex flex-col mt-6">
                                <div className="overflow-x-auto rounded-lg">
                                    <div className="inline-block min-w-full align-middle">
                                        <div className="overflow-hidden shadow sm:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                                                <thead className="bg-gray-50 dark:bg-gray-700">
                                                    <tr>
                                                        <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                                                            번호
                                                        </th>
                                                        <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                                                            이름
                                                        </th>
                                                        <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white">
                                                            연락처
                                                        </th>
                                                        <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                                                            상담요청시간
                                                        </th>
                                                        <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500  uppercase dark:text-white " >
                                                            신청일자
                                                        </th>
                                                        <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white">
                                                            상담결과
                                                        </th>
                                                        <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white">
                                                            메모
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white dark:bg-gray-800">
                                                    <tr>
                                                        <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">1</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">최민수</td>
                                                        <td className="p-4 text-sm font-semibold text-center text-gray-900 whitespace-nowrap dark:text-white">000-0000-0000</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">오전 9시~12시</td>
                                                        <td className="p-4 text-sm font-normal text-center text-gray-500 whitespace-nowrap dark:text-white">2024-12-25 13:22:30</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">
                                                            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                                <option>대기중</option>
                                                                <option>체험거부</option>
                                                                <option>체험희망</option>
                                                            </select>
                                                        </td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-sky-400">
                                                            <textarea className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 datepicker-input"></textarea>
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

export default ApplicationManagement;