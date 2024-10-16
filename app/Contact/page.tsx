import React from "react";
import Image from "next/image";
import Contact from "../../public/images/ContactMebrushImage.svg";
import Socials from "../Components/Socials";
import Email from "../../public/images/contact/Email.svg";
import Github from "../../public/images/contact/GitHub.svg";
import WhatsApp from "../../public/images/contact/WhatsApp.svg";
import LinkedIn from "../../public/images/contact/LinkedIn.svg";
import Call from "../../public/images/contact/Call.svg";

const page = () => {
  return (
    <div className="bg-contact lg:bg-no-repeat lg:bg-center h-[100vh] relative text-white">
      <div className="flex items-center absolute top-0 w-full h-full bg-overlay bg-opacity-[70%] lg:items-start">
        <div className="w-[50%] lg:w-[25%] absolute top-[13%] left-[27%] lg:top-[10%] lg:left-[0%]">
          <Image src={Contact} alt="image" />
        </div>
        <div className="flex flex-col-reverse lg:flex lg:flex-row text-white p-10 w-full lg:mt-[13%] mt-[10%]">
          <div className="lg:w-[40%] flex flex-wrap justify-between lg:flex lg:flex-col">
            <Socials image={Call} details="071 131 1050" />
            <Socials image={WhatsApp} details="071 131 1050" />
            <Socials image={Github} details="DerrickDeshoe" />
            <Socials image={LinkedIn} details="Derrick Deshu" />
            <Socials image={Email} details="derrickdeshoe71@gmail.com" />
          </div>
          <div className="lg:w-[50%] flex flex-col space-y-3">
            <div className="flex space-x-2 ">
              <input
                type="text"
                placeholder="Name"
                className="border border-white p-2 text-xs lg:text-sm outline-none w-[50%]  rounded-lg bg-transparent"
              />
              <input
                type="text"
                placeholder="Email"
                className="border border-white p-2 text-xs lg:text-sm  outline-none w-[50%]  rounded-lg bg-transparent"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="border border-white p-2 pr-[113px] text-xs lg:text-sm outline-none rounded-lg bg-transparent "
            />
            <input
              type="text"
              placeholder="Message"
              className="border border-white p-2 pb-[100px] pr-[113px] md:pb-[150px] text-xs lg:text-sm outline-none rounded-lg bg-transparent "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
