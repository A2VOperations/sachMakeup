import React from "react";
import Section1 from "../home/section1";
import Section2 from "../home/section2";
import FAQ from "../../components/FAQ";
import AboutMe from "../../components/aboutMe";
import Testimonial from "../../components/Testomonial";
import ChooseUs from "../../components/ChooseUs";
import Section4 from "../home/section4";

const page = () => {
  return (
    <>
      <Section1 />
      <AboutMe />
      <Section2 />
      <Section4 />
      <ChooseUs />
      <FAQ />
      <Testimonial />
    </>
  );
};

export default page;
