const express = require("express");
const path = require("path");
const router = express.Router();

const rootDir = require("../utils/path");

router.get("/", (_req, res) => {
  res.status(200).sendFile(path.join(rootDir, "views", "users", "index.html"))
})

module.exports = router;