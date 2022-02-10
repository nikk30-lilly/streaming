import React from "react";
import { render } from "react-dom";
import "../css/normalize.css";
import "../css/superslides.css";
import "../css/jquery.selectbox.css";
import "../css/jquery.jscrollpane.css";
import "../css/jquery.fancybox.css";
import "../css/style3860.css";
import AppRoot from "./components/AppRoot";

import $ from "jquery";

window.jQuery = $;
window.$ = $;
const rootEl = document.getElementById("root");

render(<AppRoot />, rootEl);
