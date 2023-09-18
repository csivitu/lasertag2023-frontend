import React from 'react'
import 'tailwindcss/tailwind.css'
import Image from 'next/image'
import { Tektur } from 'next/font/google'
import { checkExpiry } from '@/helpers/checkExpiry'
import {useState,useEffect} from "react"
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'
const tektur = Tektur({subsets:['latin']})

export default function Navbar() {
    const router = useRouter();
    const handleLogin = ()=>{
        if(!loggedIn)
        router.push('/login')
        else{
            Cookies.remove('jwtToken')
        }
    }

    const [loggedIn, setLoggedIn]= useState<boolean>()
    useEffect(()=>{
        if(!checkExpiry()){
            setLoggedIn(!checkExpiry())
        }
    },[])
    
  return (
    <>
    
        <nav className = "relative flex flex-row justify-center items-center w-full text-black">
            <div className = "absolute top-0 left-0 w-full"> 
                <Image src = "/landingassests/navbarvector.svg" alt = "Navbar" width = {1} height = {1} className = "w-full"/>
            </div>
           
            <div className = "flex justify-end text-2xl items-center w-full z-10 translate-y-1/2">
                <div className = {` flex  justify-end ${tektur.className} font-medium`}>
                    <button className = "hover:bg-yellow-400 hover:rounded-full py-[0.5rem] px-[1rem] mr-20 transition-all duration-500">FAQs</button>
                    <button className = "hover:bg-yellow-400 hover:rounded-full py-[0.5rem] px-[1rem] mr-20 transition-all duration-500">GUIDE</button>
                    <button className = "hover:bg-yellow-400 hover:rounded-full py-[0.5rem] px-[1rem] mr-20 transition-all duration-500" >GALLERY</button>
                    <button onClick={handleLogin} className = "hover:bg-yellow-400 hover:rounded-full py-[0.5rem] px-[1rem] transition-all duration-500 mr-20">{loggedIn?'Sign Out':'Sign In'} </button>
                </div>
            </div>
        </nav>





    </>
  )
}
