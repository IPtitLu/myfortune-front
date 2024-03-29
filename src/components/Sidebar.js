import LogoMyFortune from "../Assets/myfortunelogo.png";
import { useLocation } from "react-router-dom";
import {
    FaBitcoin,
    FaChartLine,
    FaBuilding,
    FaPiggyBank,
    FaUserTie,
} from "react-icons/fa";

import LogoutButton from "../components/LogoutButton";

export function Sidebar() {
    const location = useLocation();
    return (
        <>
            <aside
                id="logo-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <div className="flex justify-center items-center mb-5">
                        <img
                            src={LogoMyFortune}
                            className="h-14"
                            alt="MyFortune Logo"
                        />
                    </div>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a
                                href="/dashboard"
                                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                                    location.pathname === "/dashboard"
                                        ? "bg-gray-100 dark:bg-gray-700"
                                        : ""
                                }`}
                            >
                                <svg
                                    className={`w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ${
                                        location.pathname === "/dashboard"
                                            ? "text-gray-900 dark:text-white"
                                            : ""
                                    }`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 21"
                                >
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ms-3">Dashboard</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                        <h3 className="p-2">Catégories</h3>
                        <li>
                            <a
                                href="/crypto"
                                className={`flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group ${
                                    location.pathname === "/crypto"
                                        ? "bg-gray-100 dark:bg-gray-700"
                                        : ""
                                }`}
                            >
                                <FaBitcoin
                                    className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ${
                                        location.pathname === "/crypto"
                                            ? "text-gray-900 dark:text-white"
                                            : ""
                                    }`}
                                />
                                <span className="ms-3">Crypto</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/action"
                                className={`flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group ${
                                    location.pathname === "/action"
                                        ? "bg-gray-100 dark:bg-gray-700"
                                        : ""
                                }`}
                            >
                                <FaChartLine
                                    className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ${
                                        location.pathname === "/action"
                                            ? "text-gray-900 dark:text-white"
                                            : ""
                                    }`}
                                />
                                <span className="ms-3">Action</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/immobilier"
                                className={`flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group ${
                                    location.pathname === "/immobilier"
                                        ? "bg-gray-100 dark:bg-gray-700"
                                        : ""
                                }`}
                            >
                                <FaBuilding
                                    className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ${
                                        location.pathname === "/immobilier"
                                            ? "text-gray-900 dark:text-white"
                                            : ""
                                    }`}
                                />
                                <span className="ms-3">Immobilier</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/epargne"
                                className={`flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group ${
                                    location.pathname === "/epargne"
                                        ? "bg-gray-100 dark:bg-gray-700"
                                        : ""
                                }`}
                            >
                                <FaPiggyBank
                                    className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ${
                                        location.pathname === "/epargne"
                                            ? "text-gray-900 dark:text-white"
                                            : ""
                                    }`}
                                />
                                <span className="ms-3">Epargne</span>
                            </a>
                        </li>
                    </ul>

                    <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                        <li>
                            <a
                                href="/compte"
                                className={`flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group ${
                                    location.pathname === "/compte"
                                        ? "bg-gray-100 dark:bg-gray-700"
                                        : ""
                                }`}
                            >
                                <FaUserTie
                                    className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ${
                                        location.pathname === "/compte"
                                            ? "text-gray-900 dark:text-white"
                                            : ""
                                    }`}
                                />
                                <span className="ms-3">Mon compte</span>
                            </a>
                        </li>
                        <li>
                            <LogoutButton location={location} />
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}
