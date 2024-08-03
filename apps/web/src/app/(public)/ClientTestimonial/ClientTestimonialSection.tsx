import React from "react";
import pfp1 from "../assets/pfp1.svg";
import pfp2 from "../assets/pfp2.svg";
import pfp3 from "../assets/pfp3.svg";

export default function ClientTestimonialSection() {
  return (
    <section className="bg-[#161C28] py-10 px-10 xl:px-0">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-y-10 items-center">
        <div className="flex flex-col gap-y-2 w-full lg:w-2/3">
          <h2 className="font-semibold text-2xl lg:text-3xl text-white">
            Clients love to talk about us
          </h2>
          <p className="text-slate-300/70 max-w-lg mx-0">
            Overall, I had a great experience and I would highly recommend this
            company to anyone in need of their products or services 😍
          </p>
          <p className="text-slate-400/50 text-sm">Mitchel cole</p>
          <div className="flex items-center gap-x-2">
            <img className="h-10 w-10" src={pfp1.src} alt="" />
            <img className="h-10 w-10" src={pfp2.src} alt="" />
            <img className="h-10 w-10" src={pfp3.src} alt="" />
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="w-full bg-[#222938] p-10 rounded-md">
            <h2 className="font-semibold text-2xl text-white pb-7">
              Get Started
            </h2>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="Email" className="text-white text-sm">
                Email
              </label>
              <input
                className="w-full rounded-lg py-1.5"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col gap-y-1 pt-5">
              <label htmlFor="Email" className="text-white text-sm">
                Message
              </label>
              <textarea type="text" name="" id="" className="rounded-md" />
            </div>
            <button
              role="submit"
              className="bg-[#54BD95] text-white rounded-full py-2 mt-5 w-full"
            >
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
