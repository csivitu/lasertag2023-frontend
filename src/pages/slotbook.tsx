
import 'tailwindcss/tailwind.css'
import { Tektur} from 'next/font/google'
import { Chakra_Petch} from 'next/font/google'

const tektur = Tektur({subsets:['latin']})
const chakraPetch = Chakra_Petch({weight:'300' , subsets:['latin']});

export default function slotBook() {

  return (
    <main className={` w-full flex flex-col justify-between items-center min-h-screen bg-black py-[20px]`}>
        <div className={` text-white ${tektur.className} text-slotBookHeadingFontSize font-bold`}>
            Select your Laser Tag Slot
        </div>
       <section className='flex flex-col justify-center  items-center w-[75%] gap-[50px]'>
       <div className='flex flex-row justify-center items-center gap-slotBookDatePadding w-[85%]'>
        <div className={`bg-slotBookDateColor ${tektur.className} font-semibold font- text-white rounded-[8px] px-[56px] py-[24px] text-slotBookDateFontSize `}>
          22nd Sept
        </div>
        <div className={`bg-slotBookDateColorHover ${tektur.className} font-semibold font- text-white rounded-[8px] px-[56px] py-[24px] text-slotBookDateFontSize`}>
          22nd Sept
        </div>
        <div className={`bg-slotBookDateColorHover ${tektur.className} font-semibold font- text-white rounded-[8px] px-[56px] py-[24px] text-slotBookDateFontSize`}>
          22nd Sept
        </div>
        </div>
        <section className='flex flex-row  flex-wrap justify-center items-start  w-[85%] gap-[5px]'>
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
        <button className={`bg-slotBookTimeRed text-white rounded-[8px] ${chakraPetch.className} font-semibold text-slotBookDateFontSize px-bookNowButtonX py-bookNowButtonY`}>
      Book Now
        </button>
    </main>
  )
    
}

