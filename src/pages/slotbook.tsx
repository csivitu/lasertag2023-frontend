import '../app/globals.css'
import { Tektur} from 'next/font/google'
import { Chakra_Petch} from 'next/font/google'
import Image from 'next/image'
const tektur = Tektur({subsets:['latin']})
const chakraPetch = Chakra_Petch({weight:'300' , subsets:['latin']});

export default function slotBook() {

  return (
    <main className={` w-full flex flex-col justify-center items-center min-h-screen bg-black  gap-[75px]`}>
        <div className={` text-white ${tektur.className} text-slotBookHeadingFontSize font-bold`}>
            Select your Laser Tag Slot
        </div>
       <section className='flex flex-col justify-center  items-center w-[75%] gap-[50px]'>
       <div className='flex flex-row justify-start items-center gap-slotBookDatePadding w-full flex-wrap'>
        <div className={`bg-slotBookDateColor ${tektur.className} font-semibold font- text-white rounded-[8px] px-[56px] py-[24px] text-slotBookDateFontSize flex-1 text-center`}>
          22nd Sept
        </div>
        <div className={`bg-slotBookDateColorHover ${tektur.className} font-semibold font- text-white rounded-[8px] px-[56px] py-[24px] text-slotBookDateFontSize flex-1 text-center`}>
          22nd Sept
        </div>
        <div className={`bg-slotBookDateColorHover ${tektur.className} font-semibold font- text-white rounded-[8px] px-[56px] py-[24px] text-slotBookDateFontSize flex-1 text-center`}>
          22nd Sept
        </div>
        </div>
        <section className='grid tab:grid-cols-3 laptopS:grid-cols-4 w-full gap-[10px]'>
        <div className={`gap-[14px] bg-slotBookTime ${tektur.className} font-semibold font- rounded-[8px] px-[18px] py-[20px] text-white flex flex-row justify-center items-center `}>
          <p>9 am</p>
          <div className='w-[1.5px] h-[20px] bg-white'></div>
          <p className={` ${chakraPetch.className} text-slotBookTimeGreen`}>Seats Available</p>
        </div>
        <div className={`gap-[14px] bg-slotBookTime ${tektur.className} font-semibold font- rounded-[8px] px-[18px] py-[20px] text-white flex flex-row justify-center items-center `}>
          <p>9 am</p>
          <div className='w-[1.5px] h-[20px] bg-white'></div>
          <p className={` ${chakraPetch.className} text-slotBookTimeGreen`}>Seats Available</p>
        </div>
        <div className={`gap-[14px] bg-slotBookTime ${tektur.className} font-semibold font- rounded-[8px] px-[18px] py-[20px] text-white flex flex-row justify-center items-center `}>
          <p>9 am</p>
          <div className='w-[1.5px] h-[20px] bg-white'></div>
          <p className={` ${chakraPetch.className} text-slotBookTimeGreen`}>Seats Available</p>
        </div>
        <div className={`gap-[14px] bg-slotBookTime ${tektur.className} font-semibold font- rounded-[8px] px-[18px] py-[20px] text-white flex flex-row justify-center items-center `}>
          <p>9 am</p>
          <div className='w-[1.5px] h-[20px] bg-white'></div>
          <p className={` ${chakraPetch.className} text-slotBookTimeGreen`}>Seats Available</p>
        </div>
        <div className={`gap-[14px] bg-slotBookTime ${tektur.className} font-semibold font- rounded-[8px] px-[18px] py-[20px] text-white flex flex-row justify-center items-center `}>
          <p>9 am</p>
          <div className='w-[1.5px] h-[20px] bg-white'></div>
          <p className={` ${chakraPetch.className} text-slotBookTimeGreen`}>Seats Available</p>
        </div>
        <div className={`gap-[14px] bg-slotBookTime ${tektur.className} font-semibold font- rounded-[8px] px-[18px] py-[20px] text-white flex flex-row justify-center items-center `}>
          <p>9 am</p>
          <div className='w-[1.5px] h-[20px] bg-white'></div>
          <p className={` ${chakraPetch.className} text-slotBookTimeGreen`}>Seats Available</p>
        </div>
        <div className={`gap-[14px] bg-slotBookTime ${tektur.className} font-semibold font- rounded-[8px] px-[18px] py-[20px] text-white flex flex-row justify-center items-center `}>
          <p>9 am</p>
          <div className='w-[1.5px] h-[20px] bg-white'></div>
          <p className={` ${chakraPetch.className} text-slotBookTimeGreen`}>Seats Available</p>
        </div>
        <div className={`gap-[14px] bg-slotBookTime ${tektur.className} font-semibold font- rounded-[8px] px-[18px] py-[20px] text-white flex flex-row justify-center items-center `}>
          <p>9 am</p>
          <div className='w-[1.5px] h-[20px] bg-white'></div>
          <p className={` ${chakraPetch.className} text-slotBookTimeGreen`}>Seats Available</p>
        </div>
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