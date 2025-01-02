import { Link } from "react-router-dom";

const AddressOrganization = ({ data }) => {
    return (
        <>
            <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
                <div className="mb-4 col-span-full xl:mb-2">
                    <nav className="flex mb-5">
                        <ul className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                            {/* Dynamically render breadcrumb items */}
                            {data.map((e, index) => (
                                <li key={index} className="inline-flex items-center">
                                    {index === 0 ? (
                                        <Link to={e.href} className="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500">
                                            <span className="material-icons w-5 h-5 mr-2.5">
                                                home
                                            </span>
                                            {e.title}
                                        </Link>
                                    ) : (
                                        <div className="flex items-center">
                                            <span className="material-icons w-6 h-6 text-gray-400">
                                                keyboard_arrow_right
                                            </span>
                                            <span className="ml-1 text-gray-400 md:ml-2 dark:text-gray-500" aria-current="page">
                                                {e.title}
                                            </span>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {/* Render the page title dynamically */}
                    <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                        {data[data.length - 1].title}
                    </h1>
                </div>
            </div>
        </>
    );
}

export default AddressOrganization;
