import React from "react";

function FeatureItem({ title, count, description }) {
  return (
    <div className="">
      <div className="flex items-center  space-x-4 lg:space-x-6">
        <div className="px-5 py-1 text-white bg-primaryRed rounded-full">
          {count}
        </div>
        <h3 className="text-[16px] text-veryDarkBlue font-bold">{title}</h3>
      </div>
      <div className="md:max-w-[445px] lg:max-w-lg lg:ml-20">
        <p className="text-sm text-left  text-veryDarkBlue/60 leading-7 lg:text-left pt-2">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeatureItem;
