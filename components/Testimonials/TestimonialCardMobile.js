import React from "react";
import Image from "next/image";

function TestimonialCardMobile({
  name,
  imgSrc,
  quote,
  activeIndex,
  itemIndex,
}) {
  return (
    <div
      className={`${
        activeIndex === itemIndex ? "block" : "hidden"
      } relative bg-[#FAFAFA] text-center pb-10 w-[340px] h-[240px] my-10 md:block`}
    >
      <div className="absolute  left-2/4 translate-x-[-50%] translate-y-[-50%]">
        <Image src={imgSrc} alt={name} width={72} height={72} />
      </div>
      <h3 className="font-bold text-[16px] pt-[60px] pb-5">{name}</h3>
      <p className="px-5">{quote}</p>
    </div>
  );
}

export default TestimonialCardMobile;
