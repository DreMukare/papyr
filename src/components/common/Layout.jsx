import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-max w-max">
      <div className="px-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
