import { FaSignOutAlt } from "react-icons/fa";

const LogoutButton = ({ location }) => {
    const handleLogout = async () => {
        // Supprimer les tokens en local storage
        localStorage.removeItem("token");
        localStorage.removeItem("userFetched");
        window.location.reload();
    };

    return (
        <button
            onClick={handleLogout}
            className={`flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group`}
        >
            <FaSignOutAlt
                className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ${
                    location.pathname === "/logout"
                        ? "text-gray-900 dark:text-white"
                        : ""
                }`}
            />
            <span className="ms-3">Se déconnecter</span>
        </button>
    );
};

export default LogoutButton;
