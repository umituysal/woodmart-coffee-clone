import React from "react";
import Image from "next/image";
import BannerCoffee from "../assets/w-coffee-banner-1-opt.jpg.webp";
import BannerCoffee2 from "../assets/w-coffee-banner-2-opt-1.jpg.webp";

function ShopCoffee() {
  return (
    <div className="max-w-7xl mx-auto mt-20 flex flex-col md:flex-row justify-between">
      <div className="relative">
        <Image src={BannerCoffee} alt="logo" className="w-full" />
        <div className="absolute z-auto p-4 -mt-2 md:-mt-[225px] md:p-8 bg-[#f3f3f3] w-full md:w-[60%]">
          <h1 className="text-xl md:text-4xl text-[#114639] mb-4">
            Check out our coffee shop
          </h1>
          <p className="font-sans text-[12px] md:text-base text-[#777777] mb-4">
            Design is no afterthought, far from.
          </p>
          <div>
            <span className="uppercase text-xs md:text-sm">Find us</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="text-center mt-12">
          <h1 className="text-4xl text-[#114639] mb-2 tracking-wide">
            Try new flavors first
          </h1>
          <p className="font-sans text-base mb-2 text-[#777777]">
            You come to the point, make things.
          </p>
          <div>
            <span className="uppercase text-sm border-b-2 border-b-[#114639]">
              contact us
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={BannerCoffee2}
            alt="logo"
            className="object-contain w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default ShopCoffee;
