import React from "react";

function FeatureItem({ title, count, description }) {
  return (
    <div className="">
      <div className="flex items-center space-x-4">
        <div className="px-5 py-1 text-white bg-primaryRed rounded-full">
          {count}
        </div>
        <h3 className="text-[16px] text-veryDarkBlue font-bold">{title}</h3>
      </div>
      <p className="text-sm text-veryDarkBlue/60 leading-7 text-left pt-2 lg:max-w-lg">
        {description}
      </p>
    </div>
  );
}

export default FeatureItem;
