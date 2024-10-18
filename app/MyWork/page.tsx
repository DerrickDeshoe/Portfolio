'use client';

import React, { useState } from "react";
import Image from "next/image";
import MyWork from "../../public/images/myWorkImage.svg";
import Projects from "../Components/Projects";
import Gamer from "../../public/images/my work/GamerPic.png";
import Travel from '../../public/images/my work/Travel.png';
import { RxDoubleArrowLeft } from "react-icons/rx";
import { RxDoubleArrowRight } from "react-icons/rx";

const Page = () => {  // Changed 'page' to 'Page'
  // State to track the current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of Projects components
  const slides = [
    {
      image: Gamer,
      description:
        "Gamer Paradise is a dynamic website designed for gaming enthusiasts. It offers a rich collection of game reviews, news, and guides, delivering a comprehensive gaming experience. The site features an engaging, interactive design, providing users with the latest updates from the gaming world.",
      link: 'https://vercel.live/link/gamer-paradise-4i51.vercel.app/?via=team-dashboard-project-entity&p=1'
    },
    {
      image: Travel,
      description:
        "Travel Buddy is a user-friendly travel website offering curated recommendations for top places to visit, along with various travel-related services. It helps users explore destinations, discover hidden gems and plan their trips efficiently, providing a seamless travel experience for adventurers",
      link: 'https://vercel.live/link/travelguide-seven.vercel.app/?via=team-dashboard-project-entity&p=1'
    },
    {
      image: Travel,
      description:
        "Travel Buddy is a user-friendly travel website offering curated recommendations for top places to visit, along with various travel-related services. It helps users explore destinations, discover hidden gems and plan their trips efficiently, providing a seamless travel experience for adventurers",
      link: 'https://vercel.live/link/travelguide-seven.vercel.app/?via=team-dashboard-project-entity&p=1'
    },
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="bg-work h-[100vh] relative text-white">
      {/* Background overlay */}
      <div className="absolute top-0 w-full h-full bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col lg:flex-col justify-center items-center w-full h-full px-5 lg:justify-center lg:items-start lg:px-0 space-y-3 lg:space-y-2 lg:space-x-10 pt-[4rem] lg:pt-[10%] ">
        {/* Image on the left */}
        <div className="w-[60%] lg:w-[25%] absolute top-[12%] lg:top-[10%] lg:left-0">
          <Image src={MyWork} alt="Work Image" />
        </div>

        {/* Projects Slider */}
        <div className="w-full lg:w-[60%] flex justify-center items-center overflow-hidden relative ">
          {/* Projects components that slide */}
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 lg:flex lg:items-center"
              >
                <Projects
                  image={slide.image}
                  link={slide.link}
                  projectDescription={slide.description}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Slider Controls */}
        <div className="flex justify-center w-full lg:w-[37%] xl:w-[35%] space-x-5 mt-5">
          <button
            onClick={prevSlide}
            className="bg-white hover:bg-gray text-black py-2 px-4 rounded-lg"
          >
            <RxDoubleArrowLeft/>
          </button>
          <button
            onClick={nextSlide}
            className="bg-white hover:bg-gray text-black py-2 px-4 rounded-lg"
          >
            <RxDoubleArrowRight/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page; // Exporting with an uppercase name
