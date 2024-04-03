import React from "react";

interface PropsItem {
  name: string;
  id: number;
  value: number;
  img: string;
}

interface cartItemProps {
  item: PropsItem;
  deleteItemCart: (arg0: number) => void;
}

function CartItemComp({ item, deleteItemCart }: cartItemProps) {
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
          <p className="overflow-hidden text-[25px]">{item.name}</p>
          <p className="text-[30px]">{item.value}KZT</p>
        </span>
      </div>
      <div
        onClick={() => deleteItemCart(item.id)}
        className="w-[60px] h-[30px] bg-black text-white text-center text-xl cursor-pointer"
      >
        Delete
      </div>
    </div>
  );
}

export default CartItemComp;
