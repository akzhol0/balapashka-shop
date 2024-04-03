import React from "react";

interface catalogItemsProps {
  id: number;
  value: number;
  name: string;
  stock: string;
  price: string;
  priceBottom: string;
  size: string;
  img: string;
}

interface ItemProps {
  setClicked: (arg0: boolean) => void;
  setItemsFunction: (arg0: catalogItemsProps[]) => void;
  name: string;
  catalogItems: catalogItemsProps[];
}

function CatalogItem({ name, setClicked, catalogItems, setItemsFunction }: ItemProps) {
  function foo() {
    setClicked(true);
    setItemsFunction(catalogItems)
  }

  return (
    <div
      onClick={() => foo()}
      className="w-full h-full flex justify-center items-center border-[1px]
     border-white rounded-[10px] text-3xl md:text-4xl hover:bg-[#242424] cursor-pointer duration-[0.3s]"
    >
      {name}
    </div>
  );
}

export default CatalogItem;
