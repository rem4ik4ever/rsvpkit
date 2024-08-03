import React from "react";
import HeroSection from "./Hero/HeroSection";
import TestimonialCompany from "./Testimonial-company/TestimonialSection";
import FeatureSection from "./Feature/FeatureSection";
import ServiceSection from "./Service/ServiceSection";
import BenefitSection from "./Benefits/BenefitSection";
import PricingSection from "./Pricing/PricingSection";
import ClientTestimonialSection from "./ClientTestimonial/ClientTestimonialSection";
import Footer from "./Footer/Footer";

function LandingPage() {
  return (
    <>
      <HeroSection />
      <BenefitSection />
      <FeatureSection />
      <TestimonialCompany />
      <ServiceSection />
      <PricingSection />
      <ClientTestimonialSection />
    </>
  );
}

export default LandingPage;
