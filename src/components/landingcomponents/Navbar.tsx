import React from 'react'
import 'tailwindcss/tailwind.css'
import Image from 'next/image'
import { Tektur } from 'next/font/google'
const tektur = Tektur({subsets:['latin']})

export default function Navbar() {
  return (
    <>
    
        <nav className = "relative flex flex-row justify-center items-center">
            <div className = "absolute top-0 left-0 w-full"> 
                <Image src = "/landingassests/Vector.svg" alt = "Navbar" width = {1} height = {1} className = "w-full"/>
            </div>
           
            <div className = "flex justify-end text-2xl items-center w-full z-10 mr-24">
                <div className = {`flex gap-32 ${tektur.className} font-medium`}>
                    <button className = "hover:bg-yellow-400 hover:rounded-full py-2 px-4">FAQs</button>
                    <button className = "hover:bg-yellow-400 hover:rounded-full py-2 px-4">GUIDE</button>
                    <button className = "hover:bg-yellow-400 hover:rounded-full py-2 px-4">GALLERY</button>
                </div>
            </div>
        </nav>





    </>
  )
}
