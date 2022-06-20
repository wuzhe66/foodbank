import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function DashboardLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
export default DashboardLayout;
