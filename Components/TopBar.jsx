import HeadSVG from "./HeaderSVG";
import MenuIcon from "../Icons/Menuicon";
import { useState } from "react";
// import { useLocation } from "react-router-dom";

function TopBar() {
  // const pathname = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibleNav = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {isVisible && (
        <nav className="fixed top-0 left-0 h-screen w-full bg-textColor z-50 text-[1.1rem] font-semibold 2xl:hidden xl:hidden lg:hidden  md:hidden sm:block xs:block">
          <ul className="pt-[2rem]">
            <li className=" text-center py-[1rem] my-[2px] hover:bg-iconsColor active:bg-clickedLink mx-auto">
              <a
                href="#homePage"
                onClick={handleVisibleNav}
                className="py-[1rem] px-[20%]"
              >
                HOME{" "}
              </a>
            </li>
            <hr className="w-[70%] mx-auto bg-gray-500" />
            <li className=" text-center py-[1rem] my-[2px] hover:bg-iconsColor active:bg-clickedLink mx-auto">
              <a
                href="#"
                onClick={handleVisibleNav}
                className="py-[1rem] px-[20%]"
              >
                PORTFOLIO{" "}
              </a>
            </li>
            <hr className="w-[70%] mx-auto bg-gray-500" />
            <li className=" text-center py-[1rem] my-[2px] hover:bg-iconsColor active:bg-clickedLink mx-auto">
              <a
                href="#"
                onClick={handleVisibleNav}
                className="py-[1rem] px-[20%]"
              >
                ABOUT US{" "}
              </a>
            </li>
            <hr className="w-[70%] mx-auto bg-gray-500" />
            <li className=" text-center py-[1rem] my-[2px] hover:bg-iconsColor active:bg-clickedLink mx-auto">
              <a
                href="#"
                onClick={handleVisibleNav}
                className="py-[1rem] px-[20%]"
              >
                CONTACT US{" "}
              </a>
            </li>
          </ul>
        </nav>
      )}
      <header className="fixed top-0 left-0 h-[65px] w-full bg-topBarColor flex justify-between items-center lg:px-[20px] md:px-[10px] xs:h-[55px] border-b-solid border-b-white border-b-[1px] border-opacity-[.5] z-[49]">
        <HeadSVG />
        <button
          onClick={handleVisibleNav}
          className="w-[35px] h-[35px] bg-transparent border-none mr-[10px]"
        >
          <MenuIcon />
        </button>
        <ul className="flex lg:w-[50%] text-center lg:flex md:flex md:w-[50%] sm:hidden xs:hidden">
          <li
            className={`text-[14.7px] flex-grow text-white transition-colors duration-100 cursor-pointer hover:text-white/75 active:text-white/50`}
          >
            {" "}
            <a href="#homePage" className="">
              HOME
            </a>
          </li>
          <li
            className={`text-[14.7px] flex-grow text-white transition-colors duration-100 cursor-pointer hover:text-white/75 active:text-white/50`}
          >
            {" "}
            <a href="#aboutPage" className="">
              PORTFOLIO
            </a>
          </li>
          <li
            className={`text-[14.7px] flex-grow text-white transition-colors duration-100 cursor-pointer hover:text-white/75 active:text-white/50`}
          >
            {" "}
            <a href="#" className="">
              ABOUT US
            </a>
          </li>
          <li
            className={`text-[14.7px] flex-grow text-white transition-colors duration-100 cursor-pointer hover:text-white/75 active:text-white/50`}
          >
            {" "}
            <a href="#" className="">
              CONTACT US
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}
export default TopBar;
