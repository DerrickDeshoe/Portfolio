

'use client'

import React, { useState } from "react";
import Image from "next/image";
import Contact from "../../public/images/ContactMebrushImage.svg";
import Socials from "../Components/Socials";
import Email from "../../public/images/contact/Email.svg";
import Github from "../../public/images/contact/GitHub.svg";
import WhatsApp from "../../public/images/contact/WhatsApp.svg";
import LinkedIn from "../../public/images/contact/LinkedIn.svg";
import Call from "../../public/images/contact/Call.svg";
import Link from "next/link";

const Page = () => {
  // States to track form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    // Process form data, you can send it to your server or API
    console.log(formData); // For now, we'll just log the form data
    // Add further logic here to send the data to a backend or API.
  };

  return (
    <div className="bg-contact lg:bg-no-repeat lg:bg-center h-[100vh] relative text-white">
      <div className="flex items-center  absolute top-0 w-full h-full bg-overlay bg-opacity-[70%] lg:items-start">
        <div className="w-[50%] lg:w-[25%] absolute top-[12%] left-[27%] lg:top-[10%] lg:left-[0%]">
          <Image src={Contact} alt="image" />
        </div>
        <div className="flex flex-col-reverse lg:flex lg:flex-row text-white p-10 w-full lg:mt-[13%] mt-[10%]">
          <div className="lg:w-[40%] flex flex-wrap lg:flex lg:flex-col lg:justify-between">
            <Link href="#" className="h-[5%] w-[50%]">
              <Socials image={Call} details="071 131 1050" />
            </Link>
            <Link href="#" className="h-[5%] w-[50%]">
              <Socials image={WhatsApp} details="071 131 1050" />
            </Link>
            <Link href="#" className="h-[5%] w-[50%]">
              <Socials image={Github} details="DerrickDeshoe" />
            </Link>
            <Link href="#" className="h-[5%] w-[50%]">
              <Socials image={LinkedIn} details="Derrick Deshu" />
            </Link>
            <Link href="#" className="h-[5%] w-[50%]">
              <Socials image={Email} details="derrickdeshoe71@gmail.com" />
            </Link>
          </div>
          <div className="lg:w-[50%] flex flex-col justify-end space-y-3">
            <form onSubmit={handleSubmit} className="space-y-3 flex flex-col items-end">
              <div className="flex justify-between space-x-2 w-[100%]">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-white p-2 text-xs lg:text-sm outline-none w-[100%]  rounded-lg bg-transparent"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-white p-2 text-xs lg:text-sm  outline-none w-[100%]  rounded-lg bg-transparent"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="border border-white p-2 pr-[113px] text-xs lg:text-sm outline-none rounded-lg bg-transparent w-[100%]"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="border border-white p-2 pb-[100px] pr-[113px] md:pb-[150px] text-xs lg:text-sm outline-none rounded-lg bg-transparent w-[100%]"
              />
              <button
                type="submit"
                className="bg-red hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-xs "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

