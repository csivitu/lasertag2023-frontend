import React from "react";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import { Tektur } from "next/font/google";
import { Chakra_Petch } from "next/font/google";
const tektur = Tektur({ subsets: ["latin"] });
const chakraPetch = Chakra_Petch({weight:'300' , subsets:['latin']});

export default function LastFooter() {
  return (
   <footer className="bg-footer w-full bg-no-repeat bg-cover h-[300px] relative ">
    <main className="absolute top-[40%]  flex flex-row justify-between items-center w-full px-[4rem]">
    <section className="flex justify-center items-start flex-col ">
    <h1 className={`${tektur.className} text-3xl text-white`}>Follow us</h1>
    <div className="flex flex-row flex-wrap justify-between items-start w-[60%] gap-[0.rem]">

    <Image width={48} height={48} src="/socials/Github.svg" alt="csiLogo" className="w-[48]"/>
    <Image width={48} height={48} src="/socials/Instagram.svg" alt="csiLogo" className="w-[48]"/>
    <Image width={48} height={48} src="/socials/LinkedIn.svg" alt="csiLogo" className="w-[48]"/>
    <Image width={48} height={48} src="/socials/X.svg" alt="csiLogo" className="w-[48]"/>
    <Image width={48} height={48} src="/socials/YouTube.svg" alt="csiLogo" className="w-[48]"/>
    <Image width={48} height={48} src="/socials/Threads.svg" alt="csiLogo" className="w-[48]"/>
    </div>
    </section>

    <Image width={100} height={100} src="/csiLogo.svg" alt="csiLogo" className="w-[350px]"/>

    <section>
      <h1 className={`${tektur.className} font-bold text-3xl`}>Visit</h1>
      <p className={`${chakraPetch.className} font-semibold text-xl`}>CSI Website</p>
      <p className={`${chakraPetch.className} font-semibold text-xl`}>Gallery</p>
      <p className={`${chakraPetch.className} font-semibold text-xl`}>Guide</p>
      <p className={`${chakraPetch.className} font-semibold text-xl`}>FAQ</p>
    </section>
    </main>
  

   </footer>
  );
}
