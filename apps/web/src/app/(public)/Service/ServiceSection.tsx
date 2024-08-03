import React from "react";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";

const processData = [
  {
    image: service1,
    title: "Collaboration with Teams ",
    description: "Here you can handle projects together with team virtually",
  },
  {
    image: service2,
    title: "Cloud Storage",
    description:
      "No nedd to worry about storage because we provide storage up to 2 TB",
  },
  {
    image: service3,
    title: "Time efficiency.",
    description: "We are there for you with quick & reliable responses from us",
  },
];

function ServiceSection() {
  return (
    <section className="service__section max-w-5xl mx-auto gap-y-10 gap-x-10 flex flex-col py-10 px-10">
      <div className="hero-section-video w-full flex flex-col lg:flex-row items-center justify-between gap-y-5">
        <h2 className="font-bold text-2xl lg:text-3xl">
          Our Features you can get
        </h2>
        <p className="max-w-lg mx-auto text-center lg:text-left">
          Get to know our awesome features that are absolutely suit for
          everyone.Explore the features and know the best
        </p>
        <button className="bg-[#54BD95] text-white px-5 py-2 w-fit rounded-full">
          Breif your project
        </button>
      </div>
      <div className="flex items-start justify-center gap-x-5 gap-y-5 md:flex-row flex-col max-w-5xl mx-auto w-full">
        {processData.map(({ title, description, image }) => (
          <div key={title} className="w-full lg:w-1/3 flex flex-col gap-y-2.5">
            <img src={image.src} alt="" />
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-slate-700/70">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
