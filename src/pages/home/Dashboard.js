import Header from "../../components/PageLayout/Header";
import Sidebar from "../../components/PageLayout/Sideber";
import Footer from "../../components/PageLayout/Footer";
import LineChart from "../../components/Chart/LineChart";
import BadialBarChart from "../../components/Chart/RadialBarChart";

const Dashboard = () => {

  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <Header />
      <main className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        <div id="main-content" className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
          <div className="px-4 pt-6">
            <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-shrink-0">
                    <span className="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">무료 신청 요청시간</span>
                    <h3 className="text-base font-light text-gray-500 dark:text-gray-400">무료 신청 요청시간을 차트로 확인해 보세요.</h3>
                  </div>
                  <div className="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">
                    12.5%
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                <div id="main-chart">
                  <LineChart />
                </div>
              </div>
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">무료 체험 신청수
                    <button data-popover-target="popover-description" data-popover-placement="bottom-end" type="button"><svg className="w-4 h-4 ml-2 text-gray-400 hover:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg><span className="sr-only">Show information</span></button>
                  </h3>
                </div>
                <div>
                  <BadialBarChart />
                </div>
              </div>
            </div>
            <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
              <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div className="w-full">
                  <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">총 방문수</h3>
                  <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">2,340</span>
                  <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                    <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
                      </svg>
                      12.5%
                    </span>
                    한달 전
                  </p>
                </div>
              </div>
              <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div className="w-full">
                  <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">총 신청수</h3>
                  <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">2,340</span>
                  <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                    <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
                      </svg>
                      12.5%
                    </span>
                    한달 전
                  </p>
                </div>
              </div>
              <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div className="w-full">
                  <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">총 이탈수</h3>
                  <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">2,340</span>
                  <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                    <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
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
                  <button className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" type="button" data-dropdown-toggle="transactions-dropdown">Last 7 days <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>

    </div>

  );
};

export default Dashboard;
