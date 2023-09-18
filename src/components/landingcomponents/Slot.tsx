import React from "react";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import { Tektur } from "next/font/google";
const tektur = Tektur({ subsets: ["latin"] });

export default function Slot() {
  return (
    <>
      <main className="bg-black h-screen flex justify-center items-center">
        <section className="tab:px-[6rem] tab:py-[8rem]  bg-frame bg-cover mobile:px-[2rem]">
          <div className="flex flex-col items-center justify-center gap-[2rem]">
            <div
              className={`${tektur.className} text-white text-center font-bold text-3xl`}
            >
              <span className="block ">
                You have a limited time to join the
              </span>
              <span className="block">cyber-space and save us all</span>
            </div>
            <button className="flex justify-center text-slotBookHeadingFontSize w-full">
              <Image
                src="/landingassests/button.svg"
                alt="button"
                width={1}
                height={1}
                className="w-6/12"
              />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
