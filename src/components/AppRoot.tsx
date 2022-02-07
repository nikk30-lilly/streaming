import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AppRoutes from "./AppRoutes";
import { Routes } from "./Navigation";

const AppRoot: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes routes={Routes} />
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoot;
