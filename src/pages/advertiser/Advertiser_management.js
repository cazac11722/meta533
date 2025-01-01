import Header from "../../components/Header";
import Sidebar from "../../components/Sideber";
import Footer from "../../components/Footer";
import NaverItem from "../../components/Body/Naver_item";
import SearchItem from "../../components/Search/Search_item";

const AdvertiserManagement = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-800">
            <Header />
            <main className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
                <Sidebar />
                <div id="main-content" className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
                    <div className="px-4 pt-6">
                        <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
                            <div className="mb-4 col-span-full xl:mb-2">
                                <NaverItem />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 pt-4 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
                            <SearchItem />
                        </div>
                        <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-5 ">
                            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                                <div className="w-full">
                                    <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">매체</h3>
                                    <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">2,340</span>
                                    <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                                        <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path></svg>
                                            12.5%
                                        </span>
                                        한달 전
                                    </p>
                                </div>
                            </div>
                            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                                <div className="w-full">
                                    <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">광고주</h3>
                                    <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">2,340</span>
                                    <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                                        <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path></svg>
                                            12.5%
                                        </span>
                                        한달 전
                                    </p>
                                </div>
                            </div>
                            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                                <div className="w-full">
                                    <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">광고대행사</h3>
                                    <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">2,340</span>
                                    <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                                        <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path></svg>
                                            12.5%
                                        </span>
                                        한달 전
                                    </p>
                                </div>
                            </div>
                            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                                <div className="w-full">
                                    <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">진행중</h3>
                                    <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">2,340</span>
                                    <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                                        <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path></svg>
                                            12.5%
                                        </span>
                                        한달 전
                                    </p>
                                </div>
                            </div>
                            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                                <div className="w-full">
                                    <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">대기중</h3>
                                    <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">2,340</span>
                                    <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                                        <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path></svg>
                                            12.5%
                                        </span>
                                        한달 전
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm mt-4 mb-4 dark:border-gray-700 p-4 sm:p-6 dark:bg-gray-800">
                            <div className="items-center justify-between lg:flex">
                                <div className="mb-4 lg:mb-0">
                                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">광고주 데이터</h3>
                                    <span className="text-base font-normal text-gray-500 dark:text-gray-400">매체, 광고주, 광고대행사 관련 데이터 테이블 입니다.</span>
                                </div>
                                <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
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
                                                            매체명
                                                        </th>
                                                        <th scope="col" colSpan={4} className="p-4 text-xs font-medium tracking-wider text-center text-gray-500  uppercase dark:text-white " >
                                                            광고주
                                                        </th>
                                                        <th scope="col" colSpan={4} className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white">
                                                            광고대행사
                                                        </th>
                                                        <th scope="col" rowSpan={2} className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                                                            진행여부
                                                        </th>
                                                        <th scope="col" rowSpan={2} className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                                                            랜딩관리
                                                        </th>
                                                        <th scope="col" rowSpan={2} className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                                                            매체관리
                                                        </th>
                                                        <th scope="col" rowSpan={2} className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                                                            무료체험관리
                                                        </th>
                                                        <th scope="col" rowSpan={2} className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                                                            메모
                                                        </th>
                                                    </tr>
                                                    <tr className="">
                                                        <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white" >광고주명</th>
                                                        <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white" >담당자</th>
                                                        <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white" >전화번호</th>
                                                        <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white" >이메일</th>
                                                        <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white" >광고대행사명</th>
                                                        <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">담당자</th>
                                                        <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white" >전화번호</th>
                                                        <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">이메일</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white dark:bg-gray-800">
                                                    <tr>
                                                        <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">1</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">test</td>
                                                        <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">test</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">test</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">test</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">test</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">test</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">test</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">test</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">test</td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">
                                                            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">
                                                                진행중
                                                            </span>
                                                        </td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">
                                                            <button type="button" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto bg-sky-600">
                                                                보기
                                                            </button>
                                                        </td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">
                                                            <button type="button" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto bg-sky-600">
                                                                보기
                                                            </button>
                                                        </td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">
                                                            <button type="button" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto bg-sky-600">
                                                                보기
                                                            </button>
                                                        </td>
                                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">
                                                            <textarea className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 datepicker-input" ></textarea>
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

export default AdvertiserManagement;