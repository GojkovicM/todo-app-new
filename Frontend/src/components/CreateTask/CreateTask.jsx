import React, { useContext } from "react";
import { StyledCreateTask } from "./createTask.styled";
import { useRef } from "react";
import { ToDoContext } from "../../store/todo";

function CreateTask() {
  const taskInputref = useRef();
  const descriptionInputRef = useRef();

  const {
    userData,
    fetchCreateTask,
    handleTaskItems,
    taskItems,
    
    clearTaskItems,
  } = useContext(ToDoContext);

  const createTaskHandler = (event) => {
    event.preventDefault();

    const data = {
      taskName: taskInputref.current.value,
      description: taskItems,
      userID: userData.userID,
    };

    fetchCreateTask(data);

    taskInputref.current.value = "";
    clearTaskItems([]);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleTaskItems(descriptionInputRef.current.value);
      descriptionInputRef.current.value = "";
    }
  };

  const handleButtonClick = () => {
    handleTaskItems(descriptionInputRef.current.value);
    descriptionInputRef.current.value = "";
  };

  const deleteTaskItems = (item) => {
    clearTaskItems((prevItems) => prevItems.filter((task) => task !== item));
  };

  return (
    <StyledCreateTask>
      <h1>Create Task:</h1>
      <form onSubmit={createTaskHandler}>
        <label htmlFor="taskName">Task</label>
        <input type="text" id="taskName" ref={taskInputref} required />
        <label htmlFor="description">Description</label>

        <input
          type="text"
          ref={descriptionInputRef}
          onKeyPress={handleKeyPress}
        />
        <p onClick={handleButtonClick} className="items">
          Add Item
        </p>

        <button>Create Task</button>
      </form>
      <ul>
        {taskItems.map((item) => (
          <li onClick={() => deleteTaskItems(item)}>{item.name}</li>
        ))}
      </ul>
    </StyledCreateTask>
  );
}

export default CreateTask;
