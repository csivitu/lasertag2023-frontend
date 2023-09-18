import React, { useState } from "react";
import Image from "next/image";
import "tailwindcss/tailwind.css";

const Slideshow: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const numberOfImages = 2;

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
    "/landingassests/carouselassets/WhatsApp Image 2023-09-19 at 1.19.06 AM (1).jpeg",
    "/landingassests/carouselassets/WhatsApp Image 2023-09-19 at 1.19.06 AM (2).jpeg",
  ]; // Define your image paths here

  return (
    <div className=""id="gallery">
      <div className="container mx-auto relative w-full" data-carousel="static">
        <div className="relative overflow-hidden rounded-lg">
          {imagePaths.map((path, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out ${
                index === activeIndex ? "block" : "hidden"
              }`}
              data-carousel-item={index === activeIndex ? "active" : undefined}
            >
              <Image
                src={path} // Use the image path from the array
                alt={`Image ${index + 1}`}
                width={750} // Adjust the width and height as needed
                height={750}
              />
            </div>
          ))}
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
  );
};

export default Slideshow;
