import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderProps } from "../../service/types";
import HeaderStuff from "./HeaderStuff";
import { contextData } from "../../context/logic";

function Header({ backgroundOnOff }: HeaderProps) {
  const [burger, setBurger] = useState<boolean>(false);
  const [userLogin, setUserLogin] = useState<string>("");
  const { getUserInfo, userIn, setUserIn } = useContext(contextData);

  useEffect(() => {
    getUserInfo(setUserLogin);
  }, []);

  return (
    <>
      <header className="w-full h-[80px] z-20">
        <HeaderStuff
          setUserIn={setUserIn}
          userLogin={userLogin}
          userIn={userIn}
          burger={burger}
          setBurger={setBurger}
        />
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
