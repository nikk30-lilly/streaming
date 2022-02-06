import React from "react";
import { hot } from "react-hot-loader";

const reactLogo = require("./../assets/img/react_logo.svg");
import "./../assets/scss/App.scss";
import AppRoot from "./AppRoot";

declare let module: Record<string, unknown>;

export default hot(module)(AppRoot);
