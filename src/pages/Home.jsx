import React from "react";
import Table from "./Table";
import { FaArrowLeft } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";

// Import local images
import LightImg from "./../assets/Lightning.svg";
import MainImg from "./../assets/pngegg (7) 2.png"; // Corrected file name
import BlockInfo from "./../assets/Block Info.png"; // Corrected file name
import BunnerImg from "./../assets/Bunner 1.png";
import IconSvg from "./../assets/icon.svg";
import EyeSvg from "./../assets/Eye.svg";
import CrashPng from "./../assets/Crash.png";
import Card1 from "./../assets/C 1.png";
import Card2 from "./../assets/C 2.png";
import Card3 from "./../assets/C 4.png";

import Icon1 from "./../assets/icon (1).svg";

const Home = () => {
  return (
    <div>
      <div className="container mx-auto ">
        <div className="grid grid-cols-12">
          {/* Left Arrow */}
          <div className="w-12 h-10 bg-[#2c2f34] rounded flex items-center justify-start mt-3">
            <FaArrowLeft className="ml-4 text-slate-200 text-[13px]" />
          </div>
          {/* Content */}
          <div className="col-span-3 mt-32">
            <div>
              <h1 className="text-white text-4xl font-bold font-poppins">
                COLLECT <br /> BATTLE PASS <br />
                <span className="text-yellow-500">REWARDS</span>
              </h1>
            </div>
            <div className="mt-5">
              <p className="text-white">
                Register to claim your <br />
                <span className="text-yellow-500">bonus</span> and start winning
              </p>
            </div>
            <div className="bg-yellow-500 flex items-center justify-center w-44 rounded-lg mt-5 py-1">
              <img src={LightImg} alt="Lightning" />
              <p className="font-semibold">Create Account</p>
            </div>
          </div>

          {/* Main Image */}
          <div className="col-span-4 static ">
            <div className="">
              <img className="h-[500px] w-[500px]" src={MainImg} alt="Main" />
            </div>
          </div>

          {/* Info Block */}
          <div className="col-span-3  flex justify-end">
            <div className="mt-32 ">
              <img src={BlockInfo} alt="Block Info" />
            </div>
          </div>
        </div>
        {/* ///////////////////////////////////// cards ///////////////////////////////////////////////// */}

        <div className="flex items center justify-center">
          <div className="mr-3">
            <img src={BunnerImg} alt="" />
          </div>

          <div className="ml-2">
            <div>
              {" "}
              <img src={BunnerImg} alt="" />
            </div>
          </div>
        </div>

        {/* ///////////////////////////////////// cards end ///////////////////////////////////////////////// */}

        {/* ///////////////////////////////////// second cards ///////////////////////////////////////////////// */}

        <div className="flex justify-center">
          <div className="flex items-center bg-slate-800 w-10/12  px-3">
            <div className="w-1/2 flex items-start mt-3">
              <img className="h-10" src={IconSvg} alt="" />
              <h5 className="text-white text-[15px] font-poppins mt-2">
                IN-HOUSE GAME
              </h5>
            </div>
            <div className="w-1/2 flex items-end justify-end mt-3">
              <div className="bg-gray-700 flex items-center justify-center w-24 rounded-lg p-2 shadow-md">
                <img className="text-white px-1" src={EyeSvg} alt="" />
                <p className="text-xs text-gray-400">see All</p>
              </div>
              <div className="flex items-center justify-center ml-4 space-x-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-700">
                  <FaLessThan className="text-center text-gray-400 text-sm" />
                </div>
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-yellow-600">
                  <FaGreaterThan className="text-center text-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center bg-slate-800 w-10/12  px-3 py-4">
            <div className="flex flex-col items-center bg-slate-800  rounded-lg ">
              <img src={CrashPng} alt="" />
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center bg-slate-800  rounded-lg ">
              <img src={CrashPng} alt="" />
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center bg-slate-800 rounded-lg ">
              <img src={CrashPng} alt="" />
            </div>

            {/* Column 4 */}
            <div className="flex flex-col items-center bg-slate-800  rounded-lg ">
              <img src={CrashPng} alt="" />
            </div>

            {/* Column 5 */}
            <div className="flex flex-col items-center bg-slate-800  rounded-lg ">
              <img src={CrashPng} alt="" />
            </div>
          </div>
        </div>

        {/* ///////////////////////////////////// second cards  end ///////////////////////////////////////////////// */}

        {/* ///////////////////////////////////// third cards  ///////////////////////////////////////////////// */}

        <div className="flex justify-center mt-9">
          <div className="flex items-center bg-slate-800 w-10/12 rounded px-3 py-3">
            <img src={Icon1} alt="" />
            <h5 className="text-white font-poppins text-[15px]">HOT CASES</h5>
          </div>
        </div>

        <div className="flex justify-center ">
          <div className="flex items-center bg-slate-800 w-10/12  px-3">
            <div className="flex flex-col items-center bg-slate-800  rounded-lg ">
              <img src={Card1} alt="" />
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center bg-slate-800  rounded-lg ">
              <img src={Card2} alt="" />
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center bg-slate-800 rounded-lg ">
              <img src={Card1} alt="" />
            </div>

            {/* Column 4 */}
            <div className="flex flex-col items-center bg-slate-800  rounded-lg ">
              <img src={Card2} alt="" />
            </div>

            {/* Column 5 */}
            <div className="flex flex-col items-center bg-slate-800  rounded-lg ">
              <img src={Card1} alt="" />
            </div>
          </div>
        </div>

        {/* ///////////////////////////////////// second cards  end ///////////////////////////////////////////////// */}

        {/* /////////////////////////////////// Table ////////////////////////////////////////////////////////////////  */}
        <div className="flex items-center justify-center mt-9">
          <div className="flex items-center w-10/12  px-3">
            <div className="flex items-center justify-center">
              <ul className="flex justify-center items-center ">
                <div className="bg-slate-800 w-20  px-2  py-2 rounded-lg">
                  <li className="text-white font-popins text-[13px]">
                    {" "}
                    All Bets
                  </li>
                </div>
                <li className="ml-4 text-slate-500 font-popins text-[13px]">
                  {" "}
                  High Holders
                </li>
                <li className="ml-4 text-slate-500 font-popins text-[13px]">
                  {" "}
                  Lucky Bets
                </li>
                <li className="ml-4 text-slate-500 font-popins text-[13px]">
                  My Bets
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <div className="flex items-center w-10/12  px-3">
            <Table />
          </div>
        </div>

        {/* /////////////////////////////////// Table  End ////////////////////////////////////////////////////////////////  */}
      </div>
    </div>
  );
};

export default Home;
