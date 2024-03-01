import "../app/globals.css";
import { Tektur } from "next/font/google";
import { Chakra_Petch } from "next/font/google";
import { useEffect, useState, useRef } from "react";
import Logout from "@/components/Logout";
import Cookies from "js-cookie";
import axios from "axios";
const tektur = Tektur({ subsets: ["latin"] });
const chakraPetch = Chakra_Petch({ weight: "300", subsets: ["latin"] });
import { getTime, getDayOfMonth } from "@/helpers/dateAndTime";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//million-ignore
export default function SlotBook() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [slotData, setSlotData] = useState([] as any[]);
  const [errorMsg, setErrorMsg] = useState<String>("");
  const [userInfo, setUserInfo] = useState(null);
  const token = Cookies.get("jwtToken");
  const dayOneRef = useRef<HTMLDivElement>(null);
  const dayTwoRef = useRef<HTMLDivElement>(null);
  const dayThreeRef = useRef<HTMLDivElement>(null);
  const [selectDay, setSelectDay] = useState<number>(29);
  const [selectSlotId, setSelectSlotId] = useState<String>("");
  const [currentPage, setCurrentPage] = useState(1);
  const slotsPerPage = 10;
  let totalPages = Math.ceil(slotData.length / slotsPerPage);
  const startIndex = (currentPage - 1) * slotsPerPage;
  const endIndex = startIndex + slotsPerPage;
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleConfirm = () => {
    const bookSlot = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const payload = {
          slotId: selectSlotId,
        };
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/book-slot`,
          payload,
          { headers }
        );
        toast.success(response.data.message, { theme: "dark" });
      } catch (e: any) {
        const error = e.response.data.error;
        toast.error(error, { theme: "dark" });
        setErrorMsg(error);
      }
    };
    bookSlot();
    closeModal();
    router.push("/profile");
  };

  const handleSlotClick = (event: any) => {
    setSelectSlotId(event.target.dataset.slotid);
    openModal();
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
        const data = response.data;
        setUserInfo(data);
        if (response?.data.slotBooked) {
          router.push("/profile");
        }
      } catch (e: any) {
        const error = e?.response?.data.error;
        setErrorMsg(error);
        toast.error(error, { theme: "dark" });
      }
    };
    checkIfSlotBooked();
  }, []);

  useEffect(() => {
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
        totalPages = Math.ceil(response.data.length / slotsPerPage);
      } catch (e: any) {
        const error = e?.response?.data.error;
        setErrorMsg(error);
        toast.error(error, { theme: "dark" });
      }
    };
    fetchSlot();
  }, []);

  return (
    <main className="relative">
      <Logout />
      <ToastContainer />
      {isOpen && (
        <div className="  absolute top-[50%] left-[50%] z-[1] bg-slotBookDateColorHover px-[2rem] py-[0.5rem] rounded-[14px] w-4/12 flex justify-center items-center translate-x-[-50%]  translate-y-[-50%] mobile:w-[90%] laptopS:w-[50%]">
          <div className="modal-content flex justify-between items-center gap-[1rem] flex-col text-white ">
            <h2 className={`${chakraPetch.className} text-2xl font-bold`}>
              Are you sure you want to book this slot?
            </h2>
            <div className=" flex justify-between items-center gap-[1rem] w-full ">
              <button
                onClick={handleConfirm}
                className={`${tektur.className} rounded-[14px] bg-slotBookTimeGreen px-[24px] py-[10px] text-white font-medium w-[50%]`}>
                Confirm
              </button>
              <button
                onClick={closeModal}
                className={`${tektur.className} rounded-[14px] bg-slotBookTimeRed text-white px-[24px] py-[10px]  font-medium w-[50%]`}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <main
        className={` w-full flex flex-col justify-center items-center min-h-screen bg-black  gap-[75px] ${
          isOpen ? "blur-[3px]" : ""
        }`}>
        <div
          className={` text-white ${tektur.className} text-slotBookHeadingFontSize font-bold text-center`}>
          Select your Laser Tag Slot
        </div>
        <section className="flex flex-col justify-center  items-center w-[75%] gap-[50px]">
          <div className="flex flex-row justify-start items-center gap-slotBookDatePadding w-full flex-wrap">
            <div
              className={`bg-slotBookDateColor  ${tektur.className} font-semibold font- text-white rounded-[8px] px-[56px] py-[24px] text-slotBookDateFontSize flex-1 text-center transition-all duration-500 hover:scale-[105%] hover:text-black`}
              ref={dayOneRef}
              onClick={() => {
                setCurrentPage(1);
                setSelectDay(29);
                dayOneRef.current?.classList.toggle(
                  "bg-slotBookDateColorHover"
                );
                dayTwoRef.current?.classList.remove(
                  "bg-slotBookDateColorHover"
                );
                dayThreeRef.current?.classList.remove(
                  "bg-slotBookDateColorHover"
                );
              }}>
              29th February
            </div>
            <div
              className={` cursor-pointer bg-slotBookDateColor ${tektur.className} font-semibold font- text-white rounded-[8px] px-[56px] py-[24px] text-slotBookDateFontSize flex-1 text-center transition-all duration-500 hover:scale-[105%] hover:text-black  `}
              ref={dayTwoRef}
              onClick={() => {
                setCurrentPage(3);
                setSelectDay(1);
                dayTwoRef.current?.classList.toggle(
                  "bg-slotBookDateColorHover"
                );
                dayOneRef.current?.classList.remove(
                  "bg-slotBookDateColorHover"
                );
                dayThreeRef.current?.classList.remove(
                  "bg-slotBookDateColorHover"
                );
              }}>
              1st March
            </div>
            <div
              className={` cursor-pointer bg-slotBookDateColor ${tektur.className} font-semibold font- text-white rounded-[8px] px-[56px] py-[24px] text-slotBookDateFontSize flex-1 text-center transition-all duration-500 hover:scale-[105%] hover:text-black `}
              ref={dayThreeRef}
              onClick={() => {
                setCurrentPage(7);

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
              }}>
              2nd March
            </div>
          </div>
          <section className=" text-white grid tab:grid-cols-3 laptopS:grid-cols-4 w-full gap-[10px]">
            {slotData.map((slot, index) => {
              return slot.isCarry ? (
                ""
              ) : slot.toShow ? (
                <div
                  className={` cursor-pointer gap-[14px] bg-slotBookTime ${tektur.className} font-semibold font- rounded-[8px] px-[18px] py-[20px] text-white flex flex-row justify-center items-center `}
                  key={index}
                  onClick={handleSlotClick}
                  data-slotid={slot.id}>
                  <p data-slotid={slot.id}>{getTime(slot.startTime)}</p>
                  <div
                    className="w-[1.5px] h-[20px] bg-white"
                    data-slotid={slot.id}></div>
                  <p
                    className={` ${chakraPetch.className} ${
                      slot?.availability > 0
                        ? "text-slotBookTimeGreen"
                        : "text-slotBookTimeRed"
                    }`}
                    data-slotid={slot.id}>
                    {slot?.availability} Slots
                  </p>
                </div>
              ) : (
                <p className="text-white w-full flex justify-center">
                  Slots not available
                </p>
              );
            })}
          </section>
        </section>
        <section className="flex flex-col justify-center items-center gap-[20px]">
          <section className="flex flex-row justify-center items-center gap-[10px]"></section>
        </section>
      </main>
    </main>
  );
}
