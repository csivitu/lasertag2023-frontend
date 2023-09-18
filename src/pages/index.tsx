import Navbar from '@/components/landingcomponents/Navbar';
import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import "tailwindcss/tailwind.css";
import Image from 'next/image';
import Marquee from '@/components/landingcomponents/Marquee';
import Photo from '@/components/landingcomponents/Photo';
import FAQ from '@/components/landingcomponents/Faq';
import Footer from '@/components/landingcomponents/Footer';
import Cookies from 'js-cookie';
import { checkExpiry } from '@/helpers/checkExpiry';
import { Tektur } from 'next/font/google';
const tektur = Tektur({ subsets: ["latin"] });

export default function Landing(){
  const router = useRouter()
  const token =Cookies.get('jwtToken')

  useEffect(()=>{
    if(!checkExpiry()){
      router.push('/slotbook')
    }
  },[token])
  
  return (
    
    <main className='bg-black flex justify-between items-center flex-col overflow-x-hidden '>

   <Navbar/>
   <section className='w-full flex flex-col justify-center items-center relative overflow- '>
   <Image width={100} height={100} alt="LogoLaserTag" src="/lasertaglogo.webp" className='w-[60%]'/>

   <button className={`${tektur.className} w-[250px] h-[60px] bg-buttonImg font-bold text-xl object-fill absolute top-[70%] bg-no-repeat`}>
      Register
    </button>
   </section>
   <Marquee/>
   <Photo/>
   <FAQ/>
  <Footer/>
   
  
   
      </main>
  )
}
