import React, { useState, useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";
import { Tektur } from "next/font/google";

const tektur = Tektur({ subsets: ["latin"] });

function useClickOutside(ref: any, callback: any) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, callback]);
}

export default function Guide() {
  const [out, setout] = useState(0);
  const [div1, setdiv1] = useState(0);
  const [div2, setdiv2] = useState(0);
  const [div3, setdiv3] = useState(0);
  const divRef = useRef(null);

  const handleOutsideClick = () => {};
  useClickOutside(divRef, handleOutsideClick);

  function expand1() {
    setdiv1(1);
    setdiv2(0);
    setdiv3(0);
    setout(1);
  }

  function expand2() {
    setdiv1(0);
    setdiv2(1);
    setdiv3(0);
    setout(1);
  }

  function expand3() {
    setdiv1(0);
    setdiv2(0);
    setdiv3(1);
    setout(1);
  }

  return (
    <>
      <div className="bg-black flex flex-col justify-between w-full " id="guide">
        <div className="flex flex-col items-center justify-around px-[1rem]">
          <div className="px-4 lg:px-36 xl:px-36 py-14 w-full">
            <div className="flex flex-col items-center w-full">
              <div
                className={`text-white text-center ${tektur.className} font-medium text-4xl px-6 md:px-12 lg:px-24 xl:px-32 pb-8 md:pb-16 w-full`}
              >
                <p>Get All The Event Details Right Here</p>
              </div>
              <div
                className={`${tektur.className} flex flex-col lg:flex-row xl:flex-row w-[80vw] mt-[3vh] h-[50vh] `}
              >
                <div
                  ref={divRef}
                  className={`flex flex-col justify-center items-center relative text-white border-[#EA1429] px-6 md:px-12 lg:px-24 py-12 xl:py-48 lg:py-48 py-[8px] px-[1rem] mx-2 my-2 md:my-0 lg:my-0 xl:my-0 w-full lg:w-1/3 ${
                    div1 === 1
                      ? `xl:w-full transition-all duration-500 ease-in-out xl:px-24 border-8`
                      : out === 1
                      ? `xl:w-1/6 transition-all duration-500 ease-in-out xl:x-24 border-2`
                      : `xl:w-1/3 transition-all duration-500 ease-in-out xl:px-24 border-2`
                  } text-2xl md:text-3xl lg:text-4xl xl:text-4xl hover:cursor-pointer`}
                  onClick={expand1}
                >
                  Slot Booking
                  <p className={`text-lg transition-opacity duration-500 ${div1 === 1 ? "fade-in opacity-100 block" : "fade-out opacity-0 hidden"}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugiat reprehenderit officiis, optio quod, odio, modi earum
                    delectus nemo similique accusantium consectetur unde atque
                    error nobis exercitationem cum aliquam dolore? In.
                  </p>
                </div>
                <div
                  ref={divRef}
                  className={`flex flex-col justify-center items-center relative text-white border-2 border-[#EA1429] px-6 md:px-12 lg:px-24 xl:px-18 py-[8px] px-[1rem] md:py-48 mx-2 my-2 md:my-0 lg:my-0 xl:my-0 w-full lg:w-1/3 ${
                    div2 === 1
                      ? `xl:w-full transition-all duration-500 ease-in-out xl:px-24 border-8`
                      : out === 1
                      ? `xl:w-1/6 transition-all duration-500 ease-in-out xl:x-24 border-2`
                      : `xl:w-1/3 transition-all duration-500 ease-in-out xl:px-24 border-2`
                  } text-2xl md:text-3xl lg:text-4xl xl:text-4xl hover:cursor-pointer`}
                  onClick={expand2}
                >
                  Event Day
                  <p className={`text-lg transition-opacity duration-500 ${div2 === 1 ? "fade-in opacity-100 block " : "fade-out opacity-0 hidden"}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugiat reprehenderit officiis, optio quod, odio, modi earum
                    delectus nemo similique accusantium consectetur unde atque
                    error nobis exercitationem cum aliquam dolore? In.
                  </p>
                  <br />
                </div>
                <div
                  ref={divRef}
                  className={`flex flex-col justify-center relative items-center text-white border-2 border-[#EA1429] px-6 md:px-12 lg:px-24 xl:px-18 py-8 md:py-48 mx-2 my-2 md:my-0 lg:my-0 xl:my-0 w-full lg:w-1/3  py-[8px] px-[1rem] ${
                    div3 === 1
                      ? `xl:w-full transition-all duration-500 ease-in-out xl:px-24 border-8`
                      : out === 1
                      ? `xl:w-1/6 transition-all duration-500 ease-in-out xl:x-24 border-2`
                      : `xl:w-1/3 transition-all duration-500 ease-in-out xl:px-24 border-2`
                  } text-2xl md:text-3xl lg:text-4xl xl:text-4xl hover:cursor-pointer`}
                  onClick={expand3}
                >
                  Contact Us
                  <p className={`text-lg transition-opacity duration-500 ${div3 === 1 ? "fade-in opacity-100 block" : "fade-out opacity-0 hidden"}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugiat reprehenderit officiis, optio quod, odio, modi earum
                    delectus nemo similique accusantium consectetur unde atque
                    error nobis exercitationem cum aliquam dolore? In.
                  </p>
                </div>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
