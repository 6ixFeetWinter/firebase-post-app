import React from "react";
import "../style/style.css";
import { Sidebar } from "./layout/Sidebar";
export const Home = () => {
  return (
    <div className="p-home__display">
      <div className="p-home__sidebar-area">
        <Sidebar />
      </div>
      <div className="p-home__board-area"></div>
      <div className="p-home__profile-area"></div>
    </div>
  );
};
