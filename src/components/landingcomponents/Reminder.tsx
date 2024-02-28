import React from 'react';
import Image from 'next/image';
import { Tektur } from "next/font/google";
import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from 'react-toastify';
import { checkExpiry } from '@/helpers/checkExpiry';
import { useRouter } from 'next/router';
const tektur = Tektur({ subsets: ["latin"] });

type ReminderProps = {
    
};


const Reminder:React.FC<ReminderProps> = () => {
    const router =useRouter();
  return (
    <main className='flex bg-no-repeat bg-cover w-full bg-footer h-screen flex-row justify-center items-center'>
      <ToastContainer/>
    
    <div className="relative w-full md:w-1/5  rounded-md h-1/2 text-black  bg-inherit">
     
   
    <div className="flex-col w-[60%]   absolute ml-16 md:ml-0  md:top-[-10%] md:right-[-100%] md:w-full h-full rounded-[100px] shadow-lg shadow-black bg-white   flex justify-center items-center ">
    <p className={`${tektur.className} font-bold text-xs md:text-xl  tracking-wider w-1/2 text-center pt-[2vh] md:pt-[2vh] lg:pt-[4vh]`}>You have a limited time to join Morty!!<br/>
    Make sure to do it </p>
    <button  className=' bg-[#93FD10] mt-10 w-full  text-white text-xl shadow-md shadow-black rounded-full md:w-1/2  md:py-[2vh] px-2 py-[2vh]   cursor-pointer'
    onClick={()=>{
      if(!checkExpiry()){
        router.push('/slotbook')
      }
      else{
        toast.error('Please login to book a slot', { theme: "dark" });
      }
    }}>Book Slot</button>
      </div>
    </div> 
    </main>
  );
}
export default Reminder;