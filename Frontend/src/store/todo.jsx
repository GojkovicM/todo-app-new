import { createContext, useEffect, useState } from "react";
import { createTask, deleteTask, getTask, taskSolved, userLogin, userRegister } from "../api/service";

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
  deleteTaskItems: () => {},
  clearTaskItems: () => {},
  fetchTaskSolved: () => {},
});

const ToDoHandler = ({ children }) => {
  const [toggleForm, setToggleForm] = useState(false);
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState();
  const [taskItems, setTaskItems] = useState([])
  const [tasks, setTasks] = useState([])
  console.log(tasks);
  
 
 

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
        fetchGetTask(data)
        
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
    try{
      await createTask(task);
      fetchGetTask(userData)
    }catch(error){
      console.log(error);
    }
  }

  const fetchGetTask = async (userData) => {
    try{
      const res = await getTask(userData.userID)
      const data = await res.json();
      setTasks(data)
      
    }catch(error){
      console.log(error);
    }
  }


  const fetchDeleteTask = async (id) => {
    try{
         await deleteTask(id)
         fetchGetTask(userData)
    }catch(error) {
      console.log(error);
    }
  }

  const fetchTaskSolved = async (id, index) => {
    try{
      const finished = tasks[index];
      finished.done = true;

      await taskSolved(id, finished);
           
      
    }catch(error) {
      console.log(error);
    }
   
  }

  const handleTaskItems = (item) => {
    if (item) {
      const newItem = { name: item, status: false };
      setTaskItems((prevItems) => [...prevItems, newItem]);
    }
  };

  const deleteTaskItems = (item) => {
    setTaskItems((prevItems) => prevItems.filter((task) => task !== item));
  };

useEffect(() => {
  const getUser = localStorage.getItem("username")
  if(getUser !== null){
    fetchUserLogin({username: getUser})
    
  }
  
  
}, [])

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
        deleteTaskItems,
        clearTaskItems: setTaskItems,
        fetchTaskSolved,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export { ToDoHandler };
