import React from 'react'
import 'tailwindcss/tailwind.css'
import Image from 'next/image'
import { Tektur } from 'next/font/google'
import Marquee from "react-fast-marquee";

const tektur = Tektur({subsets:['latin']})

export default function Footer() {
  return (
   
    
      
            <footer className  ={`${tektur.className} bg-footerImg2 h-full`} >
            <Image src = "/landingassests/Vector.svg" alt = "footervector" width = {194} height = {194} className = "w-full "/>
           <Marquee autoFill = {true} speed = {30} className = "overflow-hidden h-fit font-medium text-3xl"><p className = "mx-6">ARE YOU READY? </p><p className = "mx-6">TO FIGHT FOR YOUR TEAM</p></Marquee>
           </footer>
        





    
  )
}
