import React from "react";
import { catalogCardProps } from "../service/types";

interface ItemProps {
  setClicked: (arg0: boolean) => void;
  setItemsFunction: (arg0: catalogCardProps[]) => void;
  name: string;
  catalogItems: catalogCardProps[];
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
