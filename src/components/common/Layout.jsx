import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen h-screen w-screen">
      <div className="px-10 h-full w-10/12 mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
