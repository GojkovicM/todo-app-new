import React, { useContext } from "react";
import { StyledHomePage } from "./homepage.styled";
import Footer from "../../components/Footer/Footer";
import UserInfo from "../../components/UserInfo/UserInfo";
import CreateTask from "../../components/CreateTask/CreateTask";
import TaskList from "../../components/TaskList/TaskList";
import { ToDoContext } from "../../store/todo";
import Modal from "../../components/Modal/Modal";

function HomePage() {
  const { toggleModal } = useContext(ToDoContext);

  return (
    <StyledHomePage>
      {toggleModal && <Modal />}
      <div className="main">
        <div className="left-side">
          <UserInfo />
          <CreateTask />
        </div>
        <div className="right-side">
          <TaskList />
        </div>
      </div>

      <Footer />
    </StyledHomePage>
  );
}

export default HomePage;
