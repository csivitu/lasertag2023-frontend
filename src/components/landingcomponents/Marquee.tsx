import React from "react";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import { Tektur } from "next/font/google";
import Marquee from "react-fast-marquee";

const tektur = Tektur({ subsets: ["latin"] });

export default function Footer() {
  return (
    <main
      className={`relative ${tektur.className} flex justify-center items-center bg-footerImg2 bg-cover mobile:h-[120px] bg-no-repeat laptopS:h-[170px]  tab:h-[150px]  `}
    >
      <Marquee
        autoFill={true}
        speed={30}
        className=" absolute laptopS:top-12 mobile:top-8 overflow-hidden  font-medium text-white text-3xl"
      >
        <p className=" text-black mx-6">ARE YOU READY? </p>
        <p className="text-black mx-6">TO FIGHT FOR YOUR TEAM</p>
      </Marquee>
    </main>
  );
}
