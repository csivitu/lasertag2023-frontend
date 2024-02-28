import React from "react";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import { Tektur } from "next/font/google";
import { checkExpiry } from "@/helpers/checkExpiry";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Link from "next/link";
const tektur = Tektur({ subsets: ["latin"] });

export default function Navbar() {
  const router = useRouter();
  const handleLogin = () => {
    if (!loggedIn) router.push("/login");
    else {
      Cookies.remove("jwtToken");
    }
  };

  const [loggedIn, setLoggedIn] = useState<boolean>();
  useEffect(() => {
    if (!checkExpiry()) {
      setLoggedIn(!checkExpiry());
    }
  }, []);

  return (
    <>
     
      

        <div className=" absolute top-0 rounded-full  bg-[#252525] text-[#93FD10] flex text-xl items-center right-0 z-10 mobile:translate-y-1/3 tab:translate-y-1/2">
          <div className={` tab:flex  justify-end ml-10 mr-0 ${tektur.className} font-medium mobile:hidden`}>
            <Link href="/#faq">
            <button className="hover:underline hover:rounded-full py-[0.5rem] px-[1rem] mr-20 transition-all duration-500">
              FAQs
            </button>
            </Link>
            <Link href="/#guide">
            <button className="hover:underline hover:rounded-full py-[0.5rem] px-[1rem] mr-20 transition-all duration-500">
              GUIDE
            </button>
            </Link>
            <Link href="/#gallery">
            <button className="hover:underline hover:rounded-full py-[0.5rem] px-[1rem] mr-20 transition-all duration-500">
              GALLERY
            </button>
            </Link>
            <button
              onClick={handleLogin}
              className="hover:bg-yellow-400 hover:rounded-[7px] py-[0.5rem] px-[1rem] transition-all duration-500 mr-20  hover:scale-[105%] hover:text-white"
            >
              {loggedIn ? "Sign Out" : "Sign In"}{" "}
            </button>
          </div>
          <button
              onClick={handleLogin}
              className="hover:underline hover:rounded-full py-[0.5rem] px-[1rem] transition-all duration-500 font-bold tab:hidden"
            >
              {loggedIn ? "Sign Out" : "Sign In"}{" "}
            </button>
        </div>
     
    </>
  );
}
