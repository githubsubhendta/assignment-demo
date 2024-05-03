import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

function Layout() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-12 bg-[#161719]">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9  w-full">
          <Outlet />
        </div>
      </div>
      <div className=" w-[100%]  bg-[#1e2225]">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
