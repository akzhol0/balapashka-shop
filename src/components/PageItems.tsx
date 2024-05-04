import React, { useContext, useState } from "react";
import BurgerMenuComp from "./burger/BurgerMenuComp";
import { CatalogItemProps } from "../service/types";
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
  const { cartItems, limitItemsFunc, searchItemsFunc } = useContext(contextData);

  const filteredByLimitItems = limitItemsFunc(moneyLimit);
  const filteredBySearchItems = searchItemsFunc(filteredByLimitItems, searchInput);

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
              />
              <div className="too-long">
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
