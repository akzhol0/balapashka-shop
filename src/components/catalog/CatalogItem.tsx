import React, { useContext } from "react";
import { CatalogItemProps } from "../../service/types";
import { contextData } from "../../context/logic";

interface ItemProps {
  setClicked: (arg0: boolean) => void;
  name: string;
  catalogItems: CatalogItemProps[];
}

function CatalogItem({ name, setClicked, catalogItems }: ItemProps) {
  const {setItemsFunction} = useContext(contextData);

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
