const stages = require("express").Router();
const db = require("../models");
const { Stage } = db;
const { Op } = require("sequelize");

stages.get("/", async (req, res) => {
  try {
    const foundStages = await Stage.findAll({
      where: {
        stage_name: {
          [Op.like]: `%${req.query.stage_name ? req.query.stage_name : ""}%`,
        },
      },
    });
    res.status(201).json(foundStages);
  } catch (error) {
    res.status(500).json(error);
  }
});

stages.get("/:id", async (req, res) => {
  try {
    const foundStage = await Stage.findOne({
      where: { stage_id: req.params.id },
    });
    res.status(201).json(foundStage);
  } catch (error) {
    res.status(500).json(error);
  }
});

stages.post("/", async (req, res) => {
  try {
    const newStage = await Stage.create(req.body);
    res.status(201).json(newStage);
  } catch (err) {
    res.status(500).json(err);
  }
});

stages.put("/:id", async (req, res) => {
  try {
    const updateStages = await Stage.update(req.body, {
      where: {
        stage_id: req.params.id,
      },
    });
    res.status(201).json({
      message: `Successfully updated ${updateStages} stage(s)`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

stages.delete("/:id", async (req, res) => {
  try {
    const deletedStages = await Stage.destroy({
      where: {
        stage_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully deleted ${deletedStages} stage(s)`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = stages;
