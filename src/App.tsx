import React, { useContext } from "react";
import "./global.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Catalog from "./components/catalog/Catalog";
import UnknownPage from "./components/UnknownPage";
import { ContextOverAll } from "./context/logic";
import SingleItem from "./components/catalog/SingleItem";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { contextData } from "./context/logic";

function App() {
  const { userIn } = useContext(contextData);

  return (
    <ContextOverAll>
      <BrowserRouter>
        <Routes>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/catalog/:category/:id" element={<SingleItem />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="*" element={<UnknownPage />}></Route>
        </Routes>
      </BrowserRouter>
    </ContextOverAll>
  );
}

export default App;
