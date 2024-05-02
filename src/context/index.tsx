import React, { createContext, useState } from "react";
import { cartItemsProps, catalogCardProps } from "../service/types";

type ContextProps = {
  items: any;
  cartItems: any;
  setItemsFunction: (itemscb: catalogCardProps[]) => void;
  setCartItemsFromLocalStorage: () => void;
  addItemCart: (itemcb: cartItemsProps[]) => void;
  deleteItemCart: (itemId: number) => void;
};
export const contextData = createContext({} as ContextProps);

type ContextOverAllProps = {
  children: React.ReactNode;
};

export function ContextOverAll({ children }: ContextOverAllProps) {
  const [items, setItems] = useState<catalogCardProps[]>([]);
  const [cartItems, setCartItems] = useState<cartItemsProps[]>([]);

  function setItemsFunction(itemscb: catalogCardProps[]) {
    setItems(itemscb);
  }

  function setCartItemsFromLocalStorage() {
    for (let i = 1; i <= 135; i++) {
      const storedData = localStorage.getItem(`item${i}`);
      const myObject = storedData ? JSON.parse(storedData) : null;

      if (myObject === null) {
      } else {
        setCartItems((prev) => [...prev, myObject]);
      }
    }
  }

  function addItemCart(itemcb: cartItemsProps[]) {
    const cartItemsIds: number[] = [];
    cartItems.map((item) => cartItemsIds.push(item.id));

    if (cartItemsIds.includes(itemcb[0].id)) {
      cartItems.map((item) => {
        if (item.id === itemcb[0].id) {
          item.quantity += 1;
          const storedData = localStorage.getItem(`item${itemcb[0].id}`);
          const myObject = storedData ? JSON.parse(storedData) : "";
          myObject.quantity += 1;
          localStorage.setItem(`item${itemcb[0].id}`, JSON.stringify(myObject));
        }
      });
    } else {
      localStorage.setItem(`item${itemcb[0].id}`, JSON.stringify(itemcb[0]));
      setCartItems((prev) => [...prev, itemcb[0]]);
    }
  }

  function deleteItemCart(itemId: number) {
    cartItems.map((item) => {
      if (item.id === itemId) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          const storedData = localStorage.getItem(`item${item.id}`);
          const myObject = storedData ? JSON.parse(storedData) : "";
          myObject.quantity -= 1;
          localStorage.setItem(`item${item.id}`, JSON.stringify(myObject));
        } else {
          setCartItems(cartItems.filter((item) => item.id !== itemId));
          localStorage.removeItem(`item${item.id}`);
        }
      }
    });
  }

  return (
    <contextData.Provider
      value={{
        items,
        cartItems,
        setItemsFunction,
        setCartItemsFromLocalStorage,
        addItemCart,
        deleteItemCart,
      }}
    >
      {children}
    </contextData.Provider>
  );
}
