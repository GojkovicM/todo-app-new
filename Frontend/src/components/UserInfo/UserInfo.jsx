import React, { useContext, useEffect } from "react";
import { StyledUserInfo } from "./userinfo.styled";
import { useNavigate } from "react-router-dom";
import { ToDoContext } from "../../store/todo";
import { useParams } from "react-router-dom";

function UserInfo() {
  const { userData, clearUserData, toggleUserModal, fetchUserLogin } =
    useContext(ToDoContext);

  const { username } = useParams();

  const navigate = useNavigate();

  const handleChangeUser = () => {
    clearUserData();
    localStorage.removeItem("username");
    navigate("/");
  };

  const user = {
    username: username,
  };

  useEffect(() => {
    if (username) {
      fetchUserLogin(user);
    }
  }, [username]);

  return (
    <StyledUserInfo>
      <h1>User Info: </h1>
      <p className="make-space">
        name: <span>{userData?.name}</span>{" "}
      </p>
      <p>
        surname: <span>{userData?.surname}</span>
      </p>
      <p className="make-space">
        username: <span>{userData?.username}</span>
      </p>
      <button onClick={handleChangeUser} className="change">
        Change User
      </button>
      <button onClick={() => toggleUserModal(true)} className="delete">
        Delete User
      </button>
    </StyledUserInfo>
  );
}

export default UserInfo;
