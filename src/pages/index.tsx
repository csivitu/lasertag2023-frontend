import Navbar from "@/components/landingcomponents/Navbar";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

// import Guide from "@/components/landingcomponents/Guide";
// import Photo from "@/components/landingcomponents/Photo";
import FAQ from "@/components/landingcomponents/Faq";
import Footer from "@/components/landingcomponents/Footer";
import { checkExpiry } from "@/helpers/checkExpiry";
import { Tektur } from "next/font/google";
// import Reminder from "@/components/landingcomponents/Reminder";
// import Content from "@/components/landingcomponents/Content";

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
      <main className="bg-event bg-no-repeat bg-cover font-athiti flex justify-between items-center flex-col overflow-x-hidden  overflow-hidden">
        <section className="w-full h-[100vh] flex flex-col justify-between items-center  overflow-hidden">
          {/* <Navbar /> */}
          <div className="flex flex-col justify-center h-full items-center overflow-hidden">
            <Image
              width={100}
              height={100}
              alt="LogoLaserTag"
              src="/lasertaglogo.svg"
              className="overflow-hidden w-[100%]"
            />
            <button
              className={`${tektur.className} font-weird mt-[10vh] md:px-[5vw] py-[2vh] px-[10vw] bg-[#93FD10] rounded-full text-xl text-black drop-shadow-2xl`}
              style={{
                boxShadow: "0 10px 20px #93FD10",
              }}
              onClick={handleCTAClick}
              ref={ctaRef}
              suppressHydrationWarning>
              {checkExpiry() ? "Sign In" : "Book Slot"}
            </button>
          </div>
        </section>
      </main>
      {/* <Content />
      <Photo />
      <Guide /> */}
      <FAQ />
      {/* <Reminder /> */}
      <Footer />
    </>
  );
}
