'use client'

import React from "react";
import Navbar from "../Navbar";
import herosvg from "../assets/herosection-rightside.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import hero from '@/assets/hero.avif'
import hero2 from '@/assets/hero-2.avif'
import hero3 from '@/assets/hero-3.avif'
import WordRotate from "@/components/magicui/word-rotate";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import Fade from 'embla-carousel-fade'

function HeroSection() {
  return (
    <section className="hero__section">
      <div className="hero__container px-7 lg:px-10 max-w-6xl mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-center py-10 lg:py-24">
        <div className="hero-content lg:w-1/2 lg:px-5 flex flex-col gap-y-5">
          <h1 className="text-4xl md:text-5xl xl:text-[50px] leading-[1.2] md:max-w-xl md:mx-auto md:text-center lg:text-left lg:mx-0 lg:max-w-full font-semibold text-black">
            All you need to organize incredible <span className="
              text-primary font-bold
            ">
              <WordRotate
                words={['Wedding', 'Birthday', 'Social']}
                duration={2000}
              />
            </span>
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
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000
              }),
              Fade()
            ]}
            orientation="horizontal"
            opts={{
              align: "center",
              loop: true
            }}>
            <CarouselContent
              className="w-full h-full"
            >
              {[hero, hero3, hero2].map((img, index) => (
                <CarouselItem key={index} className="h-[60vh]">
                  <Image
                    width={1024}
                    height={1024}
                    className="object-cover h-full object-center rounded-xl"
                    objectFit="cover"
                    priority
                    src={img.src}
                    alt=""
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
