import React from 'react';
import Image from 'next/image';
import { Tektur } from "next/font/google";
import "tailwindcss/tailwind.css";
const tektur = Tektur({ subsets: ["latin"] });

type BookProps = {
    
};

const Book:React.FC<BookProps> = () => {
    
    return (
    <div className="relative w-full md:w-3/4 h-full">
    <Image src='/reminder.svg' alt='Reminder' height={50} width={50} className="w-full h-auto" />
    <div className="flex-col absolute top-0 left-0 w-full h-full bg-black bg-opacity-5 flex justify-center items-center ">
    <p className={`${tektur.className} font-bold text-xs md:text-xl lg:text-3xl tracking-wider text-[#FFF6E8] w-1/2 text-center pt-[2vh] md:pt-[2vh] lg:pt-[4vh]`}>You have a limited time to join the
    cyber-space and save us all. </p>
    <Image src='/bookslot.svg' alt='bookslot' width={150} height={100} className='lg:py-[6vh] md:py-[2vh] py-[2vh]  w-1/4 md:w-1/3'/>
      </div>
    </div> 
    );

}
export default Book;