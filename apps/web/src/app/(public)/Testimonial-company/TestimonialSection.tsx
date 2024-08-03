import React from "react";
import google from "../assets/company-1.svg";
import rrr from "../assets/company-2.svg";
import slack from "../assets/company-3.svg";
import zoom from "../assets/company-4.svg";
import adobe from "../assets/company-5.svg";

function TestimonialCompany() {
  return (
    <section className="testimonial-company flex flex-col gap-y-5 lg:gap-y-10 items-center justify-center p-5 lg:py-10">
      <div className="flex flex-col gap-y-5 items-center justify-center max-w-lg mx-auto">
        <h3 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold">
          B2B digital marketing agency with multiple awards
        </h3>
        <p className="font-medium">
          Get to know our awesome features that are absolutely suit for
          everyone.Explore the features and know the best
        </p>
      </div>
      <div className="company-logo flex flex-wrap max-w-xs mx-auto items-center lg:w-full lg:max-w-4xl justify-evenly lg:justify-between gap-10">
        <img
          className="w-[20%] lg:w-[7%] aspect-[16/9] object-contain"
          src={google.src}
          alt=""
        />
        <img
          className="w-[20%] lg:w-[7%] aspect-[16/9] object-contain"
          src={rrr.src}
          alt=""
        />
        <img
          className="w-[20%] lg:w-[7%] aspect-[16/9] object-contain"
          src={slack.src}
          alt=""
        />
        <img
          className="w-[20%] lg:w-[7%] aspect-[16/9] object-contain"
          src={zoom.src}
          alt=""
        />
        <img
          className="w-[20%] lg:w-[7%] aspect-[16/9] object-contain"
          src={adobe.src}
          alt=""
        />
      </div>
    </section>
  );
}

export default TestimonialCompany;
