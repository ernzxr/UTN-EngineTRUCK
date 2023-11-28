import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Carousel = () => {
  const slides = [
   /**  {
      url: "/motor_1.jpg",
    },
    {
      url: "/repuesto_1.png",
    },*/
    {
      url: "/opcar3.jpg",
    },
    {
      url: "/opcar2.jpg",
    },
    {
      url: "/opcar1.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="h-[90%] w-[95%] m-auto rounded-[20px] shadow-lg bg-center bg-cover duration-500"
      ></div>
      <div
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
      >
        {" "}
        <BsChevronCompactLeft size={30} />
      </div>
      <div
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
      >
        {" "}
        <BsChevronCompactRight size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          // eslint-disable-next-line react/jsx-key
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer text-gray-400 dark:text-white"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </>
  );
};

export default Carousel;
