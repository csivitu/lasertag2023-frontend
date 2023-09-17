import { Tektur} from 'next/font/google'
import '../app/globals.css'
import { Chakra_Petch} from 'next/font/google'
import { useEffect,useState,useRef } from 'react'
import Image from 'next/image'
import Cookies from 'js-cookie'
import axios from 'axios'
import {getDayOfMonth, getTime } from '@/helpers/dateAndTime'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const tektur = Tektur({subsets:['latin']})
const chakraPetch = Chakra_Petch({weight:'300' , subsets:['latin']});


interface UserData {
    _id: string;
    regno: string;
    phoneno: string;
    email: string;
    slotBooked: {
      _id: string;
      startTime: string;
      endTime: string;
      day: number;
      isCarry: boolean;
      slotBookedBy: string[];
      availability: number;
      id: string;
    };
    scope: string;
    __v: number;
  }




  
export default function Profile(){
const token = Cookies.get('jwtToken')
const [userInfo,setUserInfo] =useState<UserData | null>(null);
const [changeSlotClicked, setChangeSlotClicked]= useState<boolean>(false);
const dayOneRef=useRef<HTMLDivElement>(null)
const dayTwoRef=useRef<HTMLDivElement>(null)
const dayThreeRef=useRef<HTMLDivElement>(null)
const [selectSlotId,setSelectSlotId]= useState<String>('')
const [slotData,setSlotData]= useState([] as any[])
const [selectDay,setSelectDay] = useState<number>(0)
const [isOpen, setIsOpen] = useState(false);

const onChangeClick =()=>{
    
        const fetchSlot= async ()=>{
           try{
             const headers={
               'Authorization':`Bearer ${token}`,
               
             }
             const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/slot-info`,{headers})
             setSlotData(response.data)
             
             
           }
           
           catch(e){
             console.log("Cant fetch")
           }
           
       }
       fetchSlot()
     
    
}
 useEffect(()=>{
        const checkIfSlotBooked = async ()=>{
            try{
                const headers ={
                    'Authorization': `Bearer ${token}`
                }
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/user-info`,{headers})
              
                setUserInfo(response.data)
            }
            catch(e){
                console.log(e)
            }
        }
        checkIfSlotBooked()
    },)



 const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };
  
    const handleConfirm = (slotId:any) => {
        console.log(slotId)
     
       const changeSlot = async() =>{
        try{
            
            const headers={
                'Authorization':`Bearer ${token}`,
                
              }
              const payload={
                "slotId":selectSlotId
              }
              const response = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/change-slot`,payload,{headers})
              console.log(response)
              toast.success(`${response?.data?.message}`)
        }
        catch(e){
console.log(e)
        }

       }
      changeSlot()
        closeModal();
      
      
    };
 

   

    return(
        <>
        <ToastContainer className={"absolute"}/>
        <main className='relative '>
            
        {isOpen && (
        <div className="  absolute top-[50%] left-[50%] z-[1] bg-slotBookDateColorHover px-[2rem] py-[0.5rem] rounded-[14px] w-4/12 flex justify-center items-center translate-x-[-50%]  translate-y-[-50%]">
          <div className="modal-content ">

            <h2 className={`${chakraPetch.className} text-2xl font-bold`}>Are you sure you want to change your slot?</h2>
            <div className="flex justify-between items-center ">
              <button onClick={handleConfirm}>Confirm</button>
              <button onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
        <main className={`${isOpen?'blur-[3px]':''} flex flex-col justify-center items-center bg-black w-full gap-[2rem] py-[2rem]`}>




            <section className="flex flex-col justify-center items-center w-full gap-[2rem]">
                <h1 className={`${tektur.className} text-3xl font-bold`}>Profile</h1>
                <div className="flex justify-around items-center w-[50%]"> 

                <div className="flex justify-center items-start flex-col gap-[1rem]"> 
                <div className="flex justify-center items-end flex-row gap-[1rem]">
                <h1 className={`${tektur.className} text-4xl `}>Your Slot</h1>
                <p className={`${tektur.className} text-l underline`} onClick={()=>{
                    setChangeSlotClicked(!changeSlotClicked)
                    onChangeClick()
                }}>Change Slot</p>
                </div>
               
                <button className={`${tektur.className} rounded-[14px] bg-slotBookTimeRed px-[24px] py-[10px] text-black font-medium w-full`}>
                {(userInfo?.slotBooked?.startTime)?getTime(userInfo?.slotBooked?.startTime):''}  ,
                {(userInfo?.slotBooked?.startTime)?getDayOfMonth(userInfo?.slotBooked?.startTime):''} Sept
                </button>
                </div>

                <div className='bg-white  w-[2px] h-[150px]'></div>

                <div className='flex justify-center items-start flex-col gap-[1rem]'>

                    <div className='flex justify-center items-start flex-col'>
                    <h2 className={`${tektur.className} text-2xl font-medium`}>Contact Number</h2>
                <p>{userInfo?.phoneno}</p>
                    </div>

               <div className='flex justify-center items-start flex-col'>
               <h2 className={`${tektur.className} text-2xl font-medium`}>Email</h2>
                <p>{userInfo?.email}</p>
               </div>
               
                </div>
          
                </div>
            </section>
        {changeSlotClicked?
       
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
              <div className={`gap-[14px] bg-slotBookTime ${tektur.className} font-semibold font- rounded-[8px] px-[18px] py-[20px] text-white flex flex-row justify-center items-center ${(slot.id===userInfo?.slotBooked._id)?'hidden':''}`} key={index}  data-slotid={slot.id} onClick={(event:any)=>{
               setSelectSlotId(event.target.dataset.slotid)
               console.log(event.target.dataset.slotid)
                openModal()
              }}>
              <p data-slotid={slot.id}>{getTime(slot.startTime)}</p>
              <div className='w-[1.5px] h-[20px] bg-white' data-slotid={slot.id}></div>
              <p className={` ${chakraPetch.className} text-slotBookTimeGreen`} data-slotid={slot.id}>Seats Available</p>
            </div>
            )
            }
          
        })}


        </section>
       </section>

        :''}

        </main>
        </main>
        </>
    )
}