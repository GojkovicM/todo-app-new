import { createContext, useEffect, useState } from "react";
import {
  createTask,
  deleteTask,
  getTask,
  taskSolved,
  userLogin,
  userRegister,
} from "../api/service";

export const ToDoContext = createContext({
  toggleForms: () => {},
  toggleForm: false,
  fetchUserLogin: () => {},
  message: "",
  fetchUserRegister: () => {},
  clearMessage: () => {},
  userData: undefined,
  clearUserData: () => {},
  fetchCreateTask: () => {},
  handleTaskItems: () => {},
  taskItems: [],
  tasks: [],
  fetchDeleteTask: () => {},
  clearTaskItems: () => {},
  fetchTaskSolved: () => {},
  modalData: {},
  toggleModal: false,
  closeModal: () => {},
  updateItemStatus: () => {},
});

const ToDoHandler = ({ children }) => {
  const [toggleForm, setToggleForm] = useState(false);
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [modalData, setModalData] = useState();
  const [toggleModal, setToggleModal] = useState(false);

 

  const fetchUserLogin = async (username) => {
    try {
      const user = await userLogin(username);

      if (!user.ok) {
        const data = await user.json();

        setMessage(data.error);
      } else {
        const data = await user.json();
        setUserData(data);
        localStorage.setItem("username", data.username);
        fetchGetTask(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUserRegister = async (data) => {
    try {
      const singleUser = await userRegister(data);
      if (!singleUser.ok) {
        const data = await singleUser.json();
        setMessage(data.error);
      } else {
        const data = await singleUser.json();

        setMessage(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCreateTask = async (task) => {
    try {
      await createTask(task);
      fetchGetTask(userData);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchGetTask = async (userData) => {
    try {
      const res = await getTask(userData.userID);
      const data = await res.json();

      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      fetchGetTask(userData);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTaskSolved = async (id, task) => {
    try {
      const finished = task;
      finished.done = true;

      await taskSolved(id, finished);
      fetchGetTask(userData);

      const updatedItems = tasks.find((task) => task.taskID === id);

      setModalData(updatedItems);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchItemSolved = async (id, updatedTaskItem) => {
    try {
      await taskSolved(id, updatedTaskItem);
      fetchGetTask(userData);

      const updatedItems = tasks.find((task) => task.taskID === id);
      setModalData(updatedItems);
    } catch (error) {
      console.log(error);
    }
  };

  const updateItemStatus = (id, itemIndex) => {
    const updatedTaskItem = tasks.find((task) => task.taskID === id);
    updatedTaskItem.description[itemIndex].status =
      !updatedTaskItem.description[itemIndex].status;

    if (updatedTaskItem.description[itemIndex].status) {
      const itemSolved = updatedTaskItem.description[itemIndex];
      updatedTaskItem.description.splice(itemIndex, 1);
      updatedTaskItem.description.push(itemSolved);
    }

    fetchItemSolved(id, updatedTaskItem);
  };

  const handleTaskItems = (item) => {
    if (item) {
      const newItem = { name: item, status: false };
      setTaskItems((prevItems) => [...prevItems, newItem]);
    }
  };

  const modalHandler = (data) => {
    setModalData(data);
    setToggleModal(true);
  };

  useEffect(() => {
    const getUser = localStorage.getItem("username");
    if (getUser !== null) {
      fetchUserLogin({ username: getUser });
    }
  }, []);

  return (
    <ToDoContext.Provider
      value={{
        toggleForms: setToggleForm,
        toggleForm,
        fetchUserLogin,
        message,
        fetchUserRegister,
        clearMessage: setMessage,
        userData,
        clearUserData: setUserData,
        fetchCreateTask,
        handleTaskItems,
        taskItems,
        tasks,
        fetchDeleteTask,
        clearTaskItems: setTaskItems,
        fetchTaskSolved,
        modalData,
        toggleModal,
        closeModal: setToggleModal,
        modalHandler,
        updateItemStatus,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export { ToDoHandler };
