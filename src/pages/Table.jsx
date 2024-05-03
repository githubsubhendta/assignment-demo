import React from "react";
import Avatar1 from "./../assets/Ava (1).svg";
import Avatar2 from "./../assets/Ava (2).svg";
import CoinSvg from "./../assets/Transparent 1.svg";

function Table() {
  return (
    <div className="w-full mx-auto">
      {/* /////////////////////////////////// Table ////////////////////////////////////////////////////////////////  */}
      <div className="flex flex-col">
        {/* Table Header */}
        <div className="grid grid-cols-6 gap-3 rounded-lg mt-2">
          <div className="flex-1 px-3 py-2 text-white text-[13px]">Game</div>
          <div className="flex-1  py-2 text-white text-[13px]">Time</div>
          <div className="flex-1  py-2 text-white text-[13px]">User</div>
          <div className="flex-1  py-2 text-white text-[13px]">Bet Amount</div>
          <div className="flex-1 py-2 text-white text-[13px]">Multiplier</div>
          <div className="flex-1 py-2 text-white text-[13px]">Payout</div>
        </div>
        {/* Table Rows */}
        <div className="flex flex-col">
          <div className="bg-[#1F2225] rounded-[14px] mt-2 px-4 py-2  grid grid-cols-6 gap-3 items-center">
            <div className="flex items-center gap-2 py-2">
              <img src={Avatar1} alt="" />
              <h3 className="text-white text-[12px]">Blackjack</h3>
            </div>
            <div className="flex-1  py-2">
              <p className="text-[#555C63] text-[12px]">7:30 AM</p>
            </div>
            <div className="flex items-center gap-2 py-2">
              <img src={Avatar2} alt="" />
              <h3 className="text-white text-[12px]">Blackjack</h3>
            </div>
            <div className="flex-1  py-2">
              <div className="flex items-center gap-2">
                <img src={CoinSvg} alt="" />
                <p className="text-white text-[12px]">170</p>
              </div>
            </div>
            <div className="flex-1 py-2">
              <div className="bg-[#303438] w-14 h-8 flex items-center justify-center rounded-xl">
                <p className="text-white text-[12px]">0.00x</p>
              </div>
            </div>
            <div className="flex-1 py-2">
              <div className="flex items-center gap-2">
                <img src={CoinSvg} alt="" />
                <p className="text-white text-[12px]">0.00</p>
              </div>
            </div>
          </div>
          <div className="bg-[#1F2225] rounded-[14px] mt-2 px-4 py-2  grid grid-cols-6 gap-3 items-center">
            <div className="flex items-center gap-2 py-2">
              <img src={Avatar1} alt="" />
              <h3 className="text-white text-[12px]">Blackjack</h3>
            </div>
            <div className="flex-1  py-2">
              <p className="text-[#555C63] text-[12px]">7:30 AM</p>
            </div>
            <div className="flex items-center gap-2 py-2">
              <img src={Avatar2} alt="" />
              <h3 className="text-white text-[12px]">Blackjack</h3>
            </div>
            <div className="flex-1  py-2">
              <div className="flex items-center gap-2">
                <img src={CoinSvg} alt="" />
                <p className="text-white text-[12px]">170</p>
              </div>
            </div>
            <div className="flex-1 py-2">
              <div className="bg-[#303438] w-14 h-8 flex items-center justify-center rounded-xl">
                <p className="text-white text-[12px]">0.00x</p>
              </div>
            </div>
            <div className="flex-1 py-2">
              <div className="flex items-center gap-2">
                <img src={CoinSvg} alt="" />
                <p className="text-white text-[12px]">0.00</p>
              </div>
            </div>
          </div>
          <div className="bg-[#1F2225] rounded-[14px] mt-2 px-4 py-2  grid grid-cols-6 gap-3 items-center">
            <div className="flex items-center gap-2 py-2">
              <img src={Avatar1} alt="" />
              <h3 className="text-white text-[12px]">Blackjack</h3>
            </div>
            <div className="flex-1  py-2">
              <p className="text-[#555C63] text-[12px]">7:30 AM</p>
            </div>
            <div className="flex items-center gap-2 py-2">
              <img src={Avatar2} alt="" />
              <h3 className="text-white text-[12px]">Blackjack</h3>
            </div>
            <div className="flex-1  py-2">
              <div className="flex items-center gap-2">
                <img src={CoinSvg} alt="" />
                <p className="text-white text-[12px]">170</p>
              </div>
            </div>
            <div className="flex-1 py-2">
              <div className="bg-[#303438] w-14 h-8 flex items-center justify-center rounded-xl">
                <p className="text-[#FFC10A] text-[12px]">0.00x</p>
              </div>
            </div>
            <div className="flex-1 py-2">
              <div className="flex items-center gap-2">
                <img src={CoinSvg} alt="" />
                <p className="text-white text-[12px]">0.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
