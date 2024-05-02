import React from "react";
import { Link } from "react-router-dom";
import { MainPageCollectionProps } from "../service/types";

function MainPageCollection({
  sizeFrom,
  sizeTo,
  urlName,
  price,
  firstImage,
  secondImage,
}: MainPageCollectionProps) {
  return (
    <div className="w-full h-[400px] lg:h-[600px] xl:h-[700px] flex flex-nowrap justify-between items-center">
      <div
        className="w-[33.3%] hidden lg:block lg:h-[600px] xl:h-[700px] bg-yellow-100 rounded-tr-[20px] 
        rounded-br-[20px] overflow-hidden"
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className={firstImage}
        ></div>
      </div>
      <div className="w-full lg:w-[33.3%] flex flex-col justify-center gap-[20px] lg:gap-[150px] items-center">
        <div
          className="flex flex-col items-center text-2xl md:text-4xl gap-[8px] cursor-default text-white 
          font-Alumni"
        >
          <p>РАЗМЕРЫ</p>
          <p>{sizeFrom}</p>
          <p>{sizeTo}</p>
          <div className="flex items-center gap-[10px]">
            <p className="w-[20px] bg-[#47ff47] h-[20px] rounded-[50%]"></p>
            <p className="text-[#47ff47]">В НАЛИЧИЙ</p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center font-Alumni">
          <Link className="w-full" to={urlName}>
            <div
              className="w-full h-[60px] transition-[0.5s] cursor-pointer flex justify-center text-2xl 
            md:text-4xl text-white hover:bg-[#222222] items-center"
            >
              Перейти в каталог
            </div>
          </Link>
          <div
            className="w-full h-[60px] cursor-default text-white text-3xl md:text-4xl bg-[#e32222] 
            flex justify-center items-center"
          >
            ЦЕНЫ ОТ {price}
          </div>
        </div>
      </div>
      <div
        className="w-full lg:w-[33.3%] h-[400px] lg:h-[600px] xl:h-[700px] bg-yellow-100 rounded-tl-[20px] 
        bg-no-repeat bg-cover bg-center rounded-bl-[20px] overflow-hidden"
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className={secondImage}
        ></div>
      </div>
    </div>
  );
}

export default MainPageCollection;
