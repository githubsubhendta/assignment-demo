import React from "react";
import Card from "./Card";
import image1 from "./../assets/Ava.png";
import coinImg from "./../assets/Transparent 1.svg";
import { FiPlus } from "react-icons/fi";
function Sidebar() {
  const chatList = [
    {
      img_url: image1,
      heading_main: "This is main Heading",
      time: "3 min ago",
      details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      img_url: image1,
      heading_main: "This is main Heading",
      time: "3 min ago",
      details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      img_url: image1,
      heading_main: "This is main Heading",
      time: "3 min ago",
      details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
  ];

  return (
    <div>
      <div className="bg-[#202125]">
        <div className="flex justify-center bg-[#1c1d21] ">
          <div className="bg-[#2c2f34] flex items-center rounded-lg my-3 p-2 h-16 w-[299px]">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <div className="h-[9px] w-[9px] border-none rounded-full bg-yellow-400 outline-none gap-1"></div>
                <p className="text-white text-[12px] px-1">Live Rain</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#171f21] rounded-md flex items-center">
                  <div className="flex items-center gap-2 p-2">
                    <img src={coinImg} alt="" className="" />
                    <p className="text-white text-[9px]">10.31</p>
                  </div>
                  <div className="bg-yellow-500 rounded h-9 w-8 flex items-center justify-center">
                    <FiPlus className=" items-center" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-10">
          {chatList.map((item) => (
            <Card
              img_url={item.img_url}
              heading_main={item.heading_main}
              time={item.time}
              details={item.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
