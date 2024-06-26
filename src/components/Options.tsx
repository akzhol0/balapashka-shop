import React, { useState } from "react";

type OptionsProps = {
  searchInput: string;
  setSearchInput: (arg0: string) => void;
  setMoneyLimit: (arg0: number) => void;
  setPriceFilter: (arg0: string) => void
};

function Options({ searchInput, setSearchInput, setMoneyLimit, setPriceFilter }: OptionsProps) {
  return (
    <div className="w-full flex justify-end md:justify-center items-center mt-[80px] sm:mt-[25px] gap-2">
      <select
        onChange={(e) => setPriceFilter(e.target.value)}
        className="w-[80px] h-[40px] rounded-lg bg-[#ffa545]"
      >
        <option value="default">Cортировка(обычная)</option>
        <option value="f-cheap">Сперва дешевые</option>
        <option value="f-expensive">Сперва дорогие</option>
      </select>
      <input
        className="w-[100px] md:w-[324px] h-[40px] bg-[#ffa545] rounded-lg font-Alumni text-[25px] ps-4 placeholder-black"
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Поиск..."
      />
      <input
        className="w-[80px] h-[40px] bg-[#ffa545] rounded-lg font-Alumni text-[20px] ps-2 placeholder-black"
        type="number"
        onChange={(e) => setMoneyLimit(Number(e.target.value))}
        placeholder="Цена до:"
      />
    </div>
  );
}

export default Options;
