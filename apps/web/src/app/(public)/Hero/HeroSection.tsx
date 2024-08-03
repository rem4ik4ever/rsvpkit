import React from "react";
import Navbar from "../Navbar";
import herosvg from "../assets/herosection-rightside.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="hero__section">
      <div className="hero__container px-7 lg:px-10 max-w-6xl mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-center py-10 lg:py-24">
        <div className="hero-content lg:w-1/2 lg:px-5 flex flex-col gap-y-5">
          <h1 className="text-4xl md:text-5xl xl:text-[50px] leading-[1.2] md:max-w-xl md:mx-auto md:text-center lg:text-left lg:mx-0 lg:max-w-full font-semibold text-black">
            All you need to organize <span className="
              text-[#54BD95] font-bold
            ">incredible</span> events
          </h1>
          <p className="text-lg md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left">
            Create event, send invites, track RSVPs, and check-in attendees
          </p>
          <div>
            <Button type="button" size="lg">
              Get started
            </Button>
          </div>
        </div>
        <div className="hero-image relative isolate md:px-5 lg:px-0 w-full lg:w-1/2 rounded-3xl md:pt-2 lg:pt-0">
          <Image
            width={1024}
            height={1024}
            className="h-auto rounded-3xl w-full lg:h-auto md:w-[400px] md:mx-auto lg:w-[800px] xl:w-[1024px] drop-shadow-xl relative"
            priority
            src={"https://plus.unsplash.com/premium_photo-1664278686569-e2045aa5b11d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
