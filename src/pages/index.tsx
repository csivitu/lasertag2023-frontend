import Navbar from "@/components/landingcomponents/Navbar";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";
import Image from "next/image";

import Guide from "@/components/landingcomponents/Guide";
import Photo from "@/components/landingcomponents/Photo";
import FAQ from "@/components/landingcomponents/Faq";
import Footer from "@/components/landingcomponents/Footer";
import { checkExpiry } from "@/helpers/checkExpiry";
import { Tektur } from "next/font/google";
import Reminder from "@/components/landingcomponents/Reminder";
import Content from "@/components/landingcomponents/Content";

const tektur = Tektur({ subsets: ["latin"] });

//million-ignore
export default function Landing() {
  const router = useRouter();
  const ctaRef = useRef<HTMLButtonElement>(null);

  const handleCTAClick = () => {
    if (!checkExpiry()) {
      router.push("/slotbook");
    } else {
      router.push("/login");
    }
  };

  useEffect(() => {
    if (!checkExpiry()) {
      router.push("/slotbook");
    }
  }, []);

  return (
    <>
      <main className="bg-event font-athiti flex justify-between items-center flex-col overflow-x-hidden  overflow-hidden">
        <section className="w-full h-[100vh] flex flex-col justify-between items-center  overflow-hidden">
          <Navbar />
          <div className="absolute top-[50%] h-full left-[50%] translate-y-[-50%] translate-x-[-50%] flex justify-between items-center overflow-hidden">
            <Image
              width={100}
              height={100}
              alt="LogoLaserTag"
              src="/lasertaglogo.svg"
              className="laptopS:w-[100%] overflow-hidden tab:w-[70vw] mobile:w-[580px] mobile:h-[260px]"
            />
            <button
              className={`${tektur.className} md:mt-4 rounded-full tab:w-[250px] tab:h-[60px] bg-[#93FD10] font-bold text-xl object-fill absolute top-[70%] bg-no-repeat text-black left-[50%] translate-x-[-50%] laptopS:translate-x-[-52%] mobile:w-[250px] mobile:h-[60px]`}
              onClick={handleCTAClick}
              ref={ctaRef}
              suppressHydrationWarning
            >
              {checkExpiry() ? "Sign In" : "Book Now"}
            </button>
          </div>


        </section>

      </main>
      <Content />
      <Photo />
      <Guide />
      <FAQ />
      <Reminder />
      <Footer />
    </>

  );
}
