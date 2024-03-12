import React, { useContext, useEffect } from "react";
import { StyledUserInfo } from "./userinfo.styled";
import {useNavigate} from "react-router-dom"
import { ToDoContext } from "../../store/todo";

function UserInfo() {

  const {userData, clearUserData, } = useContext(ToDoContext)  
    
  const navigate = useNavigate();

  const handleChangeUser = () => {
     clearUserData();
     localStorage.removeItem("username");
     navigate("/")
     
  }


    if(userData){
    return ( 
        <StyledUserInfo>
            <h1>User Info: </h1>
            <p className="make-space">name: <span>{userData.name}</span> </p>
            <p>surname: <span>{userData.surname}</span></p>
            <p className="make-space">username: <span>{userData.username}</span></p>
            <button onClick={handleChangeUser}>Change User</button>
        </StyledUserInfo>
     );
}
}

export default UserInfo;