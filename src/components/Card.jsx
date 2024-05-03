import React from "react";
import { FaEllipsis } from "react-icons/fa6";

function Card({ img_url, heading_main, time, details }) {
  return (
    <>
      <div className="bg-[#2c2f34] flex rounded-lg mt-5 gap-2 p-2">
        <div className="h-20 w-20 flex items-center">
          <img src={img_url} className="h-full" />
        </div>
        <div>
          <div className="flex">
            <h2 className="text-[#777a7f] text-[14px] font-bold">
              {heading_main}
            </h2>
            <p className="text-[#777a7f] text-[10px] px-3 ">{time}</p>
          </div>
          <p className="text-[#777a7f] text-[12px]">{details}</p>
        </div>
        <div>
          <FaEllipsis className="text-[#777a7f]" />
        </div>
      </div>
    </>
  );
}

export default Card;