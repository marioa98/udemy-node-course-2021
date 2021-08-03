const express = require("express");
const path = require("path");
const app = express();

const rootDir = require("./utils/path");
const usersController = require("./controllers/users");

app.use("/users", usersController)
app.get("/", (_req, res) => {
  res.status(200).sendFile(path.join(rootDir, "views", "index.html"))
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});
