
import { Tektur} from 'next/font/google'
import { Chakra_Petch} from 'next/font/google'
import Image from 'next/image'
import React, { useState } from 'react';
const tektur = Tektur({subsets:['latin']})
const chakraPetch = Chakra_Petch({weight:'300' , subsets:['latin']});
import '../app/globals.css'
import OtpInput from 'react-otp-input';

export default function verify(){
 const [otp,setOtp]= useState<string>("");



  return (
    <main className="w-full flex flex-row bg-black h-screen">

      <div className='w-[50%] flex flex-col justify-start items-start relative'>

        <div className='w-full ml-[20px]'>
        <Image width={150} height={150} alt="man" src="/login/lasertagLogo.svg" />
        </div>
      
      <Image width={100} height={100} alt="man" src="/login/man.svg" className='w-[85%] absolute bottom-0 object-contain'/>
      </div>
   
        <section className="bg-slotBookTimeRed w-[50%] flex justify-center flex-col items-center">
          <div className='flex flex-col justify-center items-start gap-[48px] w-[75%]'>

          <div className='flex flex-col justify-center items-start '>
          <h1 className={`${tektur.className} text-black font-semibold text-slotBookHeadingFontSize`}>Almost there soldier,</h1>
          <h2 className={`${chakraPetch.className} text-black font-semibold text-slotBookTimeFontSize`}>We take our job very seriously</h2>
          </div>
          <div className='w-full'>
          <h2 className={`${tektur.className} text-black font-semibold text-slotBookDateFontSize`}>Enter OTP</h2>
                <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            containerStyle={'w-full flex flex-row justify-between items-start'}
            inputStyle={'bg-transparent border-2 border-[2px] border-transparent border-b-black text-black font-bold'}
            inputType="tel"
            renderInput={(props:any) => <input {...props} />}
            shouldAutoFocus={true}
            />
          </div>

         

          <button className='w-full px-[1820x] py-[14px] rounded-[8px] bg-black'>
            Submit
          </button>
          </div>
         
        </section>      
    </main>
  )
}
