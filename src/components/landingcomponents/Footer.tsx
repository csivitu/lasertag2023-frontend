import React from 'react'
import 'tailwindcss/tailwind.css'
import Image from 'next/image'
import { Tektur } from 'next/font/google'
import Marquee from "react-fast-marquee";

const tektur = Tektur({subsets:['latin']})

export default function Footer() {
  return (
   
    
      
            <footer className  ={`relative ${tektur.className}`}>
            <Image src = "/landingassests/footervector.svg" alt = "footervector" width = {1} height = {1} className = "w-full absolute bottom-0 "/>
           <Marquee autoFill = {true} speed = {30} className = "overflow-hidden h-fit font-medium text-3xl   absolute bottom-16"><p className = "mx-6">ARE YOU READY? </p><p className = "mx-6">TO FIGHT FOR YOUR TEAM</p></Marquee>
           </footer>
        





    
  )
}
