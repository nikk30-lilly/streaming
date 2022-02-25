const express = require("express");
const path = require("path");
const app = express();
const portNumber = 3000;
const sourceDir = "dist";
// app.use("/assets", express.static(path.join(__dirname, "../assets")));
app.use(express.static(sourceDir));

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
