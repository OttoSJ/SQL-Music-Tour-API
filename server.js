// DEPENDENCIES
const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");

// CONFIGURATION / MIDDLEWARE
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROOT
const bandsController = require("./controllers/bands_controllers");
const stageController = require("./controllers/stage_controllers");
const eventControllers = require("./controllers/event_controllers");

app.use("/bands", bandsController);
app.use("/stages", stageController);
app.use("/events", eventControllers);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Tour API",
  });
});

// LISTEN
app.listen(process.env.PORT, () => {
  console.log(`🎸 Rockin' on port: ${process.env.PORT}`);
});
