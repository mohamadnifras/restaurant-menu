import Image from "next/image";
import React from "react";
import { FiFacebook } from "react-icons/fi";
import { TfiTwitter } from "react-icons/tfi";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";

function Footer() {
  return (
    <div className="w-full">
     
      <div className="bg-black w-full flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-6 md:space-y-0 py-6 md:py-12 px-4 md:px-0">
       
        <div className="order-2 md:order-1 w-full md:w-[373px] border border-[#C5A059] rounded-[15px] p-5 flex flex-col justify-center items-center font-Oswald font-bold">
          <p className="text-[#C5A059] uppercase text-[16px] mb-3">
            Connect with Us
          </p>
          <div className="flex items-center space-x-3 mb-2">
            <Image
              src="/images/telephone.png"
              alt="telephone"
              width={20}
              height={20}
              quality={100}
            />
            <p className="text-[#857878] text-[16px]">+91 1231231231</p>
          </div>
          <div className="flex items-center space-x-4">
            <Image
              src="/images/email.png"
              alt="email"
              width={20}
              height={20}
              quality={100}
            />
            <p className="text-[#857878] text-[16px]">info@deepnetsoft.com</p>
          </div>
        </div>

       
        <div className="order-1 md:order-2 relative w-full md:w-[373px] border border-[#C5A059] rounded-[15px] font-Oswald font-semibold flex flex-col justify-center items-center p-5">
          <Image
            src="/images/logo1.png"
            alt="My Logo"
            width={81}
            height={72}
            className="absolute -top-9"
          />
          <h4 className="text-[#C5A059] text-[28px] md:text-[35px] text-center mt-5">
            DEEP <span className="text-white">NET</span>{" "}
            <span className="text-[#857878]">SOFT</span>
          </h4>
          <div className="flex items-center text-[#808080] space-x-3 mt-2">
            <FiFacebook size={20} />
            <TfiTwitter size={20} />
            <AiOutlineYoutube size={20} />
            <IoLogoInstagram size={20} />
          </div>
        </div>

        
        <div className="order-3 w-full md:w-[373px] border border-[#C5A059] rounded-[15px] p-5 flex flex-col justify-center items-center font-Oswald font-bold">
          <p className="text-[#C5A059] uppercase text-[16px] mb-3">
            Find us
          </p>
          <div className="flex items-center space-x-3 justify-center text-center">
            <Image
              src="/images/location.png"
              alt="location"
              width={20}
              height={20}
              quality={100}
            />
            <span className="text-[#857878] text-[16px]">
              First floor, Geo infopark, Infopark EXPY, Kakkanad
            </span>
          </div>
        </div>
      </div>

    
      <div className="bg-[#161616] w-full flex flex-col md:flex-row items-center justify-between text-[#857878] font-medium py-3 px-4 md:px-12 text-center md:text-left space-y-2 md:space-y-0">
        <p className="font-Oswald text-sm md:text-base">
          © 2025 Deepnetsoft Solutions. All rights reserved.
        </p>
        <p className="font-Oswald text-sm md:text-base">
          Terms & Conditions <span className="pl-2 md:pl-5">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
