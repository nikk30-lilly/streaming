import React from "react";
import { Route, Routes } from "react-router-dom";
import { IRoute } from "./Navigation/Routes";
import { Error } from "../pages/Error/Error";

const AppRoutes: React.FC<{ routes: IRoute[] }> = ({ routes }) => (
  <Routes>
    <Route path="/" element={Error} />
    {/*{routes.map((route: IRoute) => {*/}
    {/*  if (!route.nested) {*/}
    {/*    return (*/}
    {/*      <Route path={route.path} key={route.path} element={route.component} />*/}
    {/*    );*/}
    {/*  }*/}
    {/*})}*/}
  </Routes>
);

export default AppRoutes;
