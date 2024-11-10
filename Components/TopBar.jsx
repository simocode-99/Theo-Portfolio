import HeadSVG from "./HeaderSVG";
import MenuIcon from "../Icons/Menuicon";
import { useState } from "react";
// import { useLocation } from "react-router-dom";

function TopBar() {
  // const pathname = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibleNav = () => {
    setIsVisible(
      isVisible
        ? (e) => (e.target.style.display = "block")
        : (e) => (e.target.style.visibility = "hidden")
    );
  };

  return (
    <>
      <nav className="h-screen w-full bg-textColor z-50 text-[1.1rem] font-semibold 2xl:hidden xl:hidden lg:hidden md:hidden xs:hidden">
        <ul className="pt-[2rem]">
          <li className=" text-center py-[1rem] my-[5px]">
            <a href="#">HOME </a>
          </li>
          <hr className="w-[70%] mx-auto bg-gray-500" />
          <li className=" text-center py-[1rem] my-[5px]">
            <a href="#">PORTFOLIO </a>
          </li>
          <hr className="w-[70%] mx-auto bg-gray-500" />
          <li className=" text-center py-[1rem] my-[5px]">
            <a href="#">ABOUT US </a>
          </li>
          <hr className="w-[70%] mx-auto bg-gray-500" />
          <li className=" text-center py-[1rem] my-[5px]">
            <a href="#">CONTACT US </a>
          </li>
        </ul>
      </nav>
      <header className="h-[65px] w-full bg-topBarColor flex justify-between items-center lg:px-[20px] md:px-[10px] ">
        <HeadSVG />
        <MenuIcon onclick={handleVisibleNav} />
        <ul className="flex lg:w-[45%] text-center lg:flex md:flex md:w-[50%] sm:hidden xs:hidden">
          <li
            className={`text-[14px] flex-grow text-white transition-all duration-200 cursor-pointer  `}
          >
            {" "}
            <a href="#homePage" className="">
              HOME
            </a>
          </li>
          <li
            className={`text-[14px] flex-grow text-white transition-all duration-200 cursor-pointer `}
          >
            {" "}
            <a href="#aboutPage" className="">
              PORTFOLIO
            </a>
          </li>
          <li
            className={`text-[14px] flex-grow text-white transition-all duration-200 cursor-pointer `}
          >
            {" "}
            <a href="#" className="">
              ABOUT US
            </a>
          </li>
          <li
            className={`text-[14px] flex-grow text-white transition-all duration-200 cursor-pointer `}
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
