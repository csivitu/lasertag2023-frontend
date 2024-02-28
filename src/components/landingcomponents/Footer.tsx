import React from "react";
import Image from "next/image";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import { Tektur } from "next/font/google";
import { Chakra_Petch } from "next/font/google";
const tektur = Tektur({ subsets: ["latin"] });
const chakraPetch = Chakra_Petch({ weight: "300", subsets: ["latin"] });

export default function LastFooter() {
  return (
    <footer className="bg-black text-white w-full py-[10vh] flex">
      <main className="flex flex-col lg:flex-row justify-around items-center w-full tab:px-[4rem]  mobile:px-[1rem] gap-y-[4vh]">
        <section className="flex justify-center items-center flex-col w-fit ">
          <h1
            className={`${tektur.className} text-3xl max-sm:text-lg text-white mb-[2vh] font-bold`}>
            FOLLOW US
          </h1>
          <div className="flex flex-row flex-wrap tab:justify-between items-start w-[60%] gap-[1rem] max-md:ml-[10%]">
            <Link href="https://github.com/csivitu/">
              <Image
                width={48}
                height={48}
                src="/socials/GitHub.svg"
                alt="csiLogo"
                className="w-[48] tab:w-[48px]"
              />
            </Link>
            <Link href="https://instagram.com/csivitu">
              <Image
                width={48}
                height={48}
                src="/socials/Instagram.svg"
                alt="csiLogo"
                className="w-[48] tab:w-[48px]"
              />
            </Link>

            <Link href="https://www.linkedin.com/company/csivitu">
              <Image
                width={48}
                height={48}
                src="/socials/LinkedIn.svg"
                alt="csiLogo"
                className="w-[48] tab:w-[48px]"
              />
            </Link>

            <Link href="https://twitter.com/csivitu">
              <Image
                width={48}
                height={48}
                src="/socials/X.svg"
                alt="csiLogo"
                className="w-[48] tab:w-[48px]"
              />
            </Link>

            <Link href="https://youtube.com/@csivitu">
              <Image
                width={48}
                height={48}
                src="/socials/YouTube.svg"
                alt="csiLogo"
                className="w-[48] tab:w-[48px]"
              />
            </Link>
            <Link href="https://www.threads.net/@csivitu">
              <Image
                width={48}
                height={48}
                src="/socials/Threads.svg"
                alt="csiLogo"
                className="w-[48] tab:w-[48px]"
              />
            </Link>
          </div>
        </section>
        <Link href="https://csivit.com/">
          <Image
            width={100}
            height={100}
            src="/landingassests/logo.svg"
            alt="csiLogo"
            className="w-[80%] ml-[10%] md:ml-[0%]"
          />
        </Link>

        <section className="text-white">
          <h1
            className={`${tektur.className} font-bold text-3xl max-md:text-xl`}>
            VISIT
          </h1>
          <Link href="https://csivit.com/">
            <p
              className={`${chakraPetch.className} font-semibold text-xl max-md:text-lg`}>
              CSI WEBSITE
            </p>
          </Link>

          <Link href="/#gallery">
            <p
              className={`${chakraPetch.className} font-semibold text-xl max-md:text-lg`}>
              GALLERY
            </p>
          </Link>

          <Link href="/#guide">
            <p
              className={`${chakraPetch.className} font-semibold text-xl max-md:text-lg`}>
              GUIDE
            </p>
          </Link>
          <Link href="/#faq">
            <p
              className={`${chakraPetch.className} font-semibold text-xl max-md:text-lg`}>
              FAQ
            </p>
          </Link>
        </section>
      </main>
    </footer>
  );
}
