import React, { useEffect } from "react";
import FaqBanner from "../assets/images/faq-banner.jpg";
import PhoenicCard from "../Components/PhoenicCard";
import programBgDesign from "../assets/images/program-bg-design.svg";

import programImg1 from "../assets/images/program-img-1.png";
import programImg2 from "../assets/images/program-img-2.png";
import programImg3 from "../assets/images/program-img-3.png";
import programImg4 from "../assets/images/program-img-4.png";

import productSideDesign from "../assets/images/products-side-bottom-design.svg";

const Programs = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="banner w-full flex items-center justify-center">
        <img
          src={FaqBanner}
          alt="products-photo"
          className="w-screen h-[479px] object-cover object-center overflow-hidden"
        />
        <div className="absolute bg-white flex items-center justify-center px-16 py-3">
          <h5 className="text-3xl font-bold text-center">Our Programs</h5>
        </div>
      </div>
      <div className="w-8/12 rounded-3xl py-6 px-6 flex items-center flex-col justify-center relative top-[-50px] bg-darkPurple shadow-lg">
        <p className="text-xl text-white ">
          Fostering a lifelong passion for reading in young minds through our
          comprehensive Foundation Program.
        </p>
      </div>
      <div className="w-full bg-[#FFF7CE] bg-cover relative flex items-center justify-center">
        <img src={programBgDesign} alt="" className="w-full " />
        <div className="w-10/12 flex justify-center flex-wrap absolute">
          <PhoenicCard image={programImg1} programName="Level 0 Phonics Kit"/>
          <PhoenicCard image={programImg2} programName="Level 1 Phonics Kit"/>
          <PhoenicCard image={programImg3} programName="Level 2 Phonics Mastery Kit"/>
          <PhoenicCard image={programImg4} programName="Level 3 Adv. Phonics Kit"/>
        </div>

        <div className="absolute right-[-30px] bottom-[70px] h-[200px] w-[200px] -z-11">
          <img src={productSideDesign} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Programs;