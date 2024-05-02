import React from "react";
import { cartItemsProps } from "../service/types";

interface cartItemProps {
  item: cartItemsProps;
  deleteItemCart: (arg0: number) => void;
  test: boolean;
  setTest: (arg0: boolean) => void;
}

function CartItemComp({ item, deleteItemCart, test, setTest }: cartItemProps) {
  return (
    <div className="w-full h-[100px] border-y flex justify-between items-center font-Alumni">
      <div className="flex">
        <div className="w-[98px] h-[98px] overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src={item.img}
            alt="img-logo"
          />
        </div>
        <span className="flex flex-col ml-4 leading-[30px]">
          <p className="w-full h-max-10px overflow-hidden text-[24px]">{item.name}</p>
          <p className="text-[30px]">{item.value * item.quantity}KZT</p>
          <p className="text-[20px]">Количество: {item.quantity}</p>
        </span>
      </div>
      <div onClick={() => setTest(test ? false : true)}>
        <button
          onClick={() => deleteItemCart(item.id)}
          className="w-[60px] h-[30px] bg-black text-white text-center text-xl cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CartItemComp;
