import Image from "next/image";
import React from "react";
import Logo from "../assets/wood-logo-white.svg";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className=" mx-auto p-10 md:p-20  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="my-2  md:mt-0">
          <ul className="leading-[2em] text-gray-400">
            <li>
              <div className="mb-4 -mt-3">
                <Logo className="w-[170px] md:w-[200px]" />
              </div>
              <p className="text-gray-400 text-md w-[100%] md:w-[80%]">
                Condimentum adipiscing vel neque dis nam parturient orci at
                scelerisque neque dis nam parturient.
              </p>
            </li>
            <li>451 Wall Street, UK, London</li>
            <li> Phone: (064) 332-1233</li>
            <li>Fax: (099) 453-1357</li>
          </ul>
        </div>
        <div className="mt-2 md:mt-0">
          <h4 className="font-xs font-sans font-medium uppercase ">
            Our stores
          </h4>
          <ul className="mt-5 leading-[2em] text-gray-400">
            <li className="">New York</li>
            <li>London SF</li>
            <li>Cockfosters BP</li>
            <li>Los Angeles</li>
            <li>Chicago</li>
          </ul>
        </div>
        <div className="mt-2 md:mt-0">
          <h4 className="font-base font-sans font-medium uppercase">
            USEFUL LINKS
          </h4>
          <ul className="mt-5 leading-[2em] text-gray-400">
            <li>Privacy Policy</li>
            <li>Returns</li>
            <li>Latest News</li>
            <li>Los Angeles</li>
            <li>Our Sitemap</li>
          </ul>
        </div>
        <div className="mt-2 md:mt-0">
          <h4 className="font-xs font-sans font-medium uppercase">
            FOOTER MENU
          </h4>
          <ul className="mt-5 leading-[2em] text-gray-400">
            <li>Instagram profile</li>
            <li>New Collection</li>
            <li>Contact Us</li>
            <li>Latest News</li>
            <li>Purchase Theme</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
