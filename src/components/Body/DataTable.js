
const DataTable = ({ data }) => {
    return (
        <>
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
                                                        <td key={`tbody-row-${index}-col-${no}`} className="p-4 text-sm text-center font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                            <div dangerouslySetInnerHTML={{ __html: v }} />
                                                        </td>
                                                    ))
                                                }
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
        </>
    );
}

export default DataTable;