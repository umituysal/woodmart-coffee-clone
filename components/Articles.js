import Image from "next/image";
import React from "react";
import Blog1 from "../assets/w-coffee-blog-1-opt-1.jpg.webp";
import Blog2 from "../assets/w-coffee-blog-2-opt-1.jpg.webp";
import Blog3 from "../assets/w-coffee-blog-3-opt-1.jpg.webp";
import Blog4 from "../assets/w-coffee-blog-4-opt-1.jpg.webp";
import Avatar from "../assets/avatar-home.jpg";
import { FiMessageSquare, FiShare2 } from "react-icons/fi";

function Articles() {
  return (
    <div className="max-w-7xl mx-auto  my-4 gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      <div className="mx-auto w-full rounded-lg relative bg-cover bg-no-repeat bg-center h-[450px]   my-2  bg-[url('../assets/w-coffee-blog-1-opt-1.jpg.webp')]">
        <div className="absolute inset-0 rounded-lg bg-gray-900 bg-opacity-75"></div>
        <div className="absolute top-4 left-4 px-3 bg-white flex text-center flex-col">
          <div className="text-[24px]">
            23{" "}
            <div className="font-sm font-semibold text-[12px] uppercase">
              jul
            </div>
          </div>
        </div>
        <div className="flex flex-col absolute items-center top-1/2 translate-y-1/2 w-full left-0 bottom-0 right-0">
          <div className="bg-[rgb(17,70,57)] w-[220px] rounded-md flex justify-center items-center">
            <a className="text-white font-sans text-[15px]">Design trends,</a>
            <a className="text-white font-sans text-[15px]">Hand made</a>
          </div>
          <div>
            {" "}
            <h4>
              <a className="text-white mb-2 text-[20px]">
                Green interior design inspiration
              </a>
            </h4>
          </div>
          <div className="flex justify-center items-center ">
            <div className="flex justify-center items-center">
              <span className="pr-2 text-gray-400 text-[13px]">Poster by</span>
              <Image
                src={Avatar}
                width={20}
                height={20}
                className="rounded-full"
                alt="img"
              />
              <span className="pl-2 text-white">S.Rogers</span>
            </div>
            <div className="px-2 relative">
              {" "}
              <span>
                {" "}
                <FiMessageSquare color="white" size={18} />
              </span>{" "}
              <span className="text-white text-[8px] p-[1px] rounded bg-[#114639] absolute -top-1 right-1">
                0
              </span>
            </div>
            <div className="px-2">
              <FiShare2 color="white" size={18} />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full rounded-lg relative bg-cover bg-no-repeat bg-center  my-2 h-[450px] bg-[url('../assets/w-coffee-blog-2-opt-1.jpg.webp')]">
        <div className="absolute inset-0 rounded-lg bg-gray-900 bg-opacity-75"></div>
        <div className="absolute top-4 left-4 px-3 bg-white flex text-center flex-col">
          <div className="text-[24px]">
            23{" "}
            <div className="font-sm font-semibold text-[12px] uppercase">
              jul
            </div>
          </div>
        </div>
        <div className="flex flex-col absolute items-center top-1/2 translate-y-1/2 w-full left-0 bottom-0 right-0">
          <div className="bg-[rgb(17,70,57)] w-[220px] rounded-md flex justify-center items-center">
            <a className="text-white font-sans text-[15px]">Design trends,</a>
            <a className="text-white font-sans text-[15px]">Hand made</a>
          </div>
          <div>
            {" "}
            <h4>
              <a className="text-white mb-2 text-[20px]">
                Green interior design inspiration
              </a>
            </h4>
          </div>
          <div className="flex justify-center items-center ">
            <div className="flex justify-center items-center">
              <span className="pr-2 text-gray-400 text-[13px]">Poster by</span>
              <Image
                src={Avatar}
                width={20}
                height={20}
                className="rounded-full"
                alt="img"
              />
              <span className="pl-2 text-white">S.Rogers</span>
            </div>
            <div className="px-2 relative">
              {" "}
              <span>
                {" "}
                <FiMessageSquare color="white" size={18} />
              </span>{" "}
              <span className="text-white text-[8px] p-[1px] rounded bg-[#114639] absolute -top-1 right-1">
                0
              </span>
            </div>
            <div className="px-2">
              <FiShare2 color="white" size={18} />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full rounded-lg relative bg-cover bg-no-repeat bg-center  my-2 h-[450px] bg-[url('../assets/w-coffee-blog-3-opt-1.jpg.webp')]">
        <div className="absolute inset-0 rounded-lg bg-gray-900 bg-opacity-75"></div>
        <div className="absolute top-4 left-4 px-3 bg-white flex text-center flex-col">
          <div className="text-[24px]">
            23{" "}
            <div className="font-sm font-semibold text-[12px] uppercase">
              jul
            </div>
          </div>
        </div>
        <div className="flex flex-col absolute items-center top-1/2 translate-y-1/2 w-full left-0 bottom-0 right-0">
          <div className="bg-[rgb(17,70,57)] w-[220px] rounded-md flex justify-center items-center">
            <a className="text-white font-sans text-[15px]">Design trends,</a>
            <a className="text-white font-sans text-[15px]">Hand made</a>
          </div>
          <div>
            {" "}
            <h4>
              <a className="text-white mb-2 text-[20px]">
                Green interior design inspiration
              </a>
            </h4>
          </div>
          <div className="flex justify-center items-center ">
            <div className="flex justify-center items-center">
              <span className="pr-2 text-gray-400 text-[13px]">Poster by</span>
              <Image
                src={Avatar}
                width={20}
                height={20}
                className="rounded-full"
                alt="img"
              />
              <span className="pl-2 text-white">S.Rogers</span>
            </div>
            <div className="px-2 relative">
              {" "}
              <span>
                {" "}
                <FiMessageSquare color="white" size={18} />
              </span>{" "}
              <span className="text-white text-[8px] p-[1px] rounded bg-[#114639] absolute -top-1 right-1">
                0
              </span>
            </div>
            <div className="px-2">
              <FiShare2 color="white" size={18} />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full rounded-lg relative bg-cover bg-no-repeat bg-center my-2 h-[450px] bg-[url('../assets/w-coffee-blog-4-opt-1.jpg.webp')]">
        <div className="absolute inset-0 rounded-lg bg-gray-900 bg-opacity-75"></div>
        <div className="absolute top-4 left-4 px-3 bg-white flex text-center flex-col">
          <div className="text-[24px]">
            23{" "}
            <div className="font-sm font-semibold text-[12px] uppercase">
              jul
            </div>
          </div>
        </div>
        <div className="flex flex-col absolute items-center top-1/2 translate-y-1/2 w-full left-0 bottom-0 right-0">
          <div className="bg-[rgb(17,70,57)] w-[220px] rounded-md flex justify-center items-center">
            <a className="text-white font-sans text-[15px]">Design trends,</a>
            <a className="text-white font-sans text-[15px]">Hand made</a>
          </div>
          <div>
            {" "}
            <h4>
              <a className="text-white mb-2 text-[20px]">
                Green interior design inspiration
              </a>
            </h4>
          </div>
          <div className="flex justify-center items-center ">
            <div className="flex justify-center items-center">
              <span className="pr-2 text-gray-400 text-[13px]">Poster by</span>
              <Image
                src={Avatar}
                width={20}
                height={20}
                className="rounded-full"
                alt="img"
              />
              <span className="pl-2 text-white">S.Rogers</span>
            </div>
            <div className="px-2 relative">
              {" "}
              <span>
                {" "}
                <FiMessageSquare color="white" size={18} />
              </span>{" "}
              <span className="text-white text-[8px] p-[1px] rounded bg-[#114639] absolute -top-1 right-1">
                0
              </span>
            </div>
            <div className="px-2">
              <FiShare2 color="white" size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
