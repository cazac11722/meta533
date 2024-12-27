import Header from "../../components/Header";
import Sidebar from "../../components/Sideber";
import Footer from "../../components/Footer";
import NaverItem from "../../components/Body/Naver_item";
import { Link } from "react-router-dom";
import SearchItem from "../../components/search/Search_item";

const MediaManagement = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-800 dark">
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
                                                <span className="ml-1 text-gray-400 md:ml-2 dark:text-gray-500" aria-current="page">매체코드 관리</span>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                                <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">매체코드 관리</h1>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 pt-4 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
                            <SearchItem />
                        </div>
                        <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-5 ">

                            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                                <div className="w-full">
                                    <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">총 노출수</h3>
                                    <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">2,340</span>
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
                                    <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">총 도달수</h3>
                                    <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">2,340</span>
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
                                    <h3 className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">총 클릭</h3>
                                    <div className="flex items-center mb-2">
                                        <div className="w-28 text-sm font-medium dark:text-white">클릭수</div>
                                        <div className="w-16 text-sm font-medium dark:text-white">1,500</div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                            <div className="bg-primary-600 h-2.5 rounded-full dark:bg-sky-500" style={{ width: "20%" }}></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <div className="w-28 text-sm font-medium dark:text-white">클릭당 비용</div>
                                        <div className="w-16 text-sm font-medium dark:text-white">1,000</div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                            <div className="bg-primary-600 h-2.5 rounded-full dark:bg-sky-500" style={{ width: "18%" }}></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <div className="w-28 text-sm font-medium dark:text-white">클릭율</div>
                                        <div className="w-16 text-sm font-medium dark:text-white">3%</div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                            <div className="bg-primary-600 h-2.5 rounded-full dark:bg-sky-500" style={{ width: "3%" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                                <div className="w-full">
                                    <h3 className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">성과: 잠재고객</h3>
                                    <div className="flex items-center mb-2">
                                        <div className="w-28 text-sm font-medium dark:text-white">신청수</div>
                                        <div className="w-16 text-sm font-medium dark:text-white">20</div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                            <div className="bg-primary-600 h-2.5 rounded-full dark:bg-sky-500" style={{ width: "20%" }}></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <div className="w-28 text-sm font-medium dark:text-white">신청당 비용</div>
                                        <div className="w-16 text-sm font-medium dark:text-white">7,000</div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                            <div className="bg-primary-600 h-2.5 rounded-full dark:bg-sky-500" style={{ width: "18%" }}></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <div className="w-28 text-sm font-medium dark:text-white">신청율</div>
                                        <div className="w-16 text-sm font-medium dark:text-white">15%</div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                            <div className="bg-primary-600 h-2.5 rounded-full dark:bg-sky-500" style={{ width: "3%" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                                <div className="w-full">
                                    <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">총 광고비</h3>
                                    <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">2,340</span>
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
                                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">메타코드 데이터</h3>
                                    <span className="text-base font-normal text-gray-500 dark:text-gray-400">메타코드 데이터 테이블 입니다.</span>
                                </div>
                                <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
                                    <div className="items-center sm:flex">
                                        <div className="flex items-center">
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <span className="material-icons dark:text-white">
                                                        verified
                                                    </span>
                                                </div>
                                                <input type="text" name="start" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 datepicker-input" placeholder="아이디를 입력해주세요."></input>
                                            </div>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <span className="material-icons dark:text-white">
                                                        token
                                                    </span>
                                                </div>
                                                <input type="text" name="start" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 datepicker-input" placeholder="토큰을 입력해주세요."></input>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto bg-sky-600">
                                        <svg className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                        등록
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
                                                            광고매체명
                                                        </th>
                                                        <th scope="col" rowSpan={2} className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                                                            노출수
                                                        </th>
                                                        <th scope="col" rowSpan={2} className="p-4 text-xs font-medium tracking-wider text-center text-gray-500  uppercase dark:text-white " >
                                                            도달수
                                                        </th>
                                                        <th scope="col" colSpan={3} className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white">
                                                            클릭
                                                        </th>
                                                        <th scope="col" colSpan={3} className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white">
                                                            잠재고객
                                                        </th>
                                                        <th scope="col" rowSpan={2} className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white">
                                                            댓글
                                                        </th>
                                                        <th scope="col" rowSpan={2} className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                                                            광고비
                                                        </th>
                                                    </tr>
                                                    <tr className="">
                                                        <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white" >클릭수</th>
                                                        <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white" >비용</th>
                                                        <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white" >클릭율</th>
                                                        <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white" >신청수</th>
                                                        <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white" >비용</th>
                                                        <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">신청율</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white dark:bg-gray-800">
                                                    <tr>
                                                        <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">1</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">기업가치</td>
                                                        <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">메타광고</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">1,500</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">1,000</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">20</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">7,000</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">15%</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">5</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">3,012</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">20%</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">3</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-sky-400">무료</td>
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

export default MediaManagement;