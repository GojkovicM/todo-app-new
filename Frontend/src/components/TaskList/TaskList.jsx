import React, { useContext } from "react";
import { StyledTaskList } from "../TaskList/taskList.styled";
import { ToDoContext } from "../../store/todo";
import checked from "../../assets/checked.svg";
import inProgress from "../../assets/in-progress.svg";
import noTasks from "../../assets/no-task.png"

function TaskList() {
  const { tasks, fetchDeleteTask, fetchTaskSolved, modalHandler} =
    useContext(ToDoContext);

    const sortedTasks = tasks.slice()
    sortedTasks.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

   
    

    if(tasks.length !== 0) {
  return (
    <StyledTaskList>
      {sortedTasks.map((task, index) => (
        <div className="task"  onClick={() => modalHandler(task)}>
          <h1>{task.taskName}</h1>
          <div className="time">
          <p>{new Date(task.createdAt).toLocaleDateString()}</p>
          <p>{new Date(task.createdAt).toLocaleTimeString()}</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              fetchTaskSolved(task.taskID, task);
            }}
            className={task.done ? "task-done" : "task-active"}
          >
            Done
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              fetchDeleteTask(task.taskID);
            }}
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
    </StyledTaskList>
  )
  }else{
    return (
      <StyledTaskList>
         <div className="task-free">
            
            <img src={noTasks} alt="no tasks" />
         </div>
      </StyledTaskList>
    )
  };
}

export default TaskList;
