import { Link } from "react-router-dom";

const SidebarItem = (propes) => {
    return (
        <Link to={propes.href} className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
            <span className="material-icons">
                {propes.icon}
            </span>
            <span className="ml-3" sidebar-toggle-item="">{propes.name}</span>
        </Link>
    );
}

export default SidebarItem;