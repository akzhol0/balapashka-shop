import Header from "./Header";
import CatalogItem from "./CatalogItem";
import { useEffect, useState } from "react";
import BurgerMenuComp from "./BurgerMenuComp";
import Card from "./Card";
import Footer from "./Footer";
import CatalogItemsList from "../service/CatalogItemsList";

function Catalog() {
  interface catalogCardProps {
    id: number;
    value: number;
    name: string;
    stock: string;
    price: string;
    priceBottom: string;
    size: string;
    img: string;
  }

  interface cartItemsProps {
    name: string;
    id: number;
    value: number;
    img: string;
  }

  const [items, setItems] = useState<catalogCardProps[]>([]);
  const [cartItems, setCartItems] = useState<cartItemsProps[]>([]);
  const [clicked, setClicked] = useState<boolean>(false);

  function setItemsFunction(itemscb: catalogCardProps[]) {
    setItems(itemscb);
  }

  function addItemCart(itemcb: cartItemsProps[]) {
    setCartItems([...cartItems, itemcb[0]])
  }

  function deleteItemCart(itemId: number) {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  }

  useEffect(() => {
    document.title = "Каталог";
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
              />
              {
                <div
                  className="w-[100%] xl:w-[90%] 2xl:w-[80%] px-5 xl:px-0 mt-20 mb-10 h-auto grid grid-cols-1 sm:grid-cols-2 
                  md:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-8 place-items-center"
                >
                  {items.map((item) => (
                    <Card addItemCart={addItemCart} key={item.id} item={item} />
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
              {CatalogItemsList.map((item) => (
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

