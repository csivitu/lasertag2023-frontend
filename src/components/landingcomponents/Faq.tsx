import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import { Tektur } from "next/font/google";
const tektur = Tektur({ subsets: ["latin"] });

export default function FAQ() {
  const [expand1, setExpand1] = useState<boolean>(false);
  const [expand2, setExpand2] = useState<boolean>(false);
  const [expand3, setExpand3] = useState<boolean>(false);
  const [expand4, setExpand4] = useState<boolean>(false);
  const [expand5, setExpand5] = useState<boolean>(false);

  return (
    <main
      className={`${tektur.className} flex justify-between items-center flex-col gap-[1rem] bg-black text-white`}
    >
      <p className="font-bold text-5xl" id="faq">
        FAQ&apos;s
      </p>
      <section className="flex flex-col justify-center items-center  font-semibold laptopS:w-[90%] gap-[1rem] tab:w-[100%]">
        <div
          className="flex flex-col justify-center items-start bg-faqBackground tab:w-[75%] bg-no-repeat bg-cover p-[14px] mobile:w-[85%] box-content text-left"
          onClick={() => {
            setExpand1(!expand1);
          }}
        >
          <p className="text-lg">Who can participate in LaserTag?</p>
          <div
            className={`font-normal text-l transition-all duration-500 ease-in-out ${
              expand1 ? "max-h-[1000px]" : "max-h-0 overflow-hidden"
            }`}
          >
            Everyone on campus (sorry, third years) is welcome to participate.
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-start bg-faqBackground tab:w-[75%] bg-no-repeat bg-cover p-[14px] mobile:w-[85%] box-content text-left"
          onClick={() => {
            setExpand2(!expand2);
          }}
        >
          <p className="text-lg">How long is the event for?</p>
          <div
            className={`font-normal text-l  transition-all duration-500 ease-in-out ${
              expand2 ? "max-h-[1000px]" : "max-h-0 overflow-hidden"
            }`}
          >
            Laser Tag will be open for all 3 days. Participants get to play in
            15 minute slots
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-start bg-faqBackground tab:w-[75%] bg-no-repeat bg-cover p-[14px] mobile:w-[85%] box-content text-left"
          onClick={() => {
            setExpand3(!expand3);
          }}
        >
          <p className="text-lg">Can the other person get hurt?</p>
          <div
            className={`font-normal text-l  transition-all duration-500 ease-in-out ${
              expand3 ? "max-h-[1000px]" : "max-h-0 overflow-hidden"
            }`}
          >
            Yes, emotionally.
          </div>
        </div>

        <div
          className="flex flex-col justify-center items-start bg-faqBackground tab:w-[75%] bg-no-repeat bg-cover p-[14px] mobile:w-[85%] box-content text-left"
          onClick={() => {
            setExpand4(!expand4);
          }}
        >
          <p className="text-lg">How do I form a team?</p>
          <div
            className={`font-normal text-l  transition-all duration-500 ease-in-out ${
              expand4 ? "max-h-[1000px]" : "max-h-0 overflow-hidden"
            }`}
          >
            You can team up with your friends by booking the same slots. If your
            friends ditch you like ours do, don&apos;t worry, you&apos;ll find
            teammates in the arena.
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-start bg-faqBackground tab:w-[75%] bg-no-repeat bg-cover p-[14px] mobile:w-[85%] box-content text-left"
          onClick={() => {
            setExpand5(!expand5);
          }}
        >
          <p className="text-lg">What should I bring to the game?</p>
          <div
            className={`font-normal text-l  transition-all duration-500 ease-in-out ${
              expand5 ? "max-h-[1000px]" : "max-h-0 overflow-hidden box-content"
            }`}
          >
            Your VIT ID card and immaculate vibes. Feel free to show up
            impeccably dressed and/or with theme related accents.
          </div>
        </div>
      </section>
    </main>
  );
}
