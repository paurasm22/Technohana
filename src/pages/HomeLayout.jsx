import React from "react";
import Sidebar from "./Sidebar";
import "../HomeLayout.css";

function HomeLayout({ children }) {
  return (
    <div className="home-layout">
      <Sidebar />
      <div className="home-content">{children}</div>
    </div>
  );
}

export default HomeLayout;
