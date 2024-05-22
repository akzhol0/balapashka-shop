import React, { useContext, useState } from "react";
import BurgerMenuComp from "./burger/BurgerMenuComp";
import { CatalogItemProps, ItemProps } from "../service/types";
import Card from "./Card";
import Footer from "./footer/Footer";
import { contextData } from "../context/logic";
import Options from "./Options";

type PageItemsProps = {
  setClicked: (arg0: boolean) => void;
};

function PageItems({ setClicked }: PageItemsProps) {
  const [test, setTest] = useState<boolean>(true);
  const [searchInput, setSearchInput] = useState<string>("");
  const [moneyLimit, setMoneyLimit] = useState<number>(50000);
  const [priceFilter, setPriceFilter] = useState<string>("");
  const { cartItems, limitItemsFunc, searchItemsFunc, filteredBySort } =
    useContext(contextData);

  const filteredByLimitItems = limitItemsFunc(moneyLimit);
  const filteredBySearchItems = searchItemsFunc(filteredByLimitItems, searchInput);
  filteredBySort(priceFilter, filteredBySearchItems);

  return (
    <div>
      <main className="w-full bg-[#1b1b1b]">
        <div className="flex flex-col justify-center items-center relative">
          <BurgerMenuComp
            cartItems={cartItems}
            setClicked={setClicked}
            test={test}
            setTest={setTest}
          />
          {
            <>
              <Options
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                setMoneyLimit={setMoneyLimit}
                setPriceFilter={setPriceFilter}
              />
              <div className="w-[100%] min-h-[500px] xl:w-[90%] 2xl:w-[80%] px-5 xl:px-0 mt-5 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-8 place-items-center">
                {filteredBySearchItems.length ? (
                  filteredBySearchItems.map((item: CatalogItemProps) => (
                    <Card
                      test={test}
                      setTest={setTest}
                      key={item.id}
                      item={item}
                    />
                  ))
                ) : (
                  <p className="w-full text-white text-[30px] font-Alumni">
                    Пусто...
                  </p>
                )}
              </div>
            </>
          }
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PageItems;
