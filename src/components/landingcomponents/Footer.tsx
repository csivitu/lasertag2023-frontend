import React from "react";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import { Tektur } from "next/font/google";
const tektur = Tektur({ subsets: ["latin"] });

export default function LastFooter() {
  return (
   <footer className="flex flex-row justify-between items-center bg-footer">
    <section className="flex justify-center items-start flex-col">
    <h1 className={`${tektur.className} text-3xl text-black`}>Follow us</h1>
    <div className="">

    </div>
    </section>
   </footer>
  );
}
