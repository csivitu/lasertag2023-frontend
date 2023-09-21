import { Tektur } from "next/font/google";
import "../app/globals.css";
import { Chakra_Petch } from "next/font/google";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import axios from "axios";
import { getDayOfMonth, getTime } from "@/helpers/dateAndTime";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logout from "@/components/Logout";
const tektur = Tektur({ subsets: ["latin"] });
const chakraPetch = Chakra_Petch({ weight: "300", subsets: ["latin"] });

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

export default function Profile() {
  const token = Cookies.get("jwtToken");
  const [userInfo, setUserInfo] = useState<UserData | null>(null);
  const [changeSlotClicked, setChangeSlotClicked] = useState<boolean>(false);
  const dayOneRef = useRef<HTMLDivElement>(null);
  const dayTwoRef = useRef<HTMLDivElement>(null);
  const dayThreeRef = useRef<HTMLDivElement>(null);
  const [selectSlotId, setSelectSlotId] = useState<String>("");
  const [slotData, setSlotData] = useState([] as any[]);
  const [selectDay, setSelectDay] = useState<number>(22);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const slotsPerPage = 10; 
  let totalPages = Math.ceil(slotData.length / slotsPerPage);
const startIndex = (currentPage - 1) * slotsPerPage;
const endIndex = startIndex + slotsPerPage;


  const onChangeClick = () => {
    const fetchSlot = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/slot-info`,
          { headers }
        );
        setSlotData(response.data);
      } catch (e: any) {
        toast.error(`Error fetching slot, please refresh`, { theme: "dark" });
      }
    };
    fetchSlot();
  };
  useEffect(() => {
    const checkIfSlotBooked = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user-info`,
          { headers }
        );

        setUserInfo(response.data);
      } catch (e) {
      }
    };
    checkIfSlotBooked();
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleConfirm = (slotId: any) => {

    const changeSlot = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const payload = {
          slotId: selectSlotId,
        };
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/change-slot`,
          payload,
          { headers }
        );
        toast.success(`${response?.data?.message}`, { theme: "dark" });
      } catch (e: any) {
        
        toast.error(`${(e?.response?.data?.error!=undefined ?e?.response?.data?.error:e?.response?.data)}`, { theme: "dark" });
      }
    };
    changeSlot();
    closeModal();
  };

  return (
    <main className="overflow-x-hidden">
      <ToastContainer className={"="} />

      <main className="relative flex justify-center items-center flex-col overflow-x-hidden">
        <Logout />
        {isOpen && (
          <div className="  absolute mobile:top-[15%] tab:top-[2 0%] left-[50%] z-[1] bg-slotBookDateColorHover px-[2rem] py-[0.5rem] rounded-[14px]  flex justify-center items-center translate-x-[-50%]  translate-y-[-50%] mobile:w-[90%] laptopS:w-[50%]">
            <div className="modal-content  flex justify-between items-center gap-[1rem] flex-col text-white">
              <h2 className={`${chakraPetch.className} text-2xl font-bold`}>
                Are you sure you want to change your slot?
              </h2>
              <div className="flex justify-between items-center gap-[1rem] w-full">
                <button
                  onClick={handleConfirm}
                  className={`${tektur.className} rounded-[14px] bg-slotBookTimeGreen px-[24px] py-[10px] text-white font-medium w-[50%] transition-all duration-500 hover:hover:scale-[105%] hover:text-black`}
                >
                  Confirm
                </button>
                <button
                  onClick={closeModal}
                  className={`${tektur.className} rounded-[14px] bg-slotBookTimeRed px-[24px] py-[10px] text-white font-medium w-[50%] ransition-all duration-500 hover:scale-[105%] hover:text-black`}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        <main
          className={`${
            isOpen ? "blur-[3px]" : ""
          } flex flex-col justify-center items-center bg-black w-full gap-[2rem] py-[2rem]`}
        >
          <section className="flex flex-col justify-center items-center w-full gap-[2rem]">
            <h1 className={`${tektur.className} text-3xl font-bold text-white`}>
              Profile
            </h1>
            <div className="flex justify-around tab:items-center mobile:items-start laptopS:w-[50%] tab:w-[75%] mobile:w-[90%] tab:flex-row mobile:flex-col mobile:gap-[2rem]">
              <div className="flex justify-center tab:items-start flex-col gap-[1rem] mobile:items-start mobile:w-full tab:w-[90%]">
                <div className="flex justify-center items-end flex-row gap-[1rem]">
                  <h1 className={`${tektur.className} text-4xl text-white`}>Your Slot</h1>
                  <p
                    className={`${tektur.className} text-l underline text-white cursor-pointer`}
                    onClick={() => {
                      setChangeSlotClicked(!changeSlotClicked);
                      onChangeClick();
                    }}
                  >
                    Change Slot
                  </p>
                </div>

                <button
                  className={`${tektur.className} rounded-[14px] bg-slotBookTimeRed px-[24px] py-[10px] text-black font-medium w-full transition-all duration-500 hover:scale-[105%] hover:text-white`}
                >
                  {userInfo?.slotBooked?.startTime
                    ? getTime(userInfo?.slotBooked?.startTime)
                    : ""}{" "}
                  ,
                  {userInfo?.slotBooked?.startTime
                    ? getDayOfMonth(userInfo?.slotBooked?.startTime)
                    : ""}{" "}
                  Sept
                </button>
              </div>

              <div className="bg-white  w-[2px] h-[150px] mobile:hidden tab:block"></div>

              <div className="flex justify-center items-start flex-col gap-[1rem] mobile:w-[100%] tab:w-[50%]">
                

                <div className="flex justify-center items-start flex-col">
                  <h2 className={`${tektur.className} text-2xl font-medium text-white`}>
                    Email
                  </h2>
                  <p className={`${tektur.className} text-white`}>{userInfo?.email}</p>
                </div>
              </div>
            </div>
          </section>
          {changeSlotClicked ? (
            <section className="flex flex-col justify-center  items-center tab:w-[75%] gap-[50px] mobile:w-[90%]">
              <div className="flex flex-row justify-start items-center gap-slotBookDatePadding w-full tab:flex-wrap mobile:flex-nowrap ">
                <div
                  className={`bg-slotBookDateColor ${tektur.className} font-semibold font- text-white rounded-[8px] tab:px-[56px] tab:py-[24px] tab:text-slotBookDateFontSize flex-1 text-center mobile:py-[0.5rem]  transition-all duration-500 hover:scale-[105%] hover:text-black cursor-pointer`}
                  ref={dayOneRef}
                  onClick={() => {
                    setSelectDay(22);
                    setCurrentPage(1)
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
                  className={`bg-slotBookDateColor ${tektur.className} font-semibold font- text-white rounded-[8px]  tab:px-[56px] tab:py-[24px] tab:text-slotBookDateFontSize flex-1 text-center mobile:py-[0.5rem] transition-all duration-500 hover:scale-[105%] hover:text-black cursor-pointer `}
                  ref={dayTwoRef}
                  onClick={() => {
                    setSelectDay(23);
                    setCurrentPage(3)
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
                  className={`bg-slotBookDateColor ${tektur.className} font-semibold font- text-white rounded-[8px] tab:px-[56px] tab:py-[24px] tab:text-slotBookDateFontSize flex-1 text-center mobile:py-[0.5rem] transition-all duration-500 hover:scale-[105%] hover:text-black cursor-pointer pointer-events-none`}
                  ref={dayThreeRef}
                  onClick={() => {
                    setSelectDay(24);
                    setCurrentPage(7)
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
              <section className="grid tab:grid-cols-3 laptopS:grid-cols-4 w-full gap-[10px] mobile:grid-cols-2">
              {slotData

  .map((slot, index) => {
    if (selectDay == getDayOfMonth(slot.startTime)) {
      return slot.isCarry ? (
        ""
      ) : (
       slot.toShow?( <div
        className={`gap-[14px] bg-slotBookTime ${tektur.className} font-semibold font- rounded-[8px] px-[18px] py-[20px] text-white flex flex-row justify-center items-center  transition-all duration-500 hover:hover:scale-[105%] hover:text-black cursor-pointer`}
        key={index}
        onClick={(event: any) => {
          setSelectSlotId(event.target.dataset.slotid);

          openModal(); }}
        data-slotid={slot.id}
      >
        <p data-slotid={slot.id}>{getTime(slot.startTime)}</p>
        <div
          className="w-[1.5px] h-[20px] bg-white"
          data-slotid={slot.id}
        ></div>
        <p
          className={` ${chakraPetch.className} ${slot?.availability >0 ?'text-slotBookTimeGreen':'text-slotBookTimeRed'} `}
          data-slotid={slot.id}
        >
          {slot?.availability} Slots
        </p>
      </div>):''
      );
    }
  })}
              </section>
            
            </section>
          ) : (
            ""
          )}
        </main>
        
       {(changeSlotClicked===true)?'':( <div className="flex flex-col justify-center items-center gap-[1rem] w-full bg-black text-white">
          <Image
            width={100}
            height={100}
            alt=""
            src={`/gifs/2.webp`}
            className={"tab:w-4/12  tab:block mobile:w-[90%]"}
          />
          <h1 className={`${chakraPetch.className} text-2xl`}>
            See ya at the venue Soldier
          </h1>
        </div>)}
      </main>
    </main>
  );
}