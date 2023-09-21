import "tailwindcss/tailwind.css";
import { getDayOfMonth } from "@/helpers/dateAndTime";
import { Tektur } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import { Chakra_Petch } from "next/font/google";
import { useEffect,useState,useRef } from "react";
import Cookies from "js-cookie";
import { ToastContainer,toast } from "react-toastify";
import axios from "axios";
const tektur = Tektur({ subsets: ["latin"] });
const chakraPetch = Chakra_Petch({ weight: "300", subsets: ["latin"] });
import { getTime } from "@/helpers/dateAndTime";

export default function adminpanel(){
    const dayOneRef = useRef<HTMLDivElement>(null);
  const dayTwoRef = useRef<HTMLDivElement>(null);
  const dayThreeRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSlotId, setSelectedSlotId]= useState('');
  const [selectDay, setSelectDay] = useState<number>(22);
const [userEmailAssign,setUserEmailAssign] =useState("")
const [adminSlotData, setAdminSlotData] = useState([] as any[]);
const [errorMessage,setErrorMessage] =useState<String>("")
const token =Cookies.get('jwtToken')

useEffect( ()=>{
   async function fetchAdminSlot(){
    try{
        const headers={
            'Authorization':`Bearer ${token}`
        }
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/admin-slot-info
        `,{headers})
        toast.success('Slots fetched successfully',{theme:'dark'})
        setAdminSlotData(response.data)
        console.log(response.data)
    }
    catch(e:any){
        const error=e.response.data.error
        toast.error(error,{theme:'dark'})
        setErrorMessage(error)
    }
   }
   fetchAdminSlot()
}
,[])

    return (
        <main className="bg-black flex flex-col justify-between items-center gap-[3rem] min-h-screen">
            <ToastContainer/>
            <h1 className={`${chakraPetch.className} text-white text-5xl`}>List OF all Slots </h1>
             <div className="flex flex-row justify-start items-center gap-slotBookDatePadding w-full flex-wrap">
            <div
              className={`bg-slotBookDateColor  ${tektur.className} font-semibold font- text-white rounded-[8px] px-[56px] py-[24px] text-slotBookDateFontSize flex-1 text-center transition-all duration-500 hover:scale-[105%] hover:text-black`}
              ref={dayOneRef}
              onClick={() => {
                setCurrentPage(1)
                setSelectDay(22);
                dayOneRef.current?.classList.toggle(
                  "bg-slotBookDateColorHover"
                );
                dayTwoRef.current?.classList.remove(
                  "bg-slotBookDateColorHover"
                );
                dayThreeRef.current?.classList.remove(
                  "bg-slotBookDateColorHover"
                );
              }}
            >
              22nd September 
            </div>
            <div
              className={`bg-slotBookDateColor ${tektur.className} font-semibold font- text-white rounded-[8px] px-[56px] py-[24px] text-slotBookDateFontSize flex-1 text-center transition-all duration-500 hover:scale-[105%] hover:text-black  `}
              ref={dayTwoRef}
              onClick={() => {
                setCurrentPage(3)
                setSelectDay(23);
                dayTwoRef.current?.classList.toggle(
                  "bg-slotBookDateColorHover"
                );
                dayOneRef.current?.classList.remove(
                  "bg-slotBookDateColorHover"
                );
                dayThreeRef.current?.classList.remove(
                  "bg-slotBookDateColorHover"
                );
              }}
            >
              23rd September  
            </div>
            <div
              className={`bg-slotBookDateColor ${tektur.className} font-semibold font- text-white rounded-[8px] px-[56px] py-[24px] text-slotBookDateFontSize flex-1 text-center transition-all duration-500 hover:scale-[105%] hover:text-black pointer-events-none`}
              ref={dayThreeRef}
              onClick={() => {
                setCurrentPage(7)
               
                setSelectDay(24);
                dayThreeRef.current?.classList.toggle(
                  "bg-slotBookDateColorHover"
                );
                dayOneRef.current?.classList.remove(
                  "bg-slotBookDateColorHover"
                );
                dayTwoRef.current?.classList.remove(
                  "bg-slotBookDateColorHover"
                );
              }}
            >
              24th September (Coming Soon)
            </div>
            </div>
            <section className=" grid tab:grid-cols-3 laptopS:grid-cols-4 w-full gap-[10px] ">
                    {adminSlotData
 
 .map((slot, index) => {
   console.log(slot)
   if (selectDay == getDayOfMonth(slot.startTime)) {
     return ((
        (  <div
          className={`gap-[14px] bg-slotBookTime ${tektur.className} font-semibold font- rounded-[8px] px-[18px] py-[20px] text-white flex flex-row justify-center items-center `}
          key={index} onClick={(event:any)=>{
            setSelectedSlotId(event.target.dataset.slotid)
            toast.warn(`Slot Selected Day:${getDayOfMonth (slot.startTime)} Time: ${getTime(slot.startTime)}`,{theme:'dark'})
          }}
             
          data-slotid={slot.id}
        >
            <div className="flex flex-col items-start justify-between gap-[4px]">
            <p >Carry: <div className={`${slot.isCarry===true?'text-slotBookTimeGreen':'text-slotBookTimeRed'}`}>{slot?.isCarry.toString()}
                </div></p>
             <p>Visible: <div className={`${slot.toShow===true?'text-slotBookTimeGreen':'text-slotBookTimeRed'}`}>{slot?.toShow.toString()}</div></p>
            </div>
          <p data-slotid={slot.id}>{getTime(slot.startTime)}</p>
          <div
            className="w-[1.5px] h-[20px] bg-white"
            data-slotid={slot.id}
          ></div>
          <p
            className={` ${chakraPetch.className} ${slot?.availability >0 ?'text-slotBookTimeGreen':'text-slotBookTimeRed'}`}
            data-slotid={slot.id}
          >
            {slot?.availability} Slots
          </p>
        </div>)
      ))
   }
 })}
            </section> 

             {/*Admin Assign slot */}
            <section className="flex flex-col justify-center itmes-center text-white text-4xl w-[75%] gap-[1rem]">
                Assgin Above Selected Slot to:
                <input type="text" placeholder="Email of student" className={`${chakraPetch.className} bg-transparent  text-white border-transparent border-[2px] border-white  placeholder-[#222222]`} value={userEmailAssign}
                 onChange={(e: any) => {
                    setUserEmailAssign(e.target.value);
                  }}/>
                  <button className={`w-[30%] px-[18px] py-[7px] rounded-[8px]  bg-slotBookTimeRed text-white transition-all duration-500 hover:scale-[105%] hover:text-gray-400 text-xl font-medium`}>
                    Change Slot 
                  </button>
            </section>
            {/* Cancel Slot for user */}
            <section className="flex flex-col justify-center itmes-center text-white text-4xl w-[75%] gap-[1rem]">
            Cancel Slot for the user:

                <input type="text" placeholder="Email of student" className={`${chakraPetch.className} bg-transparent  text-white border-transparent border-[2px] border-white  placeholder-[#222222]`} value={userEmailAssign}
                 onChange={(e: any) => {
                    setUserEmailAssign(e.target.value);
                  }}/>
                   <button className={`w-[30%] px-[18px] py-[7px] rounded-[8px]  bg-slotBookTimeRed text-white transition-all duration-500 hover:scale-[105%] hover:text-gray-400 text-xl font-medium`}>
                    Cancel Slot 
                  </button>
            </section>
             {/* Slot for user */}
            <section className="flex flex-col justify-center itmes-center text-white text-4xl w-[75%] gap-[1rem]">
            Show Slot for all users:
            <button className={`w-[30%] px-[18px] py-[7px] rounded-[8px]  bg-slotBookTimeRed text-white transition-all duration-500 hover:scale-[105%] hover:text-gray-400 text-xl font-medium`}>
                    Show Selected slot
                  </button>
            </section>

        </main>
    )
}