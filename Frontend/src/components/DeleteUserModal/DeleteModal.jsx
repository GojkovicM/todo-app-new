import React, { useContext } from "react";
import { StyledDeleteModal } from "./deletemodal.styled";
import { ToDoContext } from "../../store/todo";
import { useNavigate } from "react-router-dom";

function DeleteModal() {
  const { toggleUserModal, fetchUserDelete, userData, clearUserData } =
    useContext(ToDoContext);

  const navigate = useNavigate();

  const handleDeleteUser = () => {
    toggleUserModal(false);
    fetchUserDelete(userData.userID);
    clearUserData();
    navigate("/");
  };

  return (
    <StyledDeleteModal>
      <div className="modal">
        <p>
          Are you sure you want to delete your account? All tasks will be
          lost!
        </p>
        <div className="buttons">
          <button onClick={handleDeleteUser} className="yes">
            Yes
          </button>
          <button onClick={() => toggleUserModal(false)} className="no">
            No
          </button>
        </div>
      </div>
    </StyledDeleteModal>
  );
}

export default DeleteModal;
