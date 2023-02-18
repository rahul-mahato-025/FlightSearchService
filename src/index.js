const express = require("express");
const bodyParser = require("body-parser");

const db = require("./models");
const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routers");

const { Airport, City } = require("./models");
const { Sequelize } = require("sequelize");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server started on port ${PORT}`);
    if (process.env.SYNC_DB) {
      db.sequelize.sync({ alter: true });
    }
  });
};

setupAndStartServer();
