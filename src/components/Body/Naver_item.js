import { Link } from "react-router-dom";

const NaverItem = (propes) => {
    return (
        <>
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
                            <span className="ml-1 text-gray-400 md:ml-2 dark:text-gray-500" aria-current="page">광고주 관리</span>
                        </div>
                    </li>
                </ul>
            </nav>
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">광고주 관리</h1>
        </>
    );
}

export default NaverItem;