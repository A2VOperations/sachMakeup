import Section1 from "./home/section1";
import Section2 from "./home/section2";
import Section3 from "./home/section3";
import Section4 from "./home/section4";
import Section5 from "./home/section5";
import Section6 from "./home/section6";
import FAQ from "../components/FAQ";
import Section7 from "./home/section7";
import ChooseUs from "../components/ChooseUs";
import AboutMe from "../components/aboutMe";
import Gallery from "../components/Gallery";
import Testimonial from "../components/Testomonial";

export default function Home() {
  return (
    <>
      <Section1 />
      <Section7 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Gallery />
      <AboutMe />
      <ChooseUs />
      <FAQ />
      <Testimonial />
    </>
  );
}
