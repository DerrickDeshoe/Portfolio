import React from "react";
import Image, { StaticImageData } from "next/image";

interface AboutMe {
  heading: String;
  image: StaticImageData;
  description: String;
  image2: StaticImageData;
}

const AboutMe = (props: AboutMe) => {
  return (
    <div className="flex flex-col space-y-3 text-white">
      <div className="flex space-x-3 items-center">
        <h3 className="font-bold text-[20px]">{props.heading}</h3>
        <Image src={props.image} alt="image" className="w-[10%]"/>
      </div>
      <div className="bg-gray opacity-[75%] lg:w-[100%] p-10 lg:p-[14%] text-sm leading-relaxed tracking-wide flex flex-col justify-center items-center space-y-5">
        <p>{props.description}</p>
        <Image src={props.image2} alt='image'/>
      </div>
    </div>
  );
};

export default AboutMe;
