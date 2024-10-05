import Banner from "../assets/images/contact-banner-img.jpg";
import greenStar from "../assets/images/green-4-star.svg";
import yellowStar from "../assets/images/yellow-4-star.svg";
import redStar from "../assets/images/red-4-star.svg";
import blueStar from "../assets/images/blue-4-star.svg";

import messageDesign from "../assets/images/contact-message-bg-design.svg";
import design1 from "../assets/images/contact-bg-design.svg";
import design2 from "../assets/images/contact-bg-design-2.svg";

import userNameIcon from "../assets/images/username-icon.svg";
import emailIcon from "../assets/images/email-icon.svg";
import phoneNumberIcon from "../assets/images/mobile-icon.svg";
import categoryIcon from "../assets/images/category-icon.svg";
import stateIcon from "../assets/images/state-icon.svg";
import messageIcon from "../assets/images/message-icon.svg";
import { useEffect } from "react";

const Contact = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="banner relative w-full flex flex-col">
        <div
          className="circle h-[150px] w-[150px] rounded-full absolute right-[-40px] top-[40px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(85,31,100,1) 0%, rgba(172,63,202,1) 100%)",
          }}
        ></div>
        <img
          src={yellowStar}
          alt=""
          className="h-[70px] w-[70px] absolute top-[20%] left-[100px]"
        />
        <img src={Banner} alt="Contact Banner" className="w-full object " />
        <div
          className="circle h-[150px] w-[150px] rounded-full absolute left-[-40px] bottom-[40px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(85,31,100,1) 0%, rgba(172,63,202,1) 100%)",
          }}
        ></div>

        <img
          src={redStar}
          alt=""
          className="h-[90px] w-[90px] absolute left-[-40px] bottom-[70px]"
        />
        <img
          src={greenStar}
          alt=""
          className="h-[90px] w-[90px] absolute left-[80px] bottom-[50px]"
        />
        <img
          src={blueStar}
          alt=""
          className="h-[90px] w-[90px] absolute  bottom-[50px] right-[40px]"
        />
      </div>
      <div
        className="w-8/12 rounded-3xl py-4 px-6 flex items-center justify-between relative top-[-150px] shadow-lg z-[1]"
        style={{
          background:
            "linear-gradient(60deg, rgba(236,0,140,1) 0%, rgba(255,126,126,1) 100%)",
        }}
      >
        <p className=" w-9/12 text-2xl   text-white">
          Get in touch today for friendly support and solutions tailored to your
          needs. Reach out by phone or email for prompt assistance.
        </p>
        <button
          className=" px-8 py-1 mr-10 rounded-xl font-bold text-2xl"
          style={{
            background:
              "linear-gradient(60deg, rgba(255,226,89,1) 0%, rgba(255,167,81,1) 100%)",
          }}
        >
          Contact Us
        </button>
      </div>

      <div className="w-11/12 flex flex-col items-center justify-center relative overflow-hidden mt-[-180px] -z-[0]">
        <img src={messageDesign} alt="" className="w-full" />
        <div className="w-full flex items-center justify-between absolute p-16">
          <div className="w-3/12 flex flex-col ">
            <img src={design2} alt="" className="" />
            <div className="flex items-center  gap-[20px] my-4">
              <div
                className="icon rounded-2xl p-2"
                style={{
                  background:
                    "linear-gradient(60deg, rgba(255,226,89,1) 0%, rgba(255,167,81,1) 100%)",
                }}
              >
                <i className="bi bi-telephone text-4xl"></i>
              </div>
              <p className="text-white underline text-xl">+918520824374</p>
            </div>
            <div className="flex items-center  gap-[20px] my-4">
              <div
                className="icon rounded-2xl p-2"
                style={{
                  background:
                    "linear-gradient(60deg, rgba(255,226,89,1) 0%, rgba(255,167,81,1) 100%)",
                }}
              >
                <i className="bi bi-envelope text-4xl"></i>
              </div>
              <p className="text-white underline text-xl">
                sales@letsreadindia.in
              </p>
            </div>
            <div className="flex items-center  gap-[20px] my-4">
              <div
                className="icon rounded-2xl p-2"
                style={{
                  background:
                    "linear-gradient(60deg, rgba(255,226,89,1) 0%, rgba(255,167,81,1) 100%)",
                }}
              >
                <i className="bi bi-geo-alt text-4xl"></i>
              </div>
              <p className="text-white  text-xl">
                Kondhwa Budhrukh, Pune, Maharashtra, India-411048
              </p>
            </div>
          </div>
          <div className="w-3/12">
            <form action="">
              <div className="input-group shadow-xl relative flex items-center border-[1px] border-[#fff] rounded-xl p-2 gap-[20px] my-4">
                <img src={userNameIcon} alt="" className="w-[30px] h-[30px] " />
                <input
                  type="text"
                  name="username"
                  className="bg-transparent outline-none w-full text-lg text-white placeholder:text-[#DEDEDE]"
                  placeholder="Name"
                />
              </div>
              <div className="input-group shadow-xl relative flex items-center border-[1px] border-[#fff] rounded-xl p-2 gap-[20px] my-4">
                <img src={emailIcon} alt="" className="w-[30px] h-[30px] " />
                <input
                  type="email"
                  name="email"
                  className="bg-transparent outline-none w-full text-lg text-white placeholder:text-[#DEDEDE]"
                  placeholder="Email Address"
                />
              </div>
              <div className="input-group shadow-xl relative flex items-center border-[1px] border-[#fff] rounded-xl p-2 gap-[20px] my-4">
                <img
                  src={phoneNumberIcon}
                  alt=""
                  className="w-[30px] h-[30px] "
                />
                <input
                  type="text"
                  name="phone"
                  className="bg-transparent outline-none w-full text-lg text-white placeholder:text-[#DEDEDE]"
                  placeholder="Phone Number"
                />
              </div>
              <div className="input-group shadow-xl relative flex items-center border-[1px] border-[#fff] rounded-xl p-2 gap-[20px] my-4">
                <img src={categoryIcon} alt="" className="w-[30px] h-[30px] " />
                <input
                  type="text"
                  name="category"
                  className="bg-transparent outline-none w-full text-lg text-white placeholder:text-[#DEDEDE]"
                  placeholder="Category"
                />
              </div>
              <div className="input-group shadow-xl relative flex items-center border-[1px] border-[#fff] rounded-xl p-2 gap-[20px] my-4">
                <img src={stateIcon} alt="" className="w-[30px] h-[30px] " />
                <input
                  type="text"
                  name="state"
                  className="bg-transparent outline-none w-full text-lg text-white placeholder:text-[#DEDEDE]"
                  placeholder="State"
                />
              </div>
              <div className="input-group shadow-xl relative flex border-[1px] border-[#fff] rounded-xl p-2 gap-[20px] my-4 h-[200px]">
                <img src={messageIcon} alt="" className="w-[30px] h-[30px] " />
                <textarea
                  type="text"
                  name="message"
                  className="  bg-transparent outline-none w-full text-lg text-white placeholder:text-[#DEDEDE]"
                  placeholder="Message"
                />
              </div>
              <button
                className=" px-8 py-1 mr-10 rounded-xl font-bold text-2xl w-full mt-8"
                style={{
                  background:
                    "linear-gradient(60deg, rgba(255,226,89,1) 0%, rgba(255,167,81,1) 100%)",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="w-3/12 flex h-full relative">
            <img src={design1} alt="" className="absolute top-[80px] right-[-30px]" />
          </div>
        </div>
      </div>
      <div className="w-11/12 p-4 mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30278.734951484046!2d73.86629863398946!3d18.445487549688604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebaca708a5c3%3A0xed532202c8e79413!2sKondhwa%20Budruk%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1723326054660!5m2!1sen!2sin"
          width="600"
          //   height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full h-[600px]"
          title="Location of Kondhwa Budruk, Pune, Maharashtra"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;