import Image from "next/image";
import React, { useState } from "react";
import Logo from "../assets/wood-logo-dark.svg";
import {
  FiHeart,
  FiShoppingCart,
  FiRepeat,
  FiAlignJustify,
  FiX,
} from "react-icons/fi";
import Link from "next/link";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:max-w-7xl top-0 left-0 w-full lg:flex lg:justify-between lg:my-10 lg:px-8 lg:py-4 bg-white shadow-sm">
      <div className="flex justify-between items-center">
        <div className="hidden lg:block">
          <Logo />
        </div>
        <nav className="hidden lg:block md:ml-14">
          <ul className="flex uppercase font-medium text-sm font-sans ">
            <li className=" ">Home</li>
            <li className="pl-4">Shop</li>
            <li className="pl-4">Blog</li>
            <li className="pl-4">About</li>
            <li className="pl-4">Contact</li>
          </ul>
        </nav>
      </div>
      <div className="hidden lg:flex items-center uppercase font-medium text-sm font-sans">
        <span>LOGİN/REGİSTER</span>
        <ul className="flex">
          <li className="relative">
            <FiRepeat className="w-5 h-5  ml-6" />
            <div className="bg-[#114639] text-white w-5 h-5 rounded-2xl flex justify-center items-center absolute -mt-8 ml-10">
              <span className="text-white text-[10px]">0</span>
            </div>
          </li>
          <li>
            <FiHeart className="w-5 h-5 ml-6" />{" "}
            <div className="bg-[#114639] text-white w-5 h-5 rounded-2xl flex justify-center items-center absolute -mt-8 ml-10">
              <span className="text-white text-[10px]">0</span>
            </div>
          </li>
          <li>
            <FiShoppingCart className="w-5 h-5  ml-6" />{" "}
            <div className="bg-[#114639] text-white w-5 h-5 rounded-2xl flex justify-center items-center absolute -mt-8 ml-10">
              <span className="text-white text-[10px]">0</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-center px-4 lg:hidden">
        <div onClick={() => setOpen(!open)}>
          {open ? (
            <div className="w-[50%] absolute top-5 right-0 z-50">
              <FiX className="w-5 h-5  text-black " />
            </div>
          ) : (
            <FiAlignJustify className="w-5 h-5" />
          )}
        </div>
        <div>
          <Logo width="150px" />
        </div>
        <div>
          <FiShoppingCart className="w-5 h-5" />{" "}
          <div className="bg-[#114639] text-white w-5 h-5 rounded-2xl flex justify-center items-center absolute -mt-8 ml-4">
            <span className="text-white text-[10px]">0</span>
          </div>
        </div>
      </div>
      {open ? (
        <div className="absolute bg-white w-[60%] left-0 top-0 bottom-0 pt-16 right-0 min-h-screen z-40  md:hidden">
          <nav className="flex justify-start pl-10">
            <ul className="flex flex-col  items-start leading-10  text-black ">
              <li className="menu-hover">
                <Link href="/#">Home</Link>
              </li>
              <li className="menu-hover">
                <Link href="/#">Shop</Link>
              </li>
              <li className="menu-hover">
                <Link href="/#">About</Link>
              </li>
              <li className="menu-hover">
                <Link href="/#">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Navbar;
