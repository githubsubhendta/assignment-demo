import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

function Layout() {
  return (
    <div className="bg-[#161719]">
      <Header />
      <div className="grid grid-cols-12">
        <div className="col-span-3 mt-[80px]  sidebar-wrap">
          <Sidebar />
        </div>
        <div className="col-span-9  w-full mt-[80px] main-content">
          <Outlet />
        </div>
      </div>
      <div className=" w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
