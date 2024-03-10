import React from "react";
import { StyledHomePage } from "./homepage.styled";
import Footer from "../../components/Footer/Footer";
import UserInfo from "../../components/UserInfo/UserInfo";
import CreateTask from "../../components/CreateTask/CreateTask";
import TaskList from "../../components/TaskList/TaskList"

function HomePage() {
    return ( 
        <StyledHomePage>
            <div className="main">
                <div className="left">
                    <UserInfo/>
                    <CreateTask/>
                </div>
                <div className="right">
                    <TaskList/>
                </div>
            </div>

            <Footer/>
        </StyledHomePage>
     );
}

export default HomePage;