import React from "react";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import { Tektur } from "next/font/google";
import Marquee from "react-fast-marquee";

const tektur = Tektur({ subsets: ["latin"] });

export default function Footer() {
  return (
    <main
      className={`relative ${tektur.className} flex justify-center items-center bg-footerImg2 bg-contain mobile:h-[120px] tab:h-[150px]  `}
    >
      <Marquee
        autoFill={true}
        speed={30}
        className=" absolute top-6 overflow-hidden h-fit font-medium text-white text-3xl"
      >
        <p className=" text-black mx-6">ARE YOU READY? </p>
        <p className="text-black mx-6">TO FIGHT FOR YOUR TEAM</p>
      </Marquee>
    </main>
  );
}
