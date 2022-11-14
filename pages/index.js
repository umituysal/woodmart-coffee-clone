import BeansCoffee from "../components/BeansCoffee";
import dynamic from "next/dynamic";
import React from "react";
import ShopCoffee from "../components/ShopCoffee";

const Navbar = dynamic(() => import("../components/Navbar"));
const Banner = dynamic(() => import("../components/Banner"));
const Articles = dynamic(() => import("../components/Articles"));
const Footer = dynamic(() => import("../components/Footer"));

export default function Home() {
  return (
    <>
      <div className="relative bg-[#f3f3f3]">
        <div className="max-w-7xl left-0 right-0  mx-auto absolute z-10">
          <Navbar />
        </div>
        <Banner />
        <ShopCoffee />
        <BeansCoffee />
        <Articles />
      </div>
      <Footer />
    </>
  );
}
