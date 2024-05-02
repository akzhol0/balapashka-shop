import Header from "./Header";
import CatalogItem from "./CatalogItem";
import { useContext, useEffect, useState } from "react";
import BurgerMenuComp from "./BurgerMenuComp";
import Card from "./Card";
import Footer from "./Footer";
import database from "../service/database";
import { catalogCardProps } from "../service/types";
import { contextData } from "../context";

function Catalog() {
  const [test, setTest] = useState<boolean>(true);
  const [clicked, setClicked] = useState<boolean>(false);
  const { items, cartItems, setCartItemsFromLocalStorage } = useContext(contextData);

  useEffect(() => {
    document.title = "Каталог";
    setCartItemsFromLocalStorage();
  }, []);

  return (
    <div>
      <Header backgroundOnOff={true} />
      {clicked ? (
        <>
          <main className="w-full bg-[#1b1b1b]">
            <div className="flex flex-col justify-center items-center relative">
              <BurgerMenuComp
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
                  {items.map((item: catalogCardProps) => (
                    <Card
                      test={test}
                      setTest={setTest}
                      key={item.id}
                      item={item}
                    />
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
