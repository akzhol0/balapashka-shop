import Header from "./Header";
import { useContext, useEffect, useState } from "react";
import { contextData } from "../context";
import PageItems from "./PageItems";
import CatalogItems from "./CatalogItems";

function Catalog() {
  const [clicked, setClicked] = useState<boolean>(false);
  const { setCartItemsFromLocalStorage } = useContext(contextData);

  useEffect(() => {
    document.title = "Каталог";
    setCartItemsFromLocalStorage();
  }, []);

  return (
    <div>
      <Header backgroundOnOff={true} />
      {clicked ? (
        <PageItems setClicked={setClicked} />
      ) : (
        <CatalogItems setClicked={setClicked} />
      )}
    </div>
  );
}

export default Catalog;
