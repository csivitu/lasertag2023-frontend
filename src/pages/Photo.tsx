import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { Tektur } from "next/font/google";
import Image from "next/image";
const tektur = Tektur({ subsets: ["latin"] });

export default function Photo() {
  const array = [
    {
      source: "/landingassests/carouselassets/image1.svg",
    },
    {
      source: "/landingassests/carouselassets/image2.svg",
    },
    {
      source: "/landingassests/carouselassets/image3.svg",
    },
    {
      source: "/landingassests/carouselassets/image4.svg",
    },
    {
      source: "/landingassests/carouselassets/image5.svg",
    },
  ];
  const [current, setCurrent] = useState(0);
  const prev = () => {
    const isFirst = current === 0;
    const newIndex = isFirst ? array.length - 1 : current - 1;
    setCurrent(newIndex);
  };
  const next = () => {
    const last = current === array.length - 1;
    const newIndex = last ? 0 : current + 1;
    setCurrent(newIndex);
  };
  return (
    <div
      className={`bg-black h-screen text-white ${tektur.className}  flex flex-col justify-evenly relative`}
    >
      <div>
        <p className="text-center text-4xl">
          A Thrilling Multiplayer Shooting Experience
        </p>
        <br />
        <p className=" text-center text-xl">
          Laser Tag offers you a chance to step onto the arena for a thrilling
          multi-player experience.
        </p>
        <p className=" text-center text-xl">
          Don your vests and have your guns at the ready, maximize hits to climb
          up the leaderboard!
        </p>
      </div>

      <div>
        <div className="flex flex-row justify-center align-center">
          <button onClick={prev}>
            <Image
              src={`/landingassests/carouselassets/goleft.svg`}
              alt="image-1"
              width={100}
              height={100}
            />
          </button>
          <div>
            <Image
              src={`${array[current].source}`}
              alt="image-1"
              width={250}
              height={250}
            />
          </div>
          <button onClick={next}>
            <Image
              src="/landingassests/carouselassets/goright.svg"
              alt="goright"
              width={100}
              height={100}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
