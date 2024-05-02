import React from "react";
import Avatar1 from "./../assets/Ava (1).svg";
import Avatar2 from "./../assets/Ava (2).svg";
import CoinSvg from "./../assets/Transparent 1.svg";

function Table() {
  return (
    <div className="container mx-auto">
      {/* /////////////////////////////////// Table ////////////////////////////////////////////////////////////////  */}
      <div className="flex flex-col">
        {/* Table Header */}
        <div className="flex  rounded-lg mt-2">
          <div className="flex-1 px-4 py-2 text-white text-[13px]">Game</div>
          <div className="flex-1 px-4 py-2 text-white text-[13px]">Time</div>
          <div className="flex-1 px-4 py-2 text-white text-[13px]">User</div>
          <div className="flex-1 px-4 py-2 text-white text-[13px]">
            Bet Amount
          </div>
          <div className="flex-1 px-4 py-2 text-white text-[13px]">
            Multiplier
          </div>
          <div className="flex-1 px-4 py-2 text-white text-[13px]">Payout</div>
        </div>
        {/* Table Rows */}
        <div className="flex flex-col">
          <div className="flex bg-slate-800 rounded-lg mt-2">
            <div className="flex-1 px-4 py-2">
              <img src={Avatar1} alt="" />
            </div>
            <div className="flex-1 px-4 py-2">
              <p className="text-white text-[12px]">7:30 AM</p>
            </div>
            <div className="flex-1 px-4 py-2">
              <img src={Avatar2} alt="" />
            </div>
            <div className="flex-1 px-4 py-2">
              <div className="flex items-center">
                <img src={CoinSvg} alt="" />{" "}
                <p className="text-white text-[12px]">170</p>
              </div>
            </div>
            <div className="flex-1 px-4 py-2">
              <div className="bg-slate-600 w-14 h-6 flex items-center justify-center rounded-xl">
                <p className="text-white text-[12px]">0.00x</p>
              </div>
            </div>
            <div className="flex-1 px-4 py-2">
              <div className="flex items-center">
                <img src={CoinSvg} alt="" />{" "}
                <p className="text-white text-[12px]">0.00</p>
              </div>
            </div>
          </div>
          <div className="flex bg-slate-800 rounded-lg mt-2">
            <div className="flex-1 px-4 py-2">
              <img src={Avatar1} alt="" />
            </div>
            <div className="flex-1 px-4 py-2">
              <p className="text-white text-[12px]">7:30 AM</p>
            </div>
            <div className="flex-1 px-4 py-2">
              <img src={Avatar2} alt="" />
            </div>
            <div className="flex-1 px-4 py-2">
              <div className="flex items-center">
                <img src={CoinSvg} alt="" />{" "}
                <p className="text-white text-[12px]">170</p>
              </div>
            </div>
            <div className="flex-1 px-4 py-2">
              <div className="bg-slate-600 w-14 h-6 flex items-center justify-center rounded-xl">
                <p className="text-white text-[12px]">0.00x</p>
              </div>
            </div>
            <div className="flex-1 px-4 py-2">
              <div className="flex items-center">
                <img src={CoinSvg} alt="" />{" "}
                <p className="text-white text-[12px]">0.20</p>
              </div>
            </div>
          </div>
          <div className="flex bg-slate-800 rounded-lg mt-2">
            <div className="flex-1 px-4 py-2">
              <img src={Avatar1} alt="" />
            </div>
            <div className="flex-1 px-4 py-2">
              <p className="text-white text-[12px]">7:30 AM</p>
            </div>
            <div className="flex-1 px-4 py-2">
              <img src={Avatar2} alt="" />
            </div>
            <div className="flex-1 px-4 py-2">
              <div className="flex items-center">
                <img src={CoinSvg} alt="" />{" "}
                <p className="text-white text-[12px]">170</p>
              </div>
            </div>
            <div className="flex-1 px-4 py-2">
              <div className="bg-slate-600 w-14 h-6 flex items-center justify-center rounded-xl">
                <p className="text-white text-[12px]">0.00x</p>
              </div>
            </div>
            <div className="flex-1 px-4 py-2">
              <div className="flex items-center">
                <img src={CoinSvg} alt="" />{" "}
                <p className="text-white text-[12px]">20.00</p>
              </div>
            </div>
          </div>
          <div className="flex bg-slate-800 rounded-lg mt-2">
            <div className="flex-1 px-4 py-2">
              <img src={Avatar1} alt="" />
            </div>
            <div className="flex-1 px-4 py-2">
              <p className="text-white text-[12px]">7:30 AM</p>
            </div>
            <div className="flex-1 px-4 py-2">
              <img src={Avatar2} alt="" />
            </div>
            <div className="flex-1 px-4 py-2">
              <div className="flex items-center">
                <img src={CoinSvg} alt="" />{" "}
                <p className="text-white text-[12px]">170</p>
              </div>
            </div>
            <div className="flex-1 px-4 py-2">
              <div className="bg-slate-600 w-14 h-6 flex items-center justify-center rounded-xl">
                <p className="text-white text-[12px]">0.00x</p>
              </div>
            </div>
            <div className="flex-1 px-4 py-2">
              <div className="flex items-center">
                <img src={CoinSvg} alt="" />{" "}
                <p className="text-white text-[12px]">17.30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
