import React from "react";
import database from "../../service/database";
import CatalogItem from "./CatalogItem";

type CatalogItemsProps = {
  setClicked: (arg0: boolean) => void;
};

function CatalogItems({ setClicked }: CatalogItemsProps) {
  return (
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
  );
}

export default CatalogItems;
