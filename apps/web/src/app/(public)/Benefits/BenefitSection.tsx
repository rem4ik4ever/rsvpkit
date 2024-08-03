import React from "react";
import featureImage from "../assets/featureimg.png";
import { BsCheck } from "react-icons/bs";

const featuresData = [
  "Create and customize events",
  "Send invites via Email or SMS",
  "Track RSVPs and check-in attendees",
];

function FeatureSection() {
  return (
    <section className="max-w-5xl mx-auto flex flex-col gap-x-10 lg:flex-row items-center py-10 px-10">
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl max-w-lg">
          Events made easy with RSVPkit
        </h2>
        <p className="max-w-md mx-0 pt-2 text-center lg:text-left">
          We offer a wide range of features to help you organize your events
        </p>
        <div className="py-5 flex flex-col gap-y-5">
          {featuresData.map((feature, index) => (
            <div key={index} className="flex gap-x-3 items-center">
              <div className="bg-[#54BD95] rounded-full flex items-center justify-center">
                <BsCheck className="text-white text-xl" />
              </div>
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:flex items-center justify-centen">
        <img src={featureImage.src} alt="" />
      </div>
    </section>
  );
}

export default FeatureSection;
