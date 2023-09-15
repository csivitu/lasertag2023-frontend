
import { Tektur} from 'next/font/google'
import { Chakra_Petch} from 'next/font/google'
import Image from 'next/image'
const tektur = Tektur({subsets:['latin']})
const chakraPetch = Chakra_Petch({weight:'300' , subsets:['latin']});
import '../app/globals.css'
export default function login(){
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
          <h1 className={`${tektur.className} text-black font-semibold text-slotBookHeadingFontSize`}>Let&apos;s get you equipped,</h1>
          <h2 className={`${chakraPetch.className} text-black font-semibold text-slotBookTimeFontSize`}>Enter your details to sign in</h2>
          </div>

          <div className='w-full'>
          <h2 className={`${tektur.className} text-black font-semibold text-slotBookDateFontSize`}>Gravitas Registered Email Address</h2>
          <input type="text" className={`${chakraPetch.className} bg-transparent  text-black border-b-black border-transparent border-[2px] w-full  placeholder-[#222222]`} placeholder='studentname@vit.ac.in'/>
          </div>

          <div className='w-full'>
          <h2 className={`${tektur.className} text-black font-semibold text-slotBookDateFontSize`}>Contact Number</h2>
          <input type="text" className={`${chakraPetch.className} bg-transparent border-b-black border-transparent border-[2px] w-full text-black placeholder-[#222222]`} placeholder='studentname@vit.ac.in'/>
          </div>
         

          <button className='w-full px-[1820x] py-[14px] rounded-[8px] bg-black'>
            Send OTP
          </button>
          </div>
         
        </section>      
    </main>
  )
}
