//------- Home Page (Frame #1 in Figma) --------- //
import React from "react";
import Hero from "@/components/sections/home/HeroSection";
import Video from "@/components/sections/home/VideoSection";
import Branches from "@/components/sections/home/Branches";
import Contact from "@/components/sections/home/Contact";
import WhyChooseUsSection from "@/components/sections/home/WhyChooseUs";
import Departments from "@/components/sections/home/Departments";
const page = () => {
  return (
    <>
      <Hero />
      <Video />
      <Departments />
      <Branches />
      <WhyChooseUsSection />
      <Contact />
    </>
  );
};

export default page;
