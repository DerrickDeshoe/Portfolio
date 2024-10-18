"use client";

import Image from "next/image";
import Hero from "../public/images/herro.svg";
import React from "react";
import Button from "./Components/Button";

export default function Home() {
  return (
    <div className="bg-grayishBlack h-[100vh] relative px-10 flex flex-col items-center justify-center lg:items-start">
   
      <div className="hidden md:flex lg:w-[70%] xl:w-[60%] absolute bottom-0 right-0">
        <Image src={Hero} alt="image" />
      </div>
      <div className="flex flex-col justify-between items-center lg:justify-between lg:items-start space-y-10 z-10">
        <div className="flex relative justify-center mb-8 lg:mb-0">
          <h1 className="text-white hover:text-gray text-2xl lg:text-5xl xl:text-6xl w-[100%] lg:w-[100%] font-light leading-tight">
            Transforming Visions Into
          </h1>
          <h1 className="text-2xl lg:text-5xl xl:text-6xl w-[100%] text-red absolute top-[33px] left-[5px] lg:top-[120%] lg:left-[0%]">
            Vibrant Digital Realities
          </h1>
        </div>
        <div className="lg:pt-[80px]">
          <p className="text-gray hover:text-white text-xs lg:text-[17px] text-center lg:text-left lg:pl-2 lg:w-[45%] tracking-wide lg:leading-normal">
            Hi! I am Derrick, I&apos;m passionate about bringing concepts into
            dynamic and captivating realities that resonate with creativity and
            innovation. Let&apos;s embark on this exciting adventure together and turn
            your vision into something extraordinary!
          </p>
        </div>
      </div>
      <div className="mt-20 lg:mt-15 lg:ml-[5%]">
        <Button /> 
      </div>
    </div>
  );
}
