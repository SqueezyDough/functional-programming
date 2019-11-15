const express = require("express");
const router = express.Router();
const home = require("../controllers/home.controller");
const data = require("../controllers/data.controller");

router.get("/", home.index);
router.get("/fetch", data.cleanData);

module.exports = router;