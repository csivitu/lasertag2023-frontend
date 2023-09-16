import '../app/globals.css'
import { Tektur} from 'next/font/google'
import { Chakra_Petch} from 'next/font/google'
import { useEffect,useState,useRef } from 'react'
import Image from 'next/image'
import Cookies from 'js-cookie'
import axios from 'axios'
const tektur = Tektur({subsets:['latin']})
const chakraPetch = Chakra_Petch({weight:'300' , subsets:['latin']});
import { getTime, getDate, getDayOfMonth } from '@/helpers/dateAndTime'


export default function SlotBook() {
  const [slotData,setSlotData]= useState([] as any[])
  const token =Cookies.get('jwtToken');
  const dayOneRef=useRef<HTMLDivElement>(null)
  const dayTwoRef=useRef<HTMLDivElement>(null)
  const dayThreeRef=useRef<HTMLDivElement>(null)
  const [selectDay,setSelectDay] = useState<number>(0)

//   useEffect(()=>{
// console.log(selectDay)
//   },[selectDay])

  useEffect(()=>{
   const fetchSlot= async ()=>{
      try{
        const headers={
          'Authorization':`Bearer ${token}`
        }
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/slot-info`,{headers})
        setSlotData(response.data)
        
      }
      
      catch(e){
        console.log("Cant fetch")
      }
      
  }
  fetchSlot()

},[])

  return (
    <main className={` w-full flex flex-col justify-center items-center min-h-screen bg-black  gap-[75px]`}>
        <div className={` text-white ${tektur.className} text-slotBookHeadingFontSize font-bold`}>
            Select your Laser Tag Slot
        </div>
       <section className='flex flex-col justify-center  items-center w-[75%] gap-[50px]'>
       <div className='flex flex-row justify-start items-center gap-slotBookDatePadding w-full flex-wrap'>
        <div className={`bg-slotBookDateColor ${tektur.className} font-semibold font- text-white rounded-[8px] px-[56px] py-[24px] text-slotBookDateFontSize flex-1 text-center`} ref={dayOneRef} onClick={()=>{
          setSelectDay(22)
          dayOneRef.current?.classList.toggle('bg-slotBookDateColorHover')
          dayTwoRef.current?.classList.remove('bg-slotBookDateColorHover')
          dayThreeRef.current?.classList.remove('bg-slotBookDateColorHover')
        }}>
          Day 1
        </div>
        <div className={`bg-slotBookDateColor ${tektur.className} font-semibold font- text-white rounded-[8px] px-[56px] py-[24px] text-slotBookDateFontSize flex-1 text-center`} ref={dayTwoRef} onClick={()=>{
          setSelectDay(23)
          dayTwoRef.current?.classList.toggle('bg-slotBookDateColorHover')
          dayOneRef.current?.classList.remove('bg-slotBookDateColorHover')
          dayThreeRef.current?.classList.remove('bg-slotBookDateColorHover')
        }}>
          Day 2
        </div>
        <div className={`bg-slotBookDateColor ${tektur.className} font-semibold font- text-white rounded-[8px] px-[56px] py-[24px] text-slotBookDateFontSize flex-1 text-center`} ref={dayThreeRef} onClick={()=>{
          setSelectDay(24)
          dayThreeRef.current?.classList.toggle('bg-slotBookDateColorHover')
          dayOneRef.current?.classList.remove('bg-slotBookDateColorHover')
          dayTwoRef.current?.classList.remove('bg-slotBookDateColorHover')
        }}>
          Day 3
        </div>
        </div>
        <section className='grid tab:grid-cols-3 laptopS:grid-cols-4 w-full gap-[10px]'>


        {slotData.map((slot,index)=>{
          
         if(selectDay==getDayOfMonth(slot.startTime)){
            return(
              <div className={`gap-[14px] bg-slotBookTime ${tektur.className} font-semibold font- rounded-[8px] px-[18px] py-[20px] text-white flex flex-row justify-center items-center `}>
              <p>{getTime(slot.startTime)}</p>
              <div className='w-[1.5px] h-[20px] bg-white'></div>
              <p className={` ${chakraPetch.className} text-slotBookTimeGreen`}>Seats Available</p>
            </div>
            )
            }
          
        })}


        </section>
       </section>
      <section className='flex flex-col justify-center items-center gap-[20px]'>
      <section className='flex flex-row justify-center items-center gap-[10px]'>
    <Image width={16} height={16} alt="Left Arrow" src="/slotBookPage/Vector.svg"/>
    <p className={`${chakraPetch.className} text-white font-semibold`}>1 of 3</p>
    <Image width={16} height={16} alt="Right Arrow" src="/slotBookPage/Vector-1.svg"/>
        </section>
        <button className={`bg-slotBookTimeRed text-white rounded-[8px] ${chakraPetch.className} font-semibold text-slotBookDateFontSize px-bookNowButtonX py-bookNowButtonY break-keep	`}>
      Book Now
        </button>
      </section>
        
    </main>
  )
    
}