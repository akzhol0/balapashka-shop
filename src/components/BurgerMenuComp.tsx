import React, { useEffect, useState } from "react";
import BurgerMenu from "./UI/MyIcons/BurgerMenu";
import CloseBurgerBtn from "./UI/MyIcons/CloseBurgerBtn";
import CartItemComp from "./CartItemComp";

interface cartItemsProps {
  name: string;
  id: number;
  value: number;
  img: string;
  quantity: number;
}

interface BurgerMenuCompProps {
  setClicked: (arg0: boolean) => void;
  deleteItemCart: (arg0: number) => void;
  cartItems: cartItemsProps[];
  setTest: (arg0: boolean) => void;
  test: boolean;
}

function BurgerMenuComp({
  setClicked,
  cartItems,
  deleteItemCart,
  test,
  setTest
}: BurgerMenuCompProps) {
  const [burgerMenu, setBurgerMenu] = useState<Boolean>(false);

  let moneyCounted = 0;
  cartItems.map((item) => (moneyCounted += item.value * item.quantity));
  return (
    <div>
      <span
        className="absolute top-5 left-5 cursor-pointer"
        onClick={() => setBurgerMenu(true)}
      >
        <BurgerMenu />
      </span>
      <div
        onClick={() => setClicked(false)}
        className="px-2 py-1 rounded-md bg-white font-Alumni text-bold absolute top-7 left-20 cursor-pointer"
      >
        Назад
      </div>
      <div
        className={
          burgerMenu
            ? "burger left-0 z-20 overflow-y-scroll"
            : "burger left-[-400px] z-20 overflow-y-scroll"
        }
      >
        <div className="w-full flex justify-center">
          <span onClick={() => setBurgerMenu(false)} className="cursor-pointer">
            <CloseBurgerBtn />
          </span>
        </div>
        <p className="text-center font-semibold text-2xl">Корзина</p>
        <p className="text-center font-semibold text-xl">
          Итого: {moneyCounted} KZT
        </p>
        <div className={test ? "flex flex-col gap-2 my-4" : "flex flex-col gap-2 my-4"}>
          {cartItems.length ? (
            cartItems.map((item) => (
              <CartItemComp
                key={item.id}
                deleteItemCart={deleteItemCart}
                item={item}
                setTest={setTest}
                test={test}
              />
            ))
          ) : (
            <p className="text-center font-semibold text-xl">Корзина пуста.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BurgerMenuComp;
