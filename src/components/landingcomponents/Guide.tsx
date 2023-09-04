import React from "react";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import { Tektur } from "next/font/google";

const tektur = Tektur({ subsets: ["latin"] });

export default function Guide() {
  return (
    <>
      <div className="relative bg-black flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <div className="px-auto py-14">
            <div className="flex flex-col items-center">
              <div
                className={`text-white text-center ${tektur.className} font-medium text-4xl px-12 pb-16 w-full`}
              >
                <p>Get All The Event Details Right Here</p>
              </div>
              <div
                className={`${tektur.className} relative flex xl:flex-row lg:flex-row md:flex-col sm:flex-col`}
              >
                <div
                  className={`relative text-white border-2 border-[#EA1429] px-12 py-48 mx-2 w-1/3 text-3xl hover:cursor-pointer`}
                >
                  Slot <br />
                  Booking
                </div>
                <div
                  className={`relative text-white border-2 border-[#EA1429] px-12 py-48 mx-2 w-1/3 text-3xl hover:cursor-pointer`}
                >
                  Event Day Guidelines
                </div>
                <div
                  className={`relative text-white border-2 border-[#EA1429] px-12 py-48 mx-2 w-1/3 text-3xl hover:cursor-pointer`}
                >
                  How To Contact Us
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
