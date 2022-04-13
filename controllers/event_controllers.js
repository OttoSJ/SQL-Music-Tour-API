const events = require("express").Router();
const db = require("../models");
const { Event } = db;
const { Op } = require("sequelize");

events.get("/index", async (req, res) => {
  //localhost:3000/events/index?name=<eventname>
  try {
    const foundEvents = await Event.findAll({
      order: [["available_start_time", "ASC"]],
      where: {
        name: { [Op.like]: `%${req.query.name ? req.query.name : ""}%` },
      },
    });
    res.status(200).json(foundEvents);
  } catch (error) {
    res.status(500).json(error);
  }
});

events.get("/show", async (req, res) => {
  try {
    const foundEvents = await Event.findAll();
    res.status(200).json(foundEvents);
  } catch (error) {
    res.status(500).json(error);
  }
});

events.get("/:id", async (req, res) => {
  try {
    const foundEvent = await Event.findOne({
      where: { event_id: req.params.id },
    });
    res.status(200).json(foundEvent);
  } catch (error) {
    res.status(500).json(error);
  }
});

events.post("/", async (req, res) => {
  try {
    const newEvents = await Event.create(req.body);
    res.status(201).json(newEvents);
  } catch (err) {
    res.status(500).json(err);
  }
});

events.put("/:id", async (req, res) => {
  try {
    const updateEvents = await Event.update(req.body, {
      where: {
        event_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully updated ${updateEvents} events(s)`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

events.delete("/:id", async (req, res) => {
  try {
    const deletedEvents = await Event.destroy({
      where: {
        event_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully deleted ${deletedEvents} events(s)`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = events;
