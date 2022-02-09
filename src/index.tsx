import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoot from "./components/AppRoot";

import $ from "jquery";

window.jQuery = $;
window.$ = $;
const rootEl = document.getElementById("root");

render(<AppRoot />, rootEl);
