import Image from "next/image";
import React from "react";
import Banner1 from "../assets/wd-coffee-slide-1.jpeg";
function Banner() {
  return (
    <div>
      <div className="relative h-[500px] md:h-[700px]">
        <Image
          src={Banner1}
          priority
          layout="fill"
          objectFit="cover"
          alt="test"
        />
        <div className="md:max-w-7xl px-4 absolute top-0 right-0 bottom-0 left-0  translate-y-1/3 md:mx-auto">
          <h1 className="text-[54px] font-sans font-semibold leading-[48px] md:text-5xl lg:text-[54px] md:leading-[54px] lg:leading-[74px] text-[#114639] sm:w-1/2">
            Everything you need to know coffee
          </h1>
          <p className="text-xs font-normal md:text-base sm:w-1/2 lg:text-lg leading-[26px] text-[#777777] mt-5">
            Settling you has separate supplied bed. Concluded resembled layout
            suspected his resources curiosity joy. Led all cottage met enabled
            attempt through talking delight. Dare he feet my tell busy.
          </p>
          <div className="mt-8 md:mt-10">
            <a
              href="#"
              className="bg-[#114639] text-white py-3 px-5 mr-4 uppercase text-xs md:text-sm"
            >
              read more
            </a>
            <a
              href="#"
              className="text-[#114639] bg-white py-3 px-5 uppercase text-xs md:text-sm"
            >
              view more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
