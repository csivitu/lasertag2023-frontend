import React, { useState } from "react";
import { Tektur } from 'next/font/google'
import Image from "next/image";
import "tailwindcss/tailwind.css";
const tektur = Tektur({ subsets: ['latin'] })

const Slideshow: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const numberOfImages = 5;

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : numberOfImages - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < numberOfImages - 1 ? prevIndex + 1 : 0
    );
  };

  const imagePaths = [
    "/landingassests/carouselassets/image1.webp",
    "/landingassests/carouselassets/image2.webp",
    "/landingassests/carouselassets/image3.webp",
    "/landingassests/carouselassets/image4.webp",
    "/landingassests/carouselassets/image5.webp",
  ]; // Define your image paths here

  return (
    <>
      {/* <div className="bg-content bg-no-repeat">
        <div className={`  ${tektur.className} text-[#FFF6E8] font-medium lg:text-4xl text-3xl text-center tracking-widest px-[2vw]`}>
          A Thrilling Multiplayer Shooting Experience{" "}
        </div>

        <div className={` ${tektur.className} text-[#FFF6E8] font-normal lg:text-lg text-xl text-center px-[3vw]`}>
          Laser Tag offers you a chance to step onto the arena for a thrilling
          multi-player experience. <br />
          Don your vests and have your guns at the ready, maximize hits to climb
          up the leaderboard!
        </div>
      </div> */}

      <main className="bg-gallery w-full h-screen flex justify-center  items-center bg-no-repeat bg-cover">
        <div className="lg:w-[80vw] mt-[2vh]" id="gallery">
          <div
            className=" mx-auto relative px-[2vw]"
            data-carousel="static"
          >
            <div className="relative overflow-hidden rounded-lg">
              {imagePaths.map((path, index) => {
                return (
                  <div
                    key={index}
                    className={`duration-700 ease-in-out ${index === activeIndex ? "block" : "hidden"
                      } flex`}
                    data-carousel-item={index === activeIndex ? "active" : undefined}
                  >
                    <div className="flex items-center">
                      <Image
                        src={imagePaths[(index) % 5]} // Use the image path from the array
                        alt={`Image ${index}`}
                        width={200} // Adjust the width and height as needed
                        height={200}
                        className="border-2 border-[#93FD10]"
                      />
                    </div>
                    <div className="flex items-center">
                      <Image
                        src={imagePaths[(index + 1) % 5]} // Use the image path from the array
                        alt={`Image ${index + 1}`}
                        width={400} // Adjust the width and height as needed
                        height={400}
                        className="border-2 border-[#93FD10]"
                      />
                    </div>
                    <div className="flex items-center">
                      <Image
                        src={imagePaths[(index + 2) % 5]} // Use the image path from the array
                        alt={`Image ${index + 2}`}
                        width={600} // Adjust the width and height as needed
                        height={600}
                        className="border-2 border-[#93FD10]"
                      />
                    </div>
                    <div className="flex items-center">
                      <Image
                        src={imagePaths[(index + 3) % 5]} // Use the image path from the array
                        alt={`Image ${index + 3}`}
                        width={400} // Adjust the width and height as needed
                        height={400}
                        className="border-2 border-[#93FD10]"
                      />
                    </div>
                    <div className="flex items-center">
                      <Image
                        src={imagePaths[(index + 4) % 5]} // Use the image path from the array
                        alt={`Image ${index + 4}`}
                        width={200} // Adjust the width and height as needed
                        height={200}
                        className="border-2 border-[#93FD10]"
                      />
                    </div>
                  </div>
                );
              })}


            </div>

            <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
              onClick={handlePrevClick}
            >
              <Image
                src="/landingassests/carouselassets/goleft.svg"
                alt="Left arrow"
                width={40}
                height={40}
              />

              {/* Left arrow icon */}
            </button>

            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
              onClick={handleNextClick}
            >
              <Image
                src="/landingassests/carouselassets/goright.svg"
                alt="Left arrow"
                width={40}
                height={40}
              />{" "}
              {/* Right arrow icon */}
            </button>
          </div>
        </div>
      </main>

    </>
  );
};

export default Slideshow;
