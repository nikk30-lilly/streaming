import React from "react";
import { Route, Routes } from "react-router-dom";
import { IRoute } from "./Navigation/Routes";

const AppRoutes: React.FC<{ routes: IRoute[] }> = ({ routes }) => (
  <Routes>
    {routes.map((route: IRoute) => {
      return (
        <Route
          path={route.path}
          key={route.path}
          element={<route.component />}
        />
      );
    })}
  </Routes>
);

export default AppRoutes;
