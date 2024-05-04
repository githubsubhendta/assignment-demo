import React from "react";
import mainlogo from "./../assets/main_logo1.png";
import imageGame from "./../assets/games (1) 1.png";
import BalanceSvg from "./../assets/Balance.svg";
import Vector from "./../assets/Vector.svg";
import Group from "./../assets/Group 1597882519.svg";
import Avatar from "./../assets/Ava.png";

import { FaChevronDown } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
function Header() {
  return (
    <div className="bg-[#1e2225] h-20 flex items-center justify-between fixed header-wrap w-full z-10">
      <div className="flex font-bold mx-10 logo">
        <img src={mainlogo} className="h-full w-full" />
        {/* <div className="text-white">RUST</div>
        <div className="">
        </div>
        <div className="font-bold">STRIKE</div> */}
      </div>

      <div className="flex items-center mx-8 shadow-lg bg-[#2C3034] px-2 py-1 rounded-[10px] mobile-hide">
        <div className="px-1">
          <img src={imageGame} alt="" />
        </div>
        <div className="text-white px-1">GAMES</div>
        <div>
          <FaChevronDown className="text-white" />
        </div>
      </div>

      <div className="flex items-center justify-between mobile-hide">
        <div className="flex ml-44 px-2 rounded-[10px] bg-[#2C3034] items-center">
          <img src={BalanceSvg} alt="" />
          <div className="bg-yellow-500 my-1 rounded-md w-6 h-6 flex items-center justify-center ">
            <FaChevronDown className=" text-[10px]  " />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="bg-[#2C3034] flex items-center justify-center w-24 h-8  ml-48 rounded-[10px] mobile-hide">
          <img className="mt-2" src={Vector} alt="" />
          <p className="text-white text-[12px]">Withdraw</p>
        </div>
        <div className="  bg-yellow-500 flex items-center justify-center  w-20 h-8 ml-3 rounded-lg mobile-hide">
          <FiPlus className=" items-center" />
          <p className=" text-[12px] font-bold">Deposit</p>
        </div>

        <div className="bg-gray-800 w-9 h-9 ml-8 flex justify-center items-center rounded-lg mobile-hide">
          <img className="h-6" src={Group} alt="" />
        </div>

        <div className="flex items-center justify-center ml-16">
          <div className="">
            <h6 className="text-white text-[12px]">Alekshendr</h6>
            <p className="text-slate-500 text-[9px]">level: 10</p>
          </div>
          <div className="w-12 mr-2">
            {" "}
            <img src={Avatar} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
