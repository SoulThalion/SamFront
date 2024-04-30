import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ExitIcon from "../icons/ExitIcon";
import MenuIcon from "../icons/MenuIcon";
import UserIcon from "../icons/UserIcon";
import ClientsButton from "./buttons/ClientsButton";
import LogOutButton from "./buttons/LogOutButton";
import OrdersButton from "./buttons/OrdersButton";
import UsersButton from "./buttons/UsersButton";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsDrawerOpen(false);  // Cerrar el drawer cada vez que cambia la ruta
  }, [location]);

  return (
    <>
      <nav
        className="fixed top-0 z-50 w-full border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 text-white bg-[#1c1d20]"
      >
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                className="text-white mt-0 hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                type="button"
                onClick={() => setIsDrawerOpen(!isDrawerOpen)} // Alternar visibilidad del drawer
                aria-controls="drawer-navigation"
              >
                <MenuIcon />
              </button>

              <a href="/" className="flex ms-2 md:me-24">
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  SAM
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open user menu</span>
                    <UserIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Menus */}
      <div
        id="drawer-navigation"
        className={`fixed mt-4 top-12 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} border-r border-gray-200 bg-[#1c1d20]`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-white uppercase"
        >
          Menu
        </h5>
        <button
          type="button"
          onClick={() => setIsDrawerOpen(false)} // Cerrar el drawer
          className="text-white bg-transparent hover:bg-gray-800 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center"
        >
          <ExitIcon />
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <OrdersButton />
            <ClientsButton />
            <UsersButton />
            <LogOutButton />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;