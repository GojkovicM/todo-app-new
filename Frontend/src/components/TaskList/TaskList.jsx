import React, { useContext, useState, useEffect } from "react";
import { StyledTaskList } from "../TaskList/taskList.styled";
import { ToDoContext } from "../../store/todo";
import checked from "../../assets/checked.svg";
import inProgress from "../../assets/in-progress.svg";
import noTasks from "../../assets/no-task.png";
import { Pagination } from "antd";

function TaskList() {
  const { tasks, fetchDeleteTask, fetchTaskSolved, modalHandler } =
    useContext(ToDoContext);

  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 9;

  const sortedTasks = tasks.slice();
  sortedTasks.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = sortedTasks.slice(indexOfFirstTask, indexOfLastTask);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const lastPage = Math.ceil(tasks.length / tasksPerPage);
    if (tasks.length > 0 && currentPage > lastPage) {
      setCurrentPage(lastPage);
    }
    if (tasks.length > 0 && lastPage > currentPage) {
      setCurrentPage(lastPage);
    }
    
  }, [tasks.length]);



  const doneButtonHandler = (e, id, task) => {
    e.stopPropagation();
    fetchTaskSolved(id, task);
  }

  const deleteButtonHandler = (e, id) => {
    e.stopPropagation();
    fetchDeleteTask(id)
  }

  if (tasks.length !== 0) {
    return (
      <StyledTaskList>
        {currentTasks.map((task) => (
          <div
            className="task"
            onClick={() => modalHandler(task)}
            key={task.taskID}
          >
            <h1>{task.taskName}</h1>
            <div className="time">
              <p>{new Date(task.createdAt).toLocaleDateString()}</p>
              <p>{new Date(task.createdAt).toLocaleTimeString()}</p>
            </div>
            <button
              onClick={(e) => doneButtonHandler(e, task.taskID, task)}
              className={task.done ? "task-done" : "task-active"}
            >
              Done
            </button>
            <button
              onClick={(e) => deleteButtonHandler(e, task.taskID)}
              className="delete"
            >
              Delete
            </button>
            {task.done ? (
              <img src={checked} className="checked" alt="done" />
            ) : (
              <img src={inProgress} className="in-progress" alt="in progress" />
            )}
          </div>
        ))}
        <Pagination
          className="pagination"
          current={currentPage}
          total={tasks.length}
          pageSize={tasksPerPage}
          onChange={paginate}
        />
      </StyledTaskList>
    );
  } else {
    return (
      <StyledTaskList>
        <div className="task-free">
          <img src={noTasks} alt="no tasks" />
        </div>
      </StyledTaskList>
    );
  }
}

export default TaskList;
