import React from "react";
import "./global.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Catalog from "./components/Catalog";
import UnknownPage from "./components/UnknownPage";
import { ContextOverAll } from "./context";

function App() {
  return (
    <ContextOverAll>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="*" element={<UnknownPage />}></Route>
        </Routes>
      </BrowserRouter>
    </ContextOverAll>
  );
}

export default App;
