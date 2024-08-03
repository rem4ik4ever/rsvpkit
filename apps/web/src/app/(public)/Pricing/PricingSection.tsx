'use client';

import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Pricingtoggle from "./Pricingtoggle";
import { useState } from "react";
import { BsCheck } from "react-icons/bs";

function PricingSection() {
  const [enabled, setEnabled] = useState(false);
  const pricingOptions = [
    {
      name: "Free",
      price: "$299",
      yearlyPrice: "$529",
      description:
        "Let top creative talent come to you by posting your job listing on #1 Design Jobs Board.",
      features: [
        "Access to All Features",
        "20% discount on backorders",
        "Domain name Appraisal",
        "10 Social Profiles",
      ],
      backgroundColor: "#FFFFFF",
      buttonColor: "bg-white",
      buttonTextColor: "text-black",
      tagColor: "bg-gray-200",
      tagTextColor: "text-black",
    },

    {
      name: " Pro",
      price: "$499",
      yearlyPrice: "$1228",
      description:
        "Get your roles filled faster with unlimited access to Dribbble's Job Board and Designer search.",
      features: [
        "Access to All Features",
        "20% discount on backorders",
        "Domain name Appraisal",
        "10 Social Profiles",
        "Calendar View",
        "24/7 Support",
      ],
      extraBenefits: "Everything in free plan, plus",
      backgroundColor: "#ffffff",
      buttonColor: "bg-[#54BD95]",
      buttonTextColor: "text-white",
      tagColor: "bg-gray-200",
      tagTextColor: "text-black",
    },
  ];

  return (
    <section className="pricing__section max-w-5xl mx-auto py-20">
      <div className="pricing-headline flex flex-col gap-y-2">
        <div className="flex items-center justify-center flex-col gap-y-3">
          <h3 className="text-3xl sm:text-4xl max-w-xs mx-auto md:max-w-full md:mx-0 text-center font-bold leading-[1.15] text-black">
            Ready to start with us?
          </h3>
          <p className="text-sm text-slate-700/70">
            Choose the best package that suits you
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <Pricingtoggle enabled={enabled} setEnabled={setEnabled} />
        </div>
        <div className="pricing-card max-w-3xl mx-auto w-full grid px-10 lg:px-14 xl:px-2 md:grid-cols-2 gap-6 py-8 lg:py-12 lg:pb-20 lg:pt-8">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`card pricing-card-box w-full h-fit border border-[#d4d4d440] rounded-xl flex flex-col `}
              style={{ backgroundColor: option.backgroundColor }}
            >
              <div className="">
                <div className="p-5 flex flex-col gap-y-2">
                  <p
                    className={` rounded-full text-center px-2.5 py-[1px] w-fit text-sm font-semibold text-zinc-500`}
                  >
                    {option.name}
                  </p>
                  <h3 className="mt-5 text-sm font-medium text-slate-500/70">
                    <span className="text-3xl font-[620] text-slate-800">
                      {enabled ? option.yearlyPrice : option.price}
                      <span className="text-zinc-500 text-sm font-medium">
                        {enabled ? "/year" : "/month"}
                      </span>
                    </span>
                  </h3>
                  <p className="text-zinc-500 text-xs font-medium">
                    {option.description}
                  </p>
                </div>
              </div>

              <div className="pricing-features flex flex-col gap-y-5 p-5">
                {option.extraBenefits && (
                  <p className="text-[#7D7D82] text-sm font-[400]">
                    {option.extraBenefits}
                  </p>
                )}
                {option.features.map((feature, index) => (
                  <div key={index} className="flex gap-x-3">
                    <div className="bg-[#54BD95] rounded-full flex items-center justify-center">
                      <BsCheck className="text-white text-xl" />
                    </div>
                    <p className="text-[#486581] text-sm">{feature}</p>
                  </div>
                ))}
                <button
                  className={`my-2 flex text-base lg:text-lg items-center justify-center rounded-full h-12 w-full font-bold  border border-slate-500 hover:shadow-lg hover:drop-shadow-lg transition duration-200 ${option.buttonColor} ${option.buttonTextColor}`}
                >
                  <span
                    className="tracking-tight"
                    style={{ color: option.buttonTextColor }}
                  >
                    Choose Plan
                  </span>
                  <BsArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
