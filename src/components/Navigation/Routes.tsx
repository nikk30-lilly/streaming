import React from "react";
import { Home } from "../../pages/Home/Home";
import { News } from "../../pages/News";
import { FilmFestival } from "../../pages/FilmFestival";
import { PressKit } from "../../pages/PressKit";
import { About } from "../../pages/About";
import { Contact } from "../../pages/Contact";
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
    component: About,
    open: false,
  },
  {
    path: "/film-festival",
    sidebarName: "Film Festival",
    component: FilmFestival,
    open: false,
  },
  {
    path: "/press-kit",
    sidebarName: "Press kit",
    component: PressKit,
    open: false,
  },

  {
    path: "/contact-us",
    sidebarName: "contact",
    component: Contact,
    open: false,
  },
  {
    path: "/news",
    sidebarName: "News",
    component: News,
    open: false,
  },
];

export default Routes;
