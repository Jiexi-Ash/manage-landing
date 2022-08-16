import { useState } from "react";
import TestimonialCardMobile from "./TestimonialCardMobile";

function Testimonials() {
  const [active, setActive] = useState(0);
  return (
    <div className="relative container max-w-8xl mx-auto my-16">
      <h1 className="text-center text-[32px] font-extrabold font-be-vietnam-pro text-veryDarkBlue">
        What they’ve said
      </h1>
      <div
        className="relative z-30 flex flex-col justify-center items-center  px-6 md:flex-row md:justify-between md:items-start md:overflow-x-scroll md:scrollbar-none md:px-0"
        tabIndex={0}
      >
        <div className="flex mt-16  md:flex-row md:justify-between md:items-center md:space-x-6">
          <TestimonialCardMobile
            activeIndex={active}
            itemIndex={0}
            name="Anisha Li"
            imgSrc="/images/avatar-anisha.png"
            quote="  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
          />
          <TestimonialCardMobile
            activeIndex={active}
            itemIndex={1}
            name="Ali Bravo"
            imgSrc="/images/avatar-ali.png"
            quote="“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
          />
          <TestimonialCardMobile
            activeIndex={active}
            itemIndex={2}
            name="Richard Watts"
            imgSrc="/images/avatar-richard.png"
            quote="““Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”"
          />
          <TestimonialCardMobile
            activeIndex={active}
            itemIndex={3}
            name="Shanai Gough"
            imgSrc="/images/avatar-shanai.png"
            quote="“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”"
          />
        </div>
        <div className="flex justify-center items-center space-x-3 md:hidden">
          <div
            onClick={() => {
              setActive(0);
            }}
            className={`${
              active === 0 ? "bg-primaryRed" : "border border-primaryRed"
            } rounded-full w-3 h-3`}
          ></div>
          <div
            onClick={() => setActive(1)}
            className={`${
              active === 1 ? "bg-primaryRed" : "border border-primaryRed"
            } rounded-full w-3 h-3`}
          ></div>
          <div
            onClick={() => setActive(2)}
            className={`${
              active === 2 ? "bg-primaryRed" : "border border-primaryRed"
            } rounded-full w-3 h-3`}
          ></div>
          <div
            onClick={() => setActive(3)}
            className={`${
              active === 3 ? "bg-primaryRed" : "border border-primaryRed"
            } rounded-full w-3 h-3`}
          ></div>
        </div>
      </div>
      <div className="w-full text-center my-12">
        <button className="py-3 px-8 bg-primaryRed rounded-full shadow-sm text-sm text-white hover:bg-[#F98F75] font-be-vietnam-pro text-center">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
