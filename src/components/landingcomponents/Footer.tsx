import React from 'react'
import 'tailwindcss/tailwind.css'
import Image from 'next/image'
import { Tektur } from 'next/font/google'
import Marquee from "react-fast-marquee";

const tektur = Tektur({subsets:['latin']})

export default function Footer() {
  return (
   
    
        <footer className = "relative flex justify-center items-center">
           
                <div className='bg-footerImg h-full absolute top-0 left-0 w-full '></div>
                <Marquee className='h-[120px] absolute top-[25%] text-2xl  font-medium' speed = {200} autoFill = {true}><p className = "mx-4">Are You Ready?</p><p className = "m-4">To Fight For Your Team</p></Marquee>
           
        </footer>





    
  )
}
