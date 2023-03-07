/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../assets/images/logo.png";
function Header() {
  return (
    <div className="py-8 mb-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={Logo} className="w-10 rounded-[50%]" alt="sad"/>
          </a>
          <p className="text-[12px]">Updated: Mar-5-2023</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
