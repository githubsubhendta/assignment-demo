import React from "react";
//////////////////////////////////////////
import { FaL } from "react-icons/fa6";
import { FaDigitalOcean } from "react-icons/fa6";
import { MdOutlinePhoneInTalk } from "react-icons/md";
///////////////////////////////////////////////
import { FaAlipay } from "react-icons/fa";
import { SiFampay } from "react-icons/si";
import { SiAmazonpay } from "react-icons/si";
import { RiWechatPayFill } from "react-icons/ri";
import { FaPaypal } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa6";
import { FaLitecoinSign } from "react-icons/fa6";
import { FaGooglePay } from "react-icons/fa6";
import { IoLogoUsd } from "react-icons/io";
import { RiVisaLine } from "react-icons/ri";
import { FaAmazonPay } from "react-icons/fa";
import { SiPayoneer } from "react-icons/si";
import { SiApplepay } from "react-icons/si";
//////////////// socialMedia ///////////////////////////////
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa6";
//////////////////////////////////////////////////////////
import CoinIcon from "../assets/Transparent 1.svg";
import MainLogo from "../assets/main_logo1.png";
function Footer() {
  return (
    <div className="bg-[#1F2225] p-6 footer-wrap relative">
      <div className="flex justify-between gap-5">
        <div className="flex flex-col items-center w-1/5">
          <div>
            <img src={MainLogo} alt="logo" />
          </div>
          <div className="mt-6 ">
            <span className="text-white text-[14px] font-poppins">
              RustStrike
            </span>
            <span className="text-[#757786] mt-2 text-[14px] ml-1">
              simply dummy taxt of the <br /> printing and typesetting industry{" "}
              <br /> Lorem ipsum dolor.
            </span>
          </div>
        </div>
        <div className="w-3/5">
          {" "}
          <div className="">
            <div className="flex items-center justify-between w-full pl-4 pr-4">
              <div className="flex flex-col mx-4">
                <div className="flex items-center">
                  <h6 className="text-white text-[14px]">Allife Programm</h6>
                </div>
                <div className="flex mt-2">
                  <div>
                    <p className="text-slate-400 font-poppins mt-2 text-[13px]">
                      Promo
                    </p>
                    <p className="text-slate-400 font-poppins mt-2 text-[13px]">
                      Referal
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mx-4">
                <div className="flex items-center">
                  <h6 className="text-white text-[14px]">Promotions</h6>
                </div>
                <div className="flex mt-2">
                  <div>
                    <p className="text-slate-400 font-poppins mt-2 text-[13px]">
                      Promo
                    </p>
                    <p className="text-slate-400 font-poppins mt-2 text-[13px]">
                      Referal
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mx-4">
                <div className="flex items-center">
                  <h6 className="text-white text-[14px]">About Us</h6>
                </div>
                <div className="flex mt-2">
                  <div>
                    <p className="text-slate-400 font-poppins mt-2 text-[13px]">
                      Promo
                    </p>
                    <p className="text-slate-400 font-poppins mt-2 text-[13px]">
                      Referal
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mx-4">
                <div className="flex items-center">
                  <h6 className="text-white text-[14px]">Help</h6>
                </div>
                <div className="flex mt-2">
                  <div>
                    <p className="text-slate-400 font-poppins mt-2 text-[13px] ">
                      Promo
                    </p>
                    <p className="text-slate-400 font-poppins mt-2 text-[13px]">
                      Referal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/5">
          <div className="text-white text-[14px] ">Payment Methods</div>
          <div className="flex items-center justify-start mt-2">
            <div className="text-slate-500 text-[16px]">
              <FaAlipay />
            </div>
            <div className="text-slate-500 text-[16px] mx-2">
              <SiFampay />
            </div>
            <div className="text-slate-500 text-[16px] mx-2">
              <SiAmazonpay />
            </div>
            <div className="text-slate-500 text-[16px] mx-2">
              <FaGooglePay />
            </div>
            <div className="text-slate-500 text-[16px] mx-2">
              <RiWechatPayFill />
            </div>
            <div className="text-slate-500 text-[16px] mx-2">
              <FaPaypal />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-white text-[14px] ">Follow Us</div>
          </div>
          <div className="flex items-center justify-start mt-2">
            <div className="text-[#757786] text-[16px]">
              <FaTelegramPlane />
            </div>
            <div className="text-[#757786] text-[16px] mx-2">
              <FaYoutube />
            </div>
            <div className="text-[#757786] text-[16px] mx-2">
              <FaTwitter />
            </div>
            <div className="text-[#757786] text-[16px] mx-2">
              <IoLogoInstagram />
            </div>
            <div className="text-[#757786] text-[16px] mx-2">
              <FaDiscord />
            </div>
            <div className="text-[#757786] text-[16px] mx-2">
              <FaTiktok />
            </div>
            <div className="text-[#757786] text-[16px] mx-2">
              <FaFacebook />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-10px py-6 border-b-2 border-[#3F4655] border-t-2 my-10">
        <div className="flex items-center justify-center payment-section">
          <div className="text-[#666773] text-[24px] mx-9">
            <FaBitcoin />
          </div>
          <div className="text-[#666773] text-[24px] mx-9">
            <FaLitecoinSign />
          </div>
          <div className="text-[#666773] text-[24px] mx-9">
            <FaGooglePay />
          </div>
          <div className="text-[#666773] text-[24px] mx-9">
            <IoLogoUsd />
          </div>
          <div className="text-[#666773] text-[24px] mx-9">
            <RiVisaLine />
          </div>
          <div className="text-[#666773] text-[24px] mx-9">
            <FaAlipay />
          </div>
          <div className="text-[#666773] text-[24px] mx-9">
            <FaAmazonPay />
          </div>
          <div className="text-[#666773] text-[24px] mx-9">
            <FaCcPaypal />
          </div>
          <div className="text-[#666773] text-[24px] mx-9">
            <SiPayoneer />
          </div>
          <div className="text-[#666773] text-[24px] mx-9">
            <SiApplepay />
          </div>
        </div>
      </div>

      <div className="mx-10px py-6 ">
        <div className="flex items-center justify-center bit-coins_section">
          <div className="bg-[#1a1b1f] rounded-xl flex items-center justify-center px-2 py-1 mx-6">
            <img className="h-4 pr-1" src={CoinIcon} alt="" />
            <p className="text-slate-500 text-[14px]">
              1 BTC ={" "}
              <span className="text-white text-[13px] font-poppins font-bold">
                $20498.00
              </span>
            </p>
          </div>
          <div className="bg-[#1a1b1f] rounded-xl flex items-center justify-center px-2 py-1 mx-6">
            <div className="bg-blue-800 rounded-full p-1">
              {" "}
              <FaL className="text-[11px] text-white " />
            </div>
            <p className="text-slate-500 text-[14px] px-1">
              1 LTS ={" "}
              <span className="text-white text-[13px] font-poppins font-bold">
                $52.04
              </span>
            </p>
          </div>
          <div className="bg-[#1a1b1f] rounded-xl flex items-center justify-center px-2 py-1 mx-6">
            <div className="bg-yellow-500 rounded-full p-1">
              {" "}
              <FaDigitalOcean className="text-[11px]  " />
            </div>
            <p className="text-slate-500 text-[14px] px-1">
              1 DGC ={" "}
              <span className="text-white text-[13px] font-poppins font-bold">
                $0.15
              </span>
            </p>
          </div>
          <div className="bg-[#1a1b1f] rounded-xl flex items-center justify-center px-2 py-1 mx-6">
            <div className="bg-blue-800 rounded-full p-1">
              {" "}
              <MdOutlinePhoneInTalk className="text-[11px]  " />
            </div>
            <p className="text-slate-500 text-[14px] px-1">
              1 ETH ={" "}
              <span className="text-white text-[13px] font-poppins font-bold">
                $1092.15
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-7">
          <p className="text-slate-600 text-[15px]">
            Copyright (C) 2024{" "}
            <span className="text-slate-300 font-poppins text-[15px]">
              RUSTSTRIKE
            </span>{" "}
            All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
