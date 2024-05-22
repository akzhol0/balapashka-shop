import React, { useEffect } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MyLine from "./UI/MyLine/MyLine";
import MainPageCollection from "./MainPageCollection";

function HomePage() {
  useEffect(() => {
    document.title = "Интернет-магазин детской одежды";
  }, []);

  return (
    <div>
      <Header backgroundOnOff={false} />
      <main className="w-full bg-[#1b1b1b]">
        <div
          className="font-Alumni cursor-default sm:text-4xl text-2xl w-full h-[700px] bg-no-repeat bg-cover flex 
          justify-center flex-col items-center bg-center bg-[url('./imagesBg/bg1.jpeg')]"
        >
          <p className="mb-[20px] bg-[#ED802E] py-[5px] px-[18px] rounded-[12px]">
            ИНТЕРНЕТ-МАГАЗИН ДЕТСКОЙ ОДЕЖДЫ
          </p>
          <p className="bg-[#ED802E] py-[5px] px-[18px] rounded-[12px]">
            BALAPASHKA SHOP
          </p>
        </div>
        <MyLine>ОБРАЗЫ</MyLine>
        <div className="w-full flex justify-center items-center">
          <div className="w-[100%] xl:w-[100%] grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 place-items-center">
            <div className="hidden w-[300px] h-[400px] lg:w-[400px] lg:h-[600px] md:block bg-no-repeat bg-cover bg-center rounded-[30px] hover:scale-[1.05] transition-[0.8s] bg-[url('./imagesBg/img1.jpeg')]"></div>
            <div className="hidden w-[300px] h-[400px] lg:w-[400px] lg:h-[600px] xl:flex bg-no-repeat bg-cover bg-center rounded-[30px] hover:scale-[1.05] transition-[0.8s] bg-[url('./imagesBg/img2.jpeg')]"></div>
            <div className="w-[300px] h-[400px] lg:w-[400px] lg:h-[600px] bg-no-repeat bg-cover bg-center rounded-[30px] hover:scale-[1.05] transition-[0.8s] bg-[url('./imagesBg/img3.jpeg')]"></div>
          </div>
        </div>
        <MyLine>В&nbsp;НАЛИЧИЙ</MyLine>
        <div className="w-full h-[500px] md:h-[800px] bg-no-repeat bg-cover bg-center bg-[url('./imagesBg/bg2.jpeg')]"></div>
        <MyLine>СЛИПИКИ</MyLine>
        <MainPageCollection
          price="2.990KZT"
          sizeFrom="ОТ 56см (0-2 мес)"
          sizeTo="ДО 86см (18 мес)"
          urlName="/catalog"
          firstImage="bg-[url('./imagesBg/ph2.jpeg')]"
          secondImage="bg-[url('./imagesBg/slip4.jpeg')]"
        ></MainPageCollection>
        <MyLine>КОМБИНЕЗОНЫ</MyLine>
        <MainPageCollection
          price="3.490KZT"
          sizeFrom="ОТ 62см (3 мес)"
          sizeTo="ДО 80см (9-12 мес)"
          urlName="/catalog"
          firstImage="bg-[url('./imagesBg/kombik9.jpeg')]"
          secondImage="bg-[url('./imagesBg/kombik10.jpeg')]"
        ></MainPageCollection>
        <MyLine>КОФТЫ</MyLine>
        <MainPageCollection
          price="2.990KZT"
          sizeFrom="ОТ 68см (3-6 мес)"
          sizeTo="ДО 80см (9-12 мес)"
          urlName="/catalog"
          firstImage="bg-[url('./imagesBg/kofta2.jpeg')]"
          secondImage="bg-[url('./imagesBg/kofta4.jpeg')]"
        ></MainPageCollection>
        <div className="w-full h-[1px] bg-[#ED802E] my-[100px]"></div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
