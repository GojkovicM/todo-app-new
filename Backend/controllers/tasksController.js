const Task = require('../models/task');                                  //Import the Task model, which represents the schema and interacts with the database for task-related operations.
                                              

exports.getTasksByUserId = async (req, res) => {
  const userId = req.params.userId;

  try {
    const tasks = await Task.findAll({ where: { userID: userId } });

    return res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.createTask = async (req, res) => {
  const { taskName, description, userID } = req.body;

  try {
    const newTask = await Task.create({ taskName, description, userID });

    return res.status(201).json(newTask);
  } catch (error) {
    console.error("Error creating task:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};



exports.updateTask = async (req, res) => {
  const taskId = req.params.taskId;
  const { taskName, done, description } = req.body;

  try {
    const task = await Task.findByPk(taskId);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    await task.update({ taskName, done, description });

    return res.status(200).json(task);
  } catch (error) {
    console.error("Error updating task:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteTask = async (req, res) => {
  const taskId = req.params.taskId;

  try {
    const task = await Task.findByPk(taskId);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    await task.destroy();

    return res.status(204).send();
  } catch (error) {
    console.error("Error deleting task:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};