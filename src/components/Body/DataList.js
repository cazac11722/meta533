const DataList = ({ data, cols }) => {

    cols = `xl:grid-cols-${cols}`;
    return (
        <div className={`grid w-full grid-cols-1 gap-4 mt-4 ${cols}`}>
            {
                data.map((e, index) => (
                    <div key={index} className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                        <div className="w-full">
                            <h3 className="text-base font-normal text-gray-500 dark:text-gray-400 mb-2">{e.title}</h3>
                            {typeof e.value == 'object' ? 
                            <>
                            <div className="flex items-center mb-2">
                                <div className="w-40 mr-10 text-sm font-medium dark:text-white sm:text-3xl">방문수</div>
                                <div className="w-16 text-sm font-medium dark:text-white sm:text-2xl">1,500</div>
                            </div>
                            <div className="flex items-center mb-2">
                                <div className="w-40 mr-10 text-sm font-medium dark:text-white sm:text-3xl">방문당 비용</div>
                                <div className="w-16 text-sm font-medium dark:text-white sm:text-2xl">1,000</div>
                            </div>
                            <div className="flex items-center mb-2">
                                <div className="w-40 mr-10 text-sm font-medium dark:text-white sm:text-3xl">이탈율</div>
                                <div className="w-16 text-sm font-medium dark:text-white sm:text-2xl">3%</div>
                            </div>
                            </>
                                : <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">{e.value.toLocaleString('ko-KR')}</span>
                            }

                            <p className={`flex items-center text-base font-normal text-gray-500 dark:text-gray-400 ${e.percent || 'hidden'}`}>

                                <span className={`flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400`}>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path></svg>
                                    {e.percent}%
                                </span>
                                한달 전
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default DataList;