import React from "react";
import Image from "next/image";
import Navbar from "components/Navbar";
function Hero() {
  return (
    <div className="relative z-30 container max-w-8xl mx-auto pt-11">
      <Navbar />
      <div className="flex flex-col justify-center items-center md:flex-row-reverse md:justify-between  my-12 md:my-16 lg:my-[120px]  px-6 xl:px-[186px] ">
        <div className="relative w-80 h-72 md:w-[440px] md:h-[455px] lg:w-[540px] lg:h-[485px]">
          <Image src="/images/illustration-intro.svg" alt="" layout="fill" />
        </div>
        <div className="absolute bottom-[-80px] right-[-190px] md:hidden">
          <div className="relative h-[350px] w-[350px]">
            <Image src="/images/bg-tablet-pattern.svg" alt="" layout="fill" />
          </div>
        </div>
        <div className="relative z-50 max-w-sm text-center md:text-left lg:max-w-md">
          <h1 className="text-[40px] font-bold text-primaryBlue tracking-[-1px] leading-[50px]  md:text-5xl lg:leading-[64px]">
            Bring everyone together to build better products.
          </h1>
          <p className="px-5 leading-7 font-light pt-2 pb-7  max-w-[350px] md:px-0 lg:py-4 mb-8 text-veryDarkBlue font-be-vietnam-pro">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className="py-3 px-8 bg-primaryRed rounded-full shadow-sm text-sm text-white hover:bg-[#F98F75] font-be-vietnam-pro">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
