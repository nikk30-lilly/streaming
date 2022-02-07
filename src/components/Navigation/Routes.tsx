import React from "react";
import { Home } from "../../pages/Home/Home";
const HomePage: React.FC = () => {
  return <h1 style={{ height: "200px", background: "blue" }}>Teams</h1>;
};
export interface IRoute {
  path: string;
  sidebarName?: string;
  component: React.FC;
  nested?: IRoute[];
  open?: boolean;
}

export const Routes: Array<IRoute> = [
  {
    path: "/",
    sidebarName: "Home",
    component: Home,
    open: false,
  },
  {
    path: "/about",
    sidebarName: "About",
    component: HomePage,
    open: false,
  },
  {
    path: "/blog",
    sidebarName: "Blog",
    component: HomePage,
    open: false,
  },
  {
    path: "/careers",
    sidebarName: "Career",
    component: HomePage,
    open: false,
  },

  {
    path: "/contacts",
    sidebarName: "contacts",
    component: HomePage,
    open: false,
  },
];

export default Routes;
