import { IoSearchSharp } from "react-icons/io5";

import { FaChevronLeft } from "react-icons/fa";
import Support from "./Svg/Support";
import { IoIosMic } from "react-icons/io";
import useSearch from "../zustand_store/searchbar";

const Header = () => {
  const open = useSearch((s) => s.open); // Zustand hook to track search bar state
  const toggle = useSearch((s) => s.toggleOpen); // Zustand hook to toggle search bar visibility

  return (
    <div className="w-full py-3 bg-white fixed top-0 shadow-[0px_4px_10px_rgba(0,0,0,0.2)] z-50">
      <div className="flex justify-between items-center px-6">
        {/* Header Title and Webmail Section */}
        <div
          className={`flex-1 items-center gap-4 ${open ? "hidden" : "flex"}`}
        >
          <h1 className="text-[#003D8F] font-bold font-serif text-2xl lg:text-3xl">
            iONOS
          </h1>
          <div className="hidden sm:block font-medium text-xl text-[#003D8F]">
            WEBMAIL LOGIN
          </div>
        </div>

        {/* Search Bar Section */}
        <div
          className={`flex-1 ${
            open ? "flex gap-4 items-center" : "hidden lg:block"
          }`}
        >
          {/* Back button to close search */}
          {open && (
            <button onClick={toggle} className="block lg:hidden">
              <FaChevronLeft size={20} />
            </button>
          )}

          <form className="w-full">
            <div className="flex sm:w-[550px] items-center border border-gray-400 p-1 rounded-lg">
              {/* Search Icon on the left */}
              <span className="pl-3 text-gray-400">
                <IoSearchSharp size={24} />
              </span>
              <input
                type="search"
                className="flex-grow border-none outline-none py-2 pl-2 pr-4 h-full text-sm lg:text-base placeholder:text-[11px] lg:placeholder:text-[16px]"
                placeholder="Search for features, domains, and help"
              />
              {/* Mic button on the right */}
              <button className="pr-3 text-gray-400 hover:text-blue-500">
                <IoIosMic size={24} />
              </button>
            </div>
          </form>
        </div>

        {/* Right-side Icons: Search and Support */}
        <div
          className={`flex-1 flex justify-end items-center text-blue-800 gap-3 ${
            open ? "hidden" : "flex"
          }`}
        >
          <IoSearchSharp
            onClick={toggle}
            className="lg:hidden text-4xl cursor-pointer"
          />
          <Support />
        </div>
      </div>
    </div>
  );
};

export default Header;
