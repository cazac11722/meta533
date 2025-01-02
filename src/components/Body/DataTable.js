const DataTable = ({ data }) => {

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm mt-4 mb-4 dark:border-gray-700 p-4 sm:p-6 dark:bg-gray-800">
            <div className="items-center justify-between lg:flex">
                <div className="mb-4 lg:mb-0">
                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">광고주 데이터</h3>
                    <span className="text-base font-normal text-gray-500 dark:text-gray-400">매체, 광고주, 광고대행사 관련 데이터 테이블 입니다.</span>
                </div>
                <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
                    <button type="button" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto bg-sky-600">
                        <svg className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                        등록
                    </button>
                </div>
            </div>
            <div className="flex flex-col mt-6">
                <div className="overflow-x-auto rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden shadow sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                                <thead className="bg-gray-50 dark:bg-gray-700" >
                                    {
                                        data.thead.map((e, i) => (
                                            <tr key={`thead-row-${i}`}>
                                                {
                                                    e.data.map((v, no) => (
                                                        <th key={`thead-row-${i}-col-${no}`} scope="col" rowSpan={v.rowspan || 1} colSpan={v.colspan || 1} className={`p-4 text-xs font-medium tracking-wider text-${v.textAlign} text-gray-500 uppercase dark:text-white`}>
                                                            {v.title}
                                                        </th>
                                                    ))
                                                }
                                            </tr>
                                        ))
                                    }
                                </thead>
                                <tbody className="bg-white dark:bg-gray-800">
                                    {
                                        data.data.map((e, index) => (
                                            <tr key={`tbody-row-${index}`}>
                                                {

                                                    e.map((v, no) => (
                                                        <td key={`tbody-row-${index}-col-${no}`} className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                            {
                                                                no === 10 ?
                                                                    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">
                                                                        진행중
                                                                    </span> : v
                                                            }
                                                        </td>
                                                    ))
                                                }
                                                {/* <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">{index + 1}</td>
                                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">{e.Media}</td>
                                                <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">{e.advertiser}</td>
                                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">{e.advertiserManager}</td>
                                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">{e.advertiserPhone}</td>
                                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">{e.advertiserEmail}</td>
                                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">{e.advertising}</td>
                                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">{e.advertisingManager}</td>
                                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">{e.advertisingPhone}</td>
                                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">{e.advertisingEmail}</td>
                                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">
                                                    {
                                                        e.progress == 1 ?
                                                            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">
                                                                진행중
                                                            </span> : ''
                                                    }
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
                                                    <textarea className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 datepicker-input" >
                                                        {e.memo}
                                                    </textarea>
                                                </td> */}
                                            </tr>
                                        ))
                                    }

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
        </div >
    );
}

export default DataTable;