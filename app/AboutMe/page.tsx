import React from "react";
import Image from "next/image";
import AboutMe from '../../public/images/Group 3689.svg'

const page = () => {
  return (
    <div className=" lg:bg-about lg:bg-no-repeat lg:bg-center h-[96vh] relative text-white bg-black ">
      <div className=" flex absolute top-0 w-full h-full bg-overlay bg-opacity-[50%] items-start">
        <div className="flex flex-col space-y-5 lg:w-[80%] px-10 lg:mt-20">
         <div className="w-[35%]">
          <Image src={AboutMe} alt="Image" />
         </div>
          <div className="flex flex-col relative">
            <div className="relative">
              <h1 className="font-bold lg:text-4xl text-[20px] lg:w-[460px] ">
                I&apos;m a skilled web developer, UX/UI designer, and digital
                marketer.
              </h1>
              <div className="absolute bottom-0 right-[95px] lg:hidden">
                <p className="text-xs lg:text-[15px]">I bring ideas to</p>
              </div>
            </div>
            <div className="hidden lg:flex lg:absolute lg:right-[275px] lg:top-[93px] lg:text-lg xl:right-[530px]">I bring ideas to</div>
            <div>
              <p className=" text-xs lg:text-[15px] lg:w-[50%] leading-normal ">
                life by coding beautiful websites, creating user-friendly
                interfaces, and driving targeted online campaigns. I love
                collaborating with teams and clients to achieve shared goals. My
                work is a fusion of creativity and technical expertise, ensuring
                clean code and engaging experiences. I stay up-to-date with
                industry trends and enjoy continuous learning. Let&apos;s work
                together to create something extraordinary!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
