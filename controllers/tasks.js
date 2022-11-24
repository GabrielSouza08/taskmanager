const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("all tasks");
};
const createTask = async (req, res) => {
  const task = await Task.create(req.body);

  res.status(201).json({ task });
};
const getTask = (req, res) => {
  res.send("get single task");
};
const updateTask = (req, res) => {
  res.send("update tasks");
};
const deleteTask = (req, res) => {
  res.send("delete tasks");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
