import Navbar from "@/components/landingcomponents/Navbar";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import Marquee from "@/components/landingcomponents/Marquee";
import Photo from "@/components/landingcomponents/Photo";
import FAQ from "@/components/landingcomponents/Faq";
import Footer from "@/components/landingcomponents/Footer";
import { checkExpiry } from "@/helpers/checkExpiry";
import { Tektur } from "next/font/google";
const tektur = Tektur({ subsets: ["latin"] });

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
    <main className="bg-black flex justify-between items-center flex-col overflow-x-hidden gap-[3rem]">
      <section className="w-full h-[101vh] flex flex-col justify-between items-center  overflow-hidden">
        <Navbar />
        <div className="relative flex justify-center items-center overflow-hidden">
          <Image
            width={100}
            height={100}
            alt="LogoLaserTag"
            src="/lasertaglogo.webp"
            className="laptopS:w-[100%] overflow-hidden tab:w-full mobile:w-[580px] mobile:h-[320px]"
          />
          <button
            className={`${tektur.className} tab:w-[250px] tab:h-[60px] bg-buttonImg font-bold text-xl object-fill absolute top-[70%] bg-no-repeat text-black left-[50%] translate-x-[-54%] laptopS:translate-x-[-60%] mobile:w-[250px] mobile:h-[60px]`}
            onClick={handleCTAClick}
            ref={ctaRef}
            suppressHydrationWarning
          >
            {checkExpiry() ? "Sign In" : "Book Now"}
          </button>
        </div>

        <Marquee />
      </section>

      <Photo />
      <FAQ />
      <Footer />
    </main>
  );
}
