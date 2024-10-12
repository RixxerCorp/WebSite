import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <>
      <nav className="relative bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/logo.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="Rixxer"
              style={{ width: "auto", height: "2rem" }}
            />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="loginButton text-white ease-in-out font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Login
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir o menu</span>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-14 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="menuItem block py-2 text-gray-900 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  style={{ paddingRight: "3rem", paddingLeft: "3rem" }}
                  aria-current="page"
                >
                  Portfolio &nbsp;
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">
                    265
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="menuItem block py-2 text-gray-900 rounded md:hover:bg-transparent md:p-0"
                  style={{ paddingRight: "3rem", paddingLeft: "3rem" }}
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="menuItem block py-2 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  style={{ paddingRight: "3rem", paddingLeft: "3rem" }}
                >
                  O Time
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
