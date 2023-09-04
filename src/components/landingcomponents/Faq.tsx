import React from "react";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import { Tektur } from "next/font/google";
const tektur = Tektur({ subsets: ["latin"] });

export default function FAQ() {
  return (
    <>
      <div className="bg-black flex flex-col h-screen justify-between">
        <div className="flex flex-col items-center">
          <div className="px-36 py-14">
            <div className="flex flex-col items-center">
              <div className={`text-white text-center ${tektur.className} font-medium text-4xl px-12 pb-16 w-full`}>
                <p>Got any questions</p>
              </div>
              <div className={`flex flex-col items-center ${tektur.className} w-full`}>
                <div className="w-full flex justify-center mb-2">
                  <div className="relative flex items-center">
                    <Image src="/landingassests/ques.svg" alt="button" width={100} height={100} className="w-11/12 h-11/12" />
                    <p className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full text-white text-xl font-bold pl-8 text-left">Who can participate in Laser Tag?</p>
                  </div>
                </div>
                <div className="w-full flex justify-center mb-2">
                  <div className="relative flex items-center">
                    <Image src="/landingassests/ques.svg" alt="button" width={100} height={100} className="w-11/12 h-11/12" />
                    <p className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full text-white text-xl font-bold pl-8 text-left">How long is the event for?</p>
                  </div>
                </div>
                <div className="w-full flex justify-center mb-2">
                  <div className="relative flex items-center">
                    <Image src="/landingassests/ques.svg" alt="button" width={100} height={100} className="w-11/12 h-11/12" />
                    <p className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full text-white text-xl font-bold pl-8 text-left">Can the other person get hurt?</p>
                  </div>
                </div>
                <div className="w-full flex justify-center mb-2">
                  <div className="relative flex items-center">
                    <Image src="/landingassests/ques.svg" alt="button" width={100} height={100} className="w-11/12 h-11/12" />
                    <p className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full text-white text-xl font-bold pl-8 text-left">Where do we register and what’s the fee?</p>
                  </div>
                </div>
                <div className="w-full flex justify-center mb-2">
                  <div className="relative flex items-center">
                    <Image src="/landingassests/ques.svg" alt="button" width={100} height={100} className="w-11/12 h-11/12" />
                    <p className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full text-white text-xl font-bold pl-8 text-left">How do I form a team?</p>
                  </div>
                </div>
                <div className="w-full flex justify-center mb-2">
                  <div className="relative flex items-center">
                    <Image src="/landingassests/ques.svg" alt="button" width={100} height={100} className="w-11/12 h-11/12" />
                    <p className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full text-white text-xl font-bold pl-8 text-left">What should I bring to the event?</p>
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
