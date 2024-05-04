import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { CatalogItemProps } from "../../service/types";
import Header from "../header/Header";
import { contextData } from "../../context/logic";
import { useNavigate } from "react-router-dom";

function SingleItem() {
  const { id, category } = useParams();
  const [item, setItem] = useState<CatalogItemProps>();
  const { getItem } = useContext(contextData);
  const navigate = useNavigate();

  useEffect(() => {
    getItem(id, category, setItem);
  }, []);

  return (
    <div>
      <Header backgroundOnOff={true} />
      <div className="flex felx-col justify-center py-2">
        <div className="w-[80%] flex flex-col md:flex-row">
          <div className="w-full">
            <div className="w-full overflow-hidden">
              <img
                className="w-full h-[500px] md:h-[700px] object-cover"
                src={item?.img}
                alt="cover"
              />
            </div>
          </div>
          <div className="w-full flex flex-col py-5 mx-2 text-white text-[20px] lg:text-[30px]">
            <p className="text-[30px] lg:text-[50px]">{item?.name}</p>
            <p>{item?.price}</p>
            <p className="line-through text-gray-500">
              <sup>{item?.priceBottom}</sup>
            </p>
            <p className="text-green-500">{item?.stock}</p>
            <p></p>
            <p>{item?.size}</p>
            <div
              className="flex justify-center items-center bg-white cursor-pointer text-black rounded-lg mt-4"
              onClick={() => navigate("/catalog")}
            >
              <p>Назад</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleItem;
