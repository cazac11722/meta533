const SearchFilter = () => {
    return (
        <div className="grid grid-cols-1 pt-4 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm xl:col-span-3 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                    <span>기간별</span>
                    <button data-popover-target="popover-description" data-popover-placement="bottom-end" type="button">
                        <svg className="w-4 h-4 ml-2 text-gray-400 hover:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Show information</span>
                    </button>
                </h3>
                <div className="flex items-center mb-4 sm:mb-0">
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <span className="material-icons w-5 text-gray-500 dark:text-gray-400">
                                    today
                                </span>
                            </div>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 datepicker-input" placeholder="시작 날짜" />
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <span className="material-icons w-5 text-gray-500 dark:text-gray-400">
                                    today
                                </span>
                            </div>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 datepicker-input" placeholder="종료 날짜" />
                        </div>
                    </div>
                    <div className="ml-4">
                        <a href="#" className="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-primary-800">
                            오늘
                        </a>
                        <a href="#" className="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-white rounded-lg bg-gray-700 dark:bg-gray-600 dark:hover:bg-sky-700 dark:focus:ring-primary-800">
                            어제
                        </a>
                        <a href="#" className="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-white rounded-lg bg-gray-700 dark:bg-gray-600 dark:hover:bg-sky-700 dark:focus:ring-primary-800">
                            1주
                        </a>
                        <a href="#" className="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-white rounded-lg bg-gray-700 dark:bg-gray-600 dark:hover:bg-sky-700 dark:focus:ring-primary-800">
                            15일
                        </a>
                        <a href="#" className="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-white rounded-lg bg-gray-700 dark:bg-gray-600 dark:hover:bg-sky-700 dark:focus:ring-primary-800">
                            1개월
                        </a>
                        <a href="#" className="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-white rounded-lg bg-gray-700 dark:bg-gray-600 dark:hover:bg-sky-700 dark:focus:ring-primary-800">
                            3개월
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
                    <div className="xl:col-span-1">
                        <h3 className="flex items-center mb-4 mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                            <span>광고매체</span>
                            <button data-popover-target="popover-description" data-popover-placement="bottom-end" type="button">
                                <svg className="w-4 h-4 ml-2 text-gray-400 hover:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Show information</span>
                            </button>
                        </h3>
                        <div className="flex items-center space-x-4  w-full pr-2">
                            <div className="relative  w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <span className="material-icons w-5 text-gray-500 dark:text-gray-400">
                                        today
                                    </span>
                                </div>
                                <select className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 datepicker-input"  >
                                    <option>전체 매체</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-1">
                        <h3 className="flex items-center mb-4 mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                            <span>광고주</span>
                            <button data-popover-target="popover-description" data-popover-placement="bottom-end" type="button">
                                <svg className="w-4 h-4 ml-2 text-gray-400 hover:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Show information</span>
                            </button>
                        </h3>
                        <div className="flex items-center space-x-4  w-full pr-2">
                            <div className="relative  w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <span className="material-icons w-5 text-gray-500 dark:text-gray-400">
                                        today
                                    </span>
                                </div>
                                <select className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 datepicker-input"  >
                                    <option>전체 광고주</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-1">
                        <h3 className="flex items-center mb-4 mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                            <span>광고대행사</span>
                            <button data-popover-target="popover-description" data-popover-placement="bottom-end" type="button">
                                <svg className="w-4 h-4 ml-2 text-gray-400 hover:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Show information</span>
                            </button>
                        </h3>
                        <div className="flex items-center space-x-4  w-full pr-2">
                            <div className="relative  w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <span className="material-icons w-5 text-gray-500 dark:text-gray-400">
                                        today
                                    </span>
                                </div>
                                <select className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 datepicker-input"  >
                                    <option>전체 광고대행사</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchFilter;