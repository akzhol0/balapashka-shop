import React, { useState } from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "./UI/MyIcons/InstagramIcon";
import WhatsappIcon from "./UI/MyIcons/WhatsappIcon";
import { click } from "@testing-library/user-event/dist/click";

interface HeaderProps {
  backgroundOnOff: boolean;
}

function Header({ backgroundOnOff }: HeaderProps) {
  return (
    <>
      <header className="w-full h-[80px] z-20">
        <div className="w-full h-[80px] bg-[#18191A] flex justify-center fixed z-20">
          <div className="lg:w-[85%] w-[90%] flex justify-between items-center text-[#ed802e] font-extrabold tracking-wide font-Alumni">
            <div className="flex items-center cursor-pointer">
              <div className="text-3xl sm:text-6xl">
                <Link to="/">BALAPASHKA SHOP</Link>
              </div>
              <sup className="text-xl sm:text-3xl">©</sup>
            </div>
            <div className="flex items-center gap-[5px]">
              <p className="text-3xl font-extrabold md:block hidden cursor-default">
                +7 (705) 131-59-66
              </p>
              <a
                href="https://www.instagram.com/balapashka.shop/"
                target="blank"
              >
                <div className="cursor-pointer">
                  <InstagramIcon />
                </div>
              </a>
              <a
                href="https://api.whatsapp.com/message/JXNH2Z6NKNVJO1?autoload=1&app_absent=0"
                target="blank"
              >
                <div className="cursor-pointer">
                  <WhatsappIcon />
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="w-full h-[40px] bg-[#ed802e] flex justify-center items-center font-Alumni font-light text-3xl">
        <Link to="/catalog">
          <div
            className={
              backgroundOnOff
                ? "w-[200px] md:w-[500px] bg-[#fc8c37] flex justify-center items-center"
                : "w-[200px] md:w-[500px] cursor-pointer hover:bg-[#fc8c37] flex justify-center items-center transition-[.1.5s]"
            }
          >
            КАТАЛОГ
          </div>
        </Link>
      </div>
    </>
  );
}

export default Header;
