import Header from "../../components/Header";
import Sidebar from "../../components/Sideber";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import SearchItem from "../../components/search/Search_item";
import LineChart from "../../components/Chart/LineChart";

const ApplicationManagement = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-800">
            <Header />
            <main className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
                <Sidebar />
                <div id="main-content" className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
                    <div className="px-4 pt-6">
                        <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
                            <div className="mb-4 col-span-full xl:mb-2">
                                <nav className="flex mb-5">
                                    <ul className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                                        <li className="inline-flex items-center">
                                            <Link className="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500">
                                                <span className="material-icons w-5 h-5 mr-2.5">
                                                    home
                                                </span>
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <div className="flex items-center">
                                                <span className="material-icons w-6 h-6 text-gray-400">
                                                    keyboard_arrow_right
                                                </span>
                                                <span className="ml-1 text-gray-400 md:ml-2 dark:text-gray-500" aria-current="page">무료 체험 신청 및 관리</span>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                                <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">무료 체험 신청 및 관리</h1>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 pt-4 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
                            <SearchItem />
                        </div>
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
                        <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-4 ">

                            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                                <div className="w-full">
                                    <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">총 상담신청</h3>
                                    <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">1,500</span>
                                    <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                                        <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clip-rule="evenodd" fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
                                            </svg>
                                            12.5%
                                        </span>
                                        한달 전
                                    </p>
                                </div>
                            </div>

                            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                                <div className="w-full">
                                    <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">총 체험희망</h3>
                                    <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">1,500</span>
                                    <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                                        <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clip-rule="evenodd" fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
                                            </svg>
                                            12.5%
                                        </span>
                                        한달 전
                                    </p>
                                </div>
                            </div>

                            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                                <div className="w-full">
                                    <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">총 대기중</h3>
                                    <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">1,500</span>
                                    <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                                        <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clip-rule="evenodd" fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
                                            </svg>
                                            12.5%
                                        </span>
                                        한달 전
                                    </p>
                                </div>
                            </div>

                            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                                <div className="w-full">
                                    <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">총 체험거부</h3>
                                    <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">1,500</span>
                                    <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                                        <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clip-rule="evenodd" fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
                                            </svg>
                                            12.5%
                                        </span>
                                        한달 전
                                    </p>
                                </div>
                            </div>


                        </div>
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