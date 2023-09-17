import { Tektur} from 'next/font/google'
import '../app/globals.css'
import { Chakra_Petch} from 'next/font/google'
import { useEffect,useState,useRef } from 'react'
import Image from 'next/image'
import Cookies from 'js-cookie'
import axios from 'axios'
const tektur = Tektur({subsets:['latin']})
const chakraPetch = Chakra_Petch({weight:'300' , subsets:['latin']});


export default function Profile(){


    return(
        <main className="flex flex-col justify-center items-center bg-black w-full py-[2rem]">
            <section className="flex flex-col justify-center items-center w-full gap-[2rem]">
                <h1 className={`${tektur.className} text-3xl font-bold`}>Profile</h1>
                <div className="flex justify-around items-center w-[50%]"> 

                <div className="flex justify-center items-start flex-col gap-[1rem]"> 
                <div className="flex justify-center items-end flex-row gap-[1rem]">
                <h1 className={`${tektur.className} text-4xl `}>Your Slot</h1>
                <p className={`${tektur.className} text-l underline`}>Change Slot</p>
                </div>
               
                <button className={`${tektur.className} rounded-[14px] bg-slotBookTimeRed px-[24px] py-[10px] text-black font-medium w-full`}>
            Your slot date and time
                </button>
                </div>

                <div className='bg-white  w-[2px] h-[150px]'></div>

                <div className='flex justify-center items-start flex-col gap-[1rem]'>

                    <div className='flex justify-center items-start flex-col'>
                    <h2 className={`${tektur.className} text-2xl font-medium`}>Name</h2>
                <p>Manas</p>
                    </div>

               <div className='flex justify-center items-start flex-col'>
               <h2 className={`${tektur.className} text-2xl font-medium`}>Email</h2>
                <p>manaslaud@hotmail.com</p>
               </div>
               
                </div>
          
                </div>
            </section>

        </main>
    )
}