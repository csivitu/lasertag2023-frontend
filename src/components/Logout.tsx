import React from "react";
import "tailwindcss/tailwind.css";
import { Tektur } from "next/font/google";
import { Chakra_Petch } from "next/font/google";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
const tektur = Tektur({ subsets: ["latin"] });
const chakraPetch = Chakra_Petch({ weight: "300", subsets: ["latin"] });

export default function Logout() {
  const router = useRouter();
  const handleLogout = (event: any) => {
    Cookies.remove("jwtToken");
    router.push("/");
  };

  return (
    <button
      className={`${chakraPetch.className} rounded-[6px] font-semibold px-[1rem] py-[0.5rem] bg-[#93FD10] text-black absolute top-5 right-5  transition-all duration-500 hover:scale-[105%] hover:text-black`}
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}
