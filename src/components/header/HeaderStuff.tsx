import React, { useContext } from "react";
import BurgerMainMenu from "../burger/BurgerMainMenu";
import BurgerMainFunc from "../burger/BurgerMainFunc";
import { Link } from "react-router-dom";
import { contextData } from "../../context/logic";

type HeaderStuff = {
  burger: boolean;
  setBurger: (arg0: boolean) => void;
  userIn: boolean;
  userLogin: string;
  setUserIn: (arg: boolean) => void;
};

function HeaderStuff({
  burger,
  setBurger,
  userIn,
  userLogin,
  setUserIn,
}: HeaderStuff) {
  const exitAccount = () => {
    localStorage.removeItem("user");
    setUserIn(false);
  };

  const { userLocationInfo } = useContext(contextData);

  return (
    <div className="w-full h-[80px] bg-[#18191A] flex justify-center fixed z-20">
      <div className="w-[90%] lg:w-[85%] flex justify-between items-center text-[#ed802e] font-extrabold tracking-wide font-Alumni">
        <div className="flex items-center cursor-pointer">
          <div className="text-4xl sm:text-6xl">
            <Link to="/">BALAPASHKA SHOP</Link>
          </div>
          <sup className="text-xl sm:text-3xl">©</sup>
        </div>
        <div className="hidden md:flex items-center gap-[5px]">
          <div className="min-w-[120px] min-h-[40px] flex cursor-pointer">
            {userIn ? (
              <div
                className="w-full px-2 bg-[#ed820e] cursor-default rounded-lg text-black flex-col justify-center 
              items-center gap-1 text-xl font-light py-1"
              >
                <div className="flex gap-1">
                  <p>{userLogin}</p>
                  <p
                    className="bg-black text-white px-2 rounded-lg cursor-pointer"
                    onClick={() => exitAccount()}
                  >
                    Exit
                  </p>
                </div>
                {userLocationInfo[0]?.name ? (
                  <div className="flex justify-center gap-2">
                    <p>Location: {userLocationInfo[0]?.country}</p>
                    <p>City: {userLocationInfo[0]?.name}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <div
                className="w-full bg-[#ed820e] rounded-lg text-black flex flex-col justify-center 
              items-center text-2xl font-light me-2"
              >
                <Link className="w-full flex justify-center" to="/login">
                  <div>Войти</div>
                </Link>
                {userLocationInfo[0]?.name ? (
                  <div className="flex gap-1 text-lg px-1">
                    <p>Location: {userLocationInfo[0]?.country}</p>
                    <p>City: {userLocationInfo[0]?.name}</p>
                  </div>
                ) : (
                  ''
                )}
              </div>
            )}
          </div>
          <p className="text-2xl font-extrabold hidden lg:flex cursor-default">
            +7 (705) 131-59-66
          </p>
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
        <BurgerMainFunc burger={burger} setBurger={setBurger} />
      </div>
      <div
        className={
          burger
            ? "absolute right-0 top-[80px] transition-[.5s] duration-[.4s]"
            : "absolute right-[-400px] top-[80px] transition-[.5s] duration-[.4s]"
        }
      >
        <div className="w-[350px] h-screen bg-[#18191a] flex z-10">
          <BurgerMainMenu
            exitAccount={exitAccount}
            userIn={userIn}
            userLogin={userLogin}
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderStuff;
