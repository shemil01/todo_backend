const Schema = require("../model/task");

const addTask = async (req, res) => {
  const { task } = req.body;
  const Task = await Schema.create({
    task,
  });
  res.status(200).json({
    success: true,
    message: "task Added",
  });
};

//view Task
const viewTask = async (req, res) => {
  try {
    const task = await Schema.find();
    if (task.length === 0) {
      res.status(404).json({
        message: "Task is empty",
      });
    } else {
      res.status(200).json(task);
    }
  } catch (error) {
    console.log(error);
  }
};

//Edit Task

const editTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { task } = req.body;
    const tasks = await Schema.findByIdAndUpdate({ _id: id }, { task });
    res.status(200).json({
      messages: "Task updated",
    });
  } catch (error) {
    console.log(error);
  }
};

//Delete task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const DeleteTask = await Schema.findByIdAndDelete({ _id: id });
    if (!DeleteTask) {
      res.status(404).send("Task not found");
    }
    res.status(200).json({
      messages: "Task deleted successfully compleated",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addTask, viewTask, editTask, deleteTask };
