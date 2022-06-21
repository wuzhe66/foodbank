import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Banners from "../components/Banners";
import CategoryMain from "../components/CategoryMain";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";

const About = () => {
  return (
    <div>
      <Slider />
      <Banners />
      <CategoryMain />
      <Introduction />
      <Newsletter />
    </div>
  );
};

export default About;
