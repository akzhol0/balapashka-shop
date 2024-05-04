import React from "react";

type BurgerMainFuncProps = {
    burger: boolean;
    setBurger: (arg0: boolean) => void;
}

function BurgerMainFunc({burger, setBurger}: BurgerMainFuncProps) {
  return (
    <div
      className="w-[40px] h-[30px] flex md:hidden flex-col justify-between cursor-pointer"
      onClick={() => setBurger(burger ? false : true)}
    >
      {burger ? (
        <>
          <span className="w-full h-[4px] bg-[#ed820e] rotate-45 translate-y-[13px]"></span>
          <span className="w-full h-[4px] bg-[#ed820e] -rotate-45 translate-y-[-13px]"></span>
        </>
      ) : (
        <>
          <span className="w-full h-[4px] bg-[#ed820e]"></span>
          <span className="w-full h-[4px] bg-[#ed820e]"></span>
          <span className="w-full h-[4px] bg-[#ed820e]"></span>
        </>
      )}
    </div>
  );
}

export default BurgerMainFunc;
