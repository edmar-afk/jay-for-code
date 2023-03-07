import Header from "../Header";
import { Outlet } from "react-router-dom";
import Nav from "../Nav";
import React from "react";

function RootLayOut() {
  return (
    <>
      <div className="bg-site bg-no-repeat bg-cover bg-fixed overflow-hidden">
        <Header />
        <Nav />
        <Outlet />
      </div>
    </>
  );
}

export default RootLayOut;
