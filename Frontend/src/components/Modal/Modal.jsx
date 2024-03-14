import React, { useContext } from "react";
import { StyledModal } from "./modal.styled";
import { ToDoContext } from "../../store/todo";
import check from "../../assets/checked-modal.svg";
import uncheck from "../../assets/uncheck.svg";

function Modal() {
  const {
    closeModal,
    modalData,
    userData,
    updateItemStatus,
    fetchTaskSolved,
    tasks,
  } = useContext(ToDoContext);

  const updateModal = tasks.find((task) => task.taskID === modalData.taskID);

  return (
    <StyledModal>
      <div className="modal">
        <button onClick={() => closeModal(false)} className="close-modal">
          X
        </button>
        <div className="left">
          <div>
            <p>User: </p>
            <span>{userData.username}</span>
          </div>
          <div>
            <p>Task: </p>
            <span>{modalData.taskName}</span>
          </div>
          <div>
            <p>Date Created: </p>
            <span>{new Date(modalData.createdAt).toLocaleDateString()}</span>
          </div>
          <div>
            <p>Time:</p>
            <span>{new Date(modalData.createdAt).toLocaleTimeString()}</span>
          </div>
        </div>
        <div className="right">
          <div className="tasks">
            <ul>
              {modalData.description.map((task, index) => (
                <div className="task-list">
                  <li className={task.status ? "done" : ""}>{task.name}</li>
                  {modalData.done ? (
                    ""
                  ) : (
                    <img
                      src={task.status ? uncheck : check}
                      alt="check"
                      onClick={() => updateItemStatus(modalData.taskID, index)}
                    />
                  )}
                </div>
              ))}
            </ul>
          </div>
          <div className="status">
            <p>
              Status: {modalData.done ? <span>Done</span> : <span>Active</span>}
            </p>

            {modalData.description.some((item) => item.status === false) ? (
              ""
            ) : modalData.done ? (
              ""
            ) : (
              <button
                className="done-button"
                onClick={() => fetchTaskSolved(modalData.taskID, updateModal)}
              >
                Done
              </button>
            )}
          </div>
        </div>
      </div>
    </StyledModal>
  );
}

export default Modal;
