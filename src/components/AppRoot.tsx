import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AppRoutes from "./AppRoutes";
import { Routes } from "./Navigation";
import SecondaryFooter from "./SecondaryFooter";

const AppRoot: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes routes={Routes} />
      <SecondaryFooter />
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoot;
