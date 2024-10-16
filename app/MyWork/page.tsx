import React from "react";
import Image from "next/image";
import MyWork from "../../public/images/myWorkImage.svg";

const page = () => {
  return (
    <div className="lg:bg-work lg:bg-no-repeat lg:bg-center h-[100vh] relative text-white bg-black">
      <div className="flex flex-col items-center absolute top-0 w-full h-full bg-overlay bg-opacity-[50%] lg:items-start">
        <div className="flex items-center flex-col space-y-[5%] lg:w-[80%] lg:mt-20 lg:items-start">
          <div className="w-[50%] lg:w-[25%] absolute top-[13%] lg:top-[10%]">
            <Image src={MyWork} alt="image" />
          </div>
        </div> 
      </div>
    </div>
  );
};

export default page;
