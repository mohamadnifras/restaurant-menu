import Image from "next/image";
import React from "react";
import { FiFacebook } from "react-icons/fi";
import { TfiTwitter } from "react-icons/tfi";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";

function Footer() {
  return (
    <div className="w-full">
      <div className="bg-black w-full h-[311px] flex justify-center items-center space-x-3 ">
        <div className="w-[373px] h-[134px] border border-[#C5A059] rounded-[15px] p-5 flex flex-col justify-center items-center font-Oswald font-bold">
          <p className="  text-[#C5A059] uppercase text-[16px] mb-3">
            Connect with Us
          </p>
          <div className="flex items-center space-x-3">
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
        <div className="relative w-[373px] h-[134px] border border-[#C5A059] rounded-[15px] font-Oswald font-semibold flex flex-col justify-center items-center">
          <Image
            src="/images/logo1.png"
            alt="My Logo"
            width={81}
            height={72}
            className="absolute -top-9"
          />
          <h4 className="text-[#C5A059] text-[35px]">
            DEEP <span className="text-white">NET</span>{" "}
            <span className="text-[#857878]">SOFT</span>
          </h4>
          <div className="flex  items-center text-[#808080] space-x-2">
            <FiFacebook />
            <TfiTwitter />
            <AiOutlineYoutube />
            <IoLogoInstagram />
          </div>
        </div>
        <div className="w-[373px] h-[134px] border border-[#C5A059] rounded-[15px] p-5 flex flex-col justify-center items-center font-Oswald font-bold">
          <p className="  text-[#C5A059] uppercase text-[16px] mb-3">
            Find us{" "}
          </p>
          <div className="flex items-center space-x-3 justify-center">
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
      <div className="bg-[#161616] w-full h-[45px] flex items-center justify-around text-[#857878] font-medium">
        <p className="font-Oswald">© 2025 Deepnetsoft Solutions. All rights reserved.</p>
        <p className="font-Oswald">Terms & Conditions <span className="pl-5">Privacy Policy</span></p>
      </div>
    </div>
  );
}

export default Footer;
