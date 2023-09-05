import React from "react";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import { Tektur } from "next/font/google";

const tektur = Tektur({ subsets: ["latin"] });

export default function Guide() {
  return (
    <>
      <div className="bg-black flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <div className="px-4 lg:px-36 xl:px-36 py-14">
            <div className="flex flex-col items-center w-full">
              <div
                className={`text-white text-center ${tektur.className} font-medium text-4xl px-6 md:px-12 lg:px-24 xl:px-32 pb-8 md:pb-16 w-full`}
              >
                <p>Get All The Event Details Right Here</p>
              </div>
              <div
                className={`${tektur.className} flex flex-col lg:flex-row xl:flex-row w-full`}
              >
                <div
                  className={`text-white border-2 border-[#EA1429] px-6 md:px-12 lg:px-24 xl:px-24 py-12 xl:py-48 lg:py-48 mx-2 my-2 md:my-0 lg:my-0 xl:my-0 w-full lg:w-1/3 xl:w-1/3 text-2xl md:text-3xl lg:text-4xl xl:text-4xl hover:cursor-pointer`}
                >
                  Slot <br />
                  Booking
                </div>
                <div
                  className={`text-white border-2 border-[#EA1429] px-6 md:px-12 lg:px-24 xl:px-24 py-8 md:py-48 mx-2 my-2 md:my-0 lg:my-0 xl:my-0 w-full lg:w-1/3 xl:w-1/3 text-2xl md:text-3xl lg:text-4xl xl:text-4xl hover:cursor-pointer`}
                >
                  Event Day
                  <br /> Guidelines
                </div>
                <div
                  className={`text-white border-2 border-[#EA1429] px-6 md:px-12 lg:px-24 xl:px-24 py-8 md:py-48 mx-2 my-2 md:my-0 lg:my-0 xl:my-0 w-full lg:w-1/3 xl:w-1/3 text-2xl md:text-3xl lg:text-4xl xl:text-4xl hover:cursor-pointer`}
                >
                  How To
                  <br /> Contact Us
                </div>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
