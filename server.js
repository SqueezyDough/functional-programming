"use strict";

const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const routes = require("./routes/index.js");

const app = express();
const port = process.env.PORT || 3000;

require("dotenv").config();

app
	.use("/lib", express.static(path.join(__dirname, "lib")))
    .set("view engine", "hbs")
	.engine("hbs", exphbs({
		defaultLayout: "main",
		partialsDir: __dirname + "/views/partials",
		extname: ".hbs",}))
	.use("/", routes)
	.use("/fetch", routes)
	.listen(port, () => console.log(`App listening on port ${port}!`));