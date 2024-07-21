import { BiShoppingBag } from "react-icons/bi";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Service", "Product", "Contact us"];
export function Nav() {
  const [isMobileMenuShow, setIsMobileMenuShow] = useState(true);
  const toggleMenu = () => {
    setIsMobileMenuShow((prev) => !prev);
  };

  return (
    <nav className="flex justify-between items-center flex-wrap">
      {/* Logo */}
      <a href="">
        <NikeLogo className="h-20 w-20" />
      </a>
      <button
        onClick={toggleMenu}
        className="hover:bg-gray-100 p-3 focus:ring-1 focus:ring-gray-400 rounded-lg lg:hidden"
      >
        <RxHamburgerMenu size={24} />
      </button>

      {/* Menu list */}
      <div
        className={`w-full lg:w-auto  lg:block ${!isMobileMenuShow ? "hidden" : ""}`}
      >
        <ul
          className="flex flex-col transition-opacity
           lg:flex-row  lg:space-x-4 bg-gray-50 lg:bg-transparent  text-lg border-gray-100 lg:border-none"
        >
          {ROUTES.map((route, i) => {
            return (
              <li
                key={route}
                className={`px-3 py-2 cursor-pointer rounded-lg
                ${i == 0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500 " : "hover:bg-gray-100"}`}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>

      {/* cart button */}
      <div className="fixed left-4 bottom-4 lg:static">
        <div className="h-12 w-12 rounded-full bg-white shadow-md flex-center">
          <BiShoppingBag />
        </div>
      </div>
    </nav>
  );
}
