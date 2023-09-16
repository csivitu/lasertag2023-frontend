import Navbar from '@/components/landingcomponents/Navbar';
import React from 'react'
import "tailwindcss/tailwind.css";
import Image from 'next/image';
import Footer from '@/components/landingcomponents/Footer';


export default function Landing(){
  return (
    
    <>
    <div className = "bg-black min-h-screen w-full flex flex-col justify-between">
      
        <Navbar/>
      
      <div className = "flex flex-col items-center">
        <div className = "flex justify-center w-full">
           <Image src = "/landingassests/Final_2.gif" alt = "image" width = {1} height = {1} className = "w-6/12 h-fit"/>
        </div>
        <button className = "flex justify-center w-full">
          <Image src = "/landingassests/button.svg" alt = "button" width = {100} height = {100} className = "w-2/12 h-2/12"/>
        </button>
      </div>
      
      <Footer/>
      
      
    </div>
   
    
      

    </>
  )
}
