import React from "react";
import Image from "next/image";
import {useState,useEffect} from 'react'
import "tailwindcss/tailwind.css";
import { Tektur } from "next/font/google";
const tektur = Tektur({ subsets: ["latin"] });

export default function FAQ() {
const [expand1,setExpand1]= useState<boolean>(false)
const [expand2,setExpand2]= useState<boolean>(false)
const [expand3,setExpand3]= useState<boolean>(false)
const [expand4,setExpand4]= useState<boolean>(false)
const [expand5,setExpand5]= useState<boolean>(false)



  return (
    <main className={`${tektur.className} flex justify-between items-center flex-col gap-[1rem] bg-black text-white`  }>
      <p className="font-bold text-5xl">FAQ's</p>
      <section className="flex flex-col justify-center items-center  font-semibold w-[75%] gap-[1rem] ">
  
       
            <div className="flex flex-col justify-center items-center bg-faqMain w-[75%] bg-no-repeat bg-cover p-[14px] gap-[0.5rem]" onClick={() => {
          setExpand4(!expand4);
        }}>
        Who can take part in LaserTag?
      <div
        className={`font-normal text-l p-[14px] transition-all duration-500 ease-in-out ${
          expand4 ? 'max-h-[1000px]' : 'max-h-0 overflow-hidden'
        }`} 
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ducimus impedit repellat eaque, quo quibusdam consequuntur neque saepe hic deserunt, provident sunt ad expedita aut sapiente minus repellendus iste suscipit?
      </div>
     
    </div>
    
    
       
      </section>
    </main>
  );
}
