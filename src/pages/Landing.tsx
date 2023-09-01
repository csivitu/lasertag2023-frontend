import Navbar from '@/components/landingcomponents/Navbar'
import Footer from '@/components/landingcomponents/Footer'
import React from 'react'
import Image from 'next/image'

export default function Landing() {
  return (
    
    < div className = "bg-black flex flex-col h-screen justify-between">
        
            <Navbar/>
        
        <div className = "flex flex-col items-center">
            <div className = "text-white w-full">
                <p className = "text-center">Video here</p>
        </div>
            <button className = "w-full flex justify-center">
                <Image src = "/landingassests/button.svg" alt = "button" width = {1} height = {1} className = "w-3/12 h-3/12"/>
            </button>
        </div>
        
            <Footer/>
           
        



    </div>
    

    
  )
}
