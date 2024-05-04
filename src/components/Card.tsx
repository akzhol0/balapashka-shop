import React, { useContext, useEffect } from "react";
import CartIcon from "./UI/MyIcons/CartIcon";
import { CatalogItemProps, ItemProps } from "../service/types";
import { contextData } from "../context/logic";
import { Link } from "react-router-dom";

interface cardPropsProps {
  item: CatalogItemProps;
  setTest: (arg0: boolean) => void;
  test: boolean;
}

function Card({ item, setTest, test }: cardPropsProps) {
  const { addItemCart } = useContext(contextData);

  function objAdder() {
    const cartItemPrep = [
      {
        name: item.name,
        value: item.value,
        img: item.img,
        id: item.id,
        quantity: 1,
        category: item.category,
      },
    ];
    addItemCart(cartItemPrep);
  }
  const link = `/catalog/${item.category.toLowerCase()}/${item.id}`;

  return (
    <div className="w-full min-h-[500px] flex flex-col rounded-xl overflow-hidden">
      
        <div className="card-img h-[350px] w-full relative overflow-hidden">
          <span
            onClick={() => objAdder()}
            className="absolute bg-white p-1.5 rounded-md bottom-1 right-1 cursor-pointer z-10"
          >
            <button onClick={() => setTest(test ? false : true)}>
              <CartIcon />
            </button>
          </span>
          <Link to={link}>
          <img
            className="w-full h-full object-cover object-center hover:scale-[1.1] duration-[.2s] z-2"
            src={item.img}
            alt="card-logo"
          />
          </Link>
        </div>
      <div className="w-full min-h-[150px] px-2 bg-[#222222] flex flex-col text-white font-Alumni cursor-default">
        <p className="text-[30px] text-center leading-15">{item.name}</p>
        <div className="flex justify-around">
          <p className="text-3xl">
            {item.price}
            <sub className="line-through text-gray-700">{item.priceBottom}</sub>
          </p>
          <p className="text-green-500 text-xl">{item.stock}</p>
        </div>
        <div className="text-lg text-center">{item.size}</div>
      </div>
    </div>
  );
}

export default Card;
