import React from "react";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import { Tektur } from "next/font/google";
const tektur = Tektur({ subsets: ["latin"] });

export default function Slot() {
  return (
    <>
      <div className="bg-black flex flex-col h-screen justify-between">
        <div className="flex flex-col items-center">
          <div className="px-36 py-14">
            <div className="flex flex-col items-center">
              <div className={`text-white text-center ${tektur.className} font-medium text-4xl px-12 pb-16 w-full`}></div>
              <div className={`flex flex-col items-center ${tektur.className} w-full`}>
                <div className="w-full flex justify-center mb-2">
                  <div className="relative flex flex-col items-center">
                    <Image src="/landingassests/Red.svg" alt="button" width={100} height={100} className="w-11/12 h-11/12 relative" />
                    <Image src="/landingassests/button.svg" alt="button" width={300} height={300} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-3/4" />
                    <p className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full text-white ${tektur.className} font-medium text-2xl font-bold text-center mt-32">
                      You have a limited time to join the <br />cyber-space and save us all.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
