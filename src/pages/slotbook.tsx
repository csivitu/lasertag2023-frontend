
import 'tailwindcss/tailwind.css'
import { Tektur} from 'next/font/google'

const tektur = Tektur({subsets:['latin']})

export default function slotBook() {
  console.log(tektur)
  return (
    <div className={` text-black w-full flex flex-col justify-center items-center`}>
        <div className={`  ${tektur.className} text-3xl`}>
            Select your Laser Tag Slot
        </div>
    </div>
  )
    
}

