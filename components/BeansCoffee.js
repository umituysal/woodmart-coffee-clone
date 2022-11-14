import Image from "next/image";
import React from "react";
import BeansImage from "../assets/w-coffee-parallax-scroll-1-opt.jpeg";
import CoffeeSvg from "../assets/w-coffee-svg-1.svg";

function BeansCoffee() {
  return (
    <div className="max-w-7xl md:mx-auto flex mx-4 lg:flex-row flex-col py-20">
      <div className="justify-center items-start w-full">
        <span>
          <CoffeeSvg />
        </span>
        <h4 className="text-[24px] md:text-[54px] leading-[74px] text-[#114639]">
          Finely ground coffee beans
        </h4>

        <p className="text-sm leading-[26px] text-[#777777] mt-5">
          Settling you has separate supplied bed. Concluded resembled suspected
          his resources curiosity joy. Led all cottage met enabled attempt
          through talking delight.
        </p>

        <div className="mt-10">
          <a
            href="#"
            className="bg-[#114639] text-white py-3 px-5 mr-4 uppercase text-sm"
          >
            read more
          </a>
          <a
            href="#"
            className="text-[#114639] bg-white py-3 px-5 uppercase text-sm"
          >
            view more
          </a>
        </div>
      </div>
      <div className="mt-16 lg:mt-0 flex justify-center items-center">
        <Image src={BeansImage} alt="beans" layout="fixed" />
      </div>
    </div>
  );
}

export default BeansCoffee;
