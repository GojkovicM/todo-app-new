import React, { useContext } from "react";
import { StyledTaskList } from "../TaskList/taskList.styled";
import { ToDoContext } from "../../store/todo";
import checked from "../../assets/checked.svg";
import inProgress from "../../assets/in-progress.svg";

function TaskList() {
  const { tasks, fetchDeleteTask, fetchTaskSolved } = useContext(ToDoContext);

  return (
    <StyledTaskList>
      {tasks.map((task, index) => (
        <div className="task">
          <h1>{task.taskName}</h1>
          <p>{task.createdAt}</p>
          <button
            onClick={() => {
              fetchTaskSolved(task.taskID, index);
            }}
            className={task.done ? "task-done" : "task-active"}
          >
            Done
          </button>
          <button onClick={() => fetchDeleteTask(task.taskID)}>Delete</button>
          {task.done ? (
              <img src={checked} className="checked" alt="done" />
            ) : (
              <img src={inProgress} className="in-progress" alt="in progress" />
            )}
        </div>
      ))}
    </StyledTaskList>
  );
}

export default TaskList;
