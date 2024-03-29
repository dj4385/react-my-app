import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { INavItem } from "../models/INavItem";
import { LocalStorageService } from "../services/LocalStorage";
import { NotifierService } from "../services/Notifier";

const NavItems: INavItem[] = [
    {
        id: 1,
        name: 'Weather',
        route: '/dashboard',
        isActive: true
    },
    {
        id: 2,
        name: 'ToDo App',
        route: '/dashboard/todo',
        isActive: false
    },
    {
        id: 3,
        name: 'Chat',
        route: '/dashboard/chat',
        isActive: false
    },
]

const Navbar = () => {

    const [isNavBarVisible, setNabBarVisible] = useState(false);
    const navigate = useNavigate();

    const logout = () => {
        LocalStorageService.clearItem();
        NotifierService.showSuccess({
            message: 'Logout Successfully'
        })
        navigate('/');
    }
    
    return (
        <nav className="bg-black border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="React Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">React App</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={() => setNabBarVisible(!isNavBarVisible)}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className={isNavBarVisible ? `w-full md:block md:w-auto` : `hidden w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        {
                            NavItems && NavItems.length ? NavItems.map((item: INavItem) => (
                                <li key={item.id}>
                                    <Link to={item.route} className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500">
                                        {item.name}
                                    </Link>
                                </li>
                            ))  : null
                        }
                        <li>
                            <p onClick={logout} className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500">
                                Logout
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
