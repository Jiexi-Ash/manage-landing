import React from "react";
import FeatureItem from "./FeatureItem";
import Image from "next/image";

function Features() {
  return (
    <div className="relative container max-w-8xl mx-auto my-24">
      <div className="hidden absolute top-80 left-[-300px] lg:block">
        <div className="relative h-[600px] w-[600px]">
          <Image src="/images/bg-tablet-pattern.svg" alt="" layout="fill" />
        </div>
      </div>
      <div className="relative z-30 flex flex-col justify-center items-center  px-6 md:flex-row md:justify-between md:items-start lg:px-[186px]">
        <div className="max-w-lg text-center px-4 md:text-left md:pt-7 md:px-0">
          <h2 className="font-extrabold text-veryDarkBlue text-3xl leading-[45px] tracking-[-0.62px] md:text-[20px] lg:text-[40px]">
            What’s different about Manage?
          </h2>

          <p className="font-normal  text-veryDarkBlue/60 text-sm pt-[14px] md:max-w-sm lg:max-w-[320px]  lg:text-[16px] lg:leading-7">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="flex flex-col space-y-14 pt-10">
          <FeatureItem
            title="Track company-wide progress"
            count="01"
            description="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
          />
          <FeatureItem
            title="Advanced built-in reports"
            count="02"
            description="Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
          />
          <FeatureItem
            title="Everything you need in one place"
            count="03"
            description="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
