import React from "react";

function CTA() {
  return (
    <div className="bg-primaryRed container max-w-8xl mx-auto">
      <div className="flex flex-col justify-center items-center py-[91px] md:flex-row md:justify-between px-6 xl:px-[186px]">
        <h2 className=" text-[40px] font-bold text-white text-center md:text-[30px] lg:text-[40px] md:max-w-lg md:text-left">
          Simplify how your team works today.
        </h2>

        <div className="mt-7 pb-[91px] md:mt-0 md:pb-0">
          <button className="py-3 px-8 bg-white  rounded-full shadow-sm text-sm text-primaryRed font-be-vietnam-pro hover:text-[#F98F75]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default CTA;
