import Navbar from '@/components/landingcomponents/Navbar';
import React, { useEffect,useState,useRef } from 'react'
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
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const ctaRef= useRef<HTMLButtonElement>(null);

   const handleCTAClick= ()=>{
    if(loggedIn){
      router.push('/slotbook')
    }
    else{
      router.push('/login')
    }
   }

  useEffect(()=>{
    if(!checkExpiry()){
      router.push('/slotbook')
      setLoggedIn(true);
    }
    
  },[token])
  
  return (
    
    <main className='bg-black flex justify-between items-center flex-col overflow-x-hidden '>

   <section className='w-full h-[110vh] flex flex-col justify-start items-center  overflow-hidden'>
    
   <Navbar/>
    <div className='relative flex justify-center items-center'>

    <Image width={100} height={100} alt="LogoLaserTag" src="/lasertaglogo.webp" className='w-[60%]'/>
    <button className={`${tektur.className} w-[250px] h-[60px] bg-buttonImg font-bold text-xl object-fill absolute top-[70%] bg-no-repeat text-black`} onClick={handleCTAClick} ref={ctaRef}>
      {loggedIn?'Book Now':'Sign In'}
    </button>

    </div>
  
    <Marquee/>
   </section>
   
   <Photo/>
   <FAQ/>
  <Footer/>
   
  
   
      </main>
  )
}
