import React from "react";
import { Link } from "react-router-dom";

type BurgerMainMenuProps = {
  userLogin: string;
  userIn: boolean;
  exitAccount: () => void;
};

function BurgerMainMenu({
  userIn,
  userLogin,
  exitAccount,
}: BurgerMainMenuProps) {
  return (
    <div className="w-full flex flex-col gap-[5px] text-[#ed802e] items-center font-extrabold font-Alumni">
      <div className="min-w-[90px] h-[34px] flex cursor-pointer">
        <div
          className="w-full bg-[#ED820E] rounded-lg text-black flex justify-center 
                items-center text-2xl font-light "
        >
          {userIn ? (
            <div
              className="w-full px-2 bg-[#ed820e] cursor-default rounded-lg text-black flex gap-2 justify-center 
              items-center text-xl font-light"
            >
              <p>{userLogin}</p>
              <p
                className="bg-black text-white px-2 rounded-lg cursor-pointer"
                onClick={() => exitAccount()}
              >
                Exit
              </p>
            </div>
          ) : (
            <Link
                className="w-full bg-[#ed820e] rounded-lg text-black flex justify-center 
              items-center text-2xl font-light me-2"
                to="/login"
              >
                <div>Войти</div>
              </Link>
          )}
        </div>
      </div>
      <p className="text-3xl font-extrabold flex cursor-default ">
        +7 (705) 131-59-66
      </p>
      <div className="flex">
        <a href="https://www.instagram.com/balapashka.shop/" target="blank">
          <div className="cursor-pointer">
            <img src="/Instagram.png" alt="logo" width={45} height={45} />
          </div>
        </a>
        <a
          href="https://api.whatsapp.com/message/JXNH2Z6NKNVJO1?autoload=1&app_absent=0"
          target="blank"
        >
          <div className="cursor-pointer">
            <img src="/whatsapp.png" alt="logo" width={45} height={45} />
          </div>
        </a>
      </div>
    </div>
  );
}

export default BurgerMainMenu;
