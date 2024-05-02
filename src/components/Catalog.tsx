import Header from "./Header";
import CatalogItem from "./CatalogItem";
import { useEffect, useState } from "react";
import BurgerMenuComp from "./BurgerMenuComp";
import Card from "./Card";
import Footer from "./Footer";
import database from "../service/CatalogItemsList";
import { catalogCardProps, cartItemsProps } from "../service/types";

function Catalog() {
  const [items, setItems] = useState<catalogCardProps[]>([]);
  const [cartItems, setCartItems] = useState<cartItemsProps[]>([]);
  const [test, setTest] = useState<boolean>(true);
  const [clicked, setClicked] = useState<boolean>(false);

  function setItemsFunction(itemscb: catalogCardProps[]) {
    setItems(itemscb);
  }

  function setCartItemsFromLocalStorage() {
    for (let i = 1; i <= 135; i++) {
      const storedData = localStorage.getItem(`item${i}`)
      const myObject = storedData ? JSON.parse(storedData) : null;

      if (myObject === null) {} else {
        setCartItems(prev => [...prev, myObject])
      }
    }
  } 

  function addItemCart(itemcb: cartItemsProps[]) {
    const cartItemsIds: number[] = [];
    cartItems.map((item) => cartItemsIds.push(item.id))

    if (cartItemsIds.includes(itemcb[0].id)) {
      cartItems.map((item) => {
        if (item.id === itemcb[0].id) {
          item.quantity += 1;
          const storedData = localStorage.getItem(`item${itemcb[0].id}`);
          const myObject = storedData ? JSON.parse(storedData) : '';
          myObject.quantity += 1;
          localStorage.setItem(`item${itemcb[0].id}`, JSON.stringify(myObject))
        }
      })
    } else {
      localStorage.setItem(`item${itemcb[0].id}`, JSON.stringify(itemcb[0]))
      setCartItems([...cartItems, itemcb[0]])
    }
  }

  function deleteItemCart(itemId: number) {
    cartItems.map((item) => {
      if (item.id === itemId) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          const storedData = localStorage.getItem(`item${item.id}`);
          const myObject = storedData ? JSON.parse(storedData) : '';
          myObject.quantity -= 1;
          localStorage.setItem(`item${item.id}`, JSON.stringify(myObject))
        } else {
          setCartItems(cartItems.filter((item) => item.id !== itemId));
          localStorage.removeItem(`item${item.id}`)
        }
      }
    })
  }

  useEffect(() => {
    document.title = "Каталог";
    setCartItemsFromLocalStorage()
  }, []);

  return (
    <div>
      <Header backgroundOnOff={true} />
      {clicked ? (
        <>
          <main className="w-full bg-[#1b1b1b]">
            <div className="flex flex-col justify-center items-center relative">
              <BurgerMenuComp
                deleteItemCart={deleteItemCart}
                cartItems={cartItems}
                setClicked={setClicked}
                test={test} 
                setTest={setTest}
              />
              {
                <div
                  className="w-[100%] xl:w-[90%] 2xl:w-[80%] px-5 xl:px-0 mt-20 mb-10 h-auto grid grid-cols-1 sm:grid-cols-2 
                  md:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-8 place-items-center"
                >
                  {items.map((item) => (
                    <Card test={test} setTest={setTest} addItemCart={addItemCart} key={item.id} item={item} />
                  ))}
                </div>
              }
            </div>
          </main>
          <Footer />
        </>
      ) : (
        <main className="w-full bg-[#1b1b1b] flex justify-center items-center flex-col">
          <div className="w-[85%] text-white font-Alumni">
            <p className="text-5xl sm:text-8xl mt-[50px]">Каталог</p>
            <p className="text-xl">Главная страница - Каталог</p>
            <div className="w-full h-[800px] md:h-[1000px] lg:h-[300px] grid grid-cols-2 lg:grid-cols-5 gap-[15px] my-[70px]">
              {database.map((item) => (
                <CatalogItem
                  key={item.name}
                  catalogItems={item.catalogItemsList}
                  setClicked={setClicked}
                  name={item.name}
                  setItemsFunction={setItemsFunction}
                />
              ))}
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default Catalog;

