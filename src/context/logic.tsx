import React, { createContext, useState } from "react";
import { ItemProps, CatalogItemProps } from "../service/types";
import database from "../service/database";

type yaNeEbyChtoEto = {
  map(arg0: (item: CatalogItemProps) => import("react/jsx-runtime").JSX.Element): React.ReactNode;
  length: any;
}

type ContextProps = {
  items: any;
  cartItems: any;
  setItemsFunction: (itemscb: CatalogItemProps[]) => void;
  setCartItemsFromLocalStorage: () => void;
  addItemCart: (itemcb: ItemProps[]) => void;
  deleteItemCart: (itemId: number) => void;
  limitItemsFunc: (moneyLimit: number) => void;
  searchItemsFunc: (filteredByLimitItems: any, searchInput: string) => yaNeEbyChtoEto;
  getItem: (id: string | undefined, category: string | undefined, setItem: (arg0: CatalogItemProps) => void) => void;
};
export const contextData = createContext({} as ContextProps);

type ContextOverAllProps = {
  children: React.ReactNode;
};

export function ContextOverAll({ children }: ContextOverAllProps) {
  const [items, setItems] = useState<CatalogItemProps[]>([]);
  const [cartItems, setCartItems] = useState<ItemProps[]>([]);

  function setItemsFunction(itemscb: CatalogItemProps[]) {
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

  function addItemCart(itemcb: ItemProps[]) {
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

  function limitItemsFunc(moneyLimit: number) {
    const filtered = items.filter(
      (item: CatalogItemProps) => item.value <= moneyLimit
    );
    return filtered;
  }

  function searchItemsFunc(filteredByLimitItems: any, searchInput: string) {
    const filtered = filteredByLimitItems.filter((item: ItemProps) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filtered;
  }

  function getItem(id: string | undefined, category: string | undefined, setItem: (arg0: CatalogItemProps) => void) {
    database.map((item) => {
      if (item.name == category?.toUpperCase()) {
        item.catalogItemsList.map((item) => {
          if (Number(id) === item.id) {
            setItem(item)
          }
        })
      }
    })
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
        limitItemsFunc,
        searchItemsFunc,
        getItem,
      }}
    >
      {children}
    </contextData.Provider>
  );
}
