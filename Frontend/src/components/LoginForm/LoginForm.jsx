import React, { useContext, useRef, useEffect } from "react";
import { StyledLoginForm } from "./loginform.styled";
import { ToDoContext } from "../../store/todo";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const usernameInputRef = useRef();

  const { toggleForms, fetchUserLogin, message, clearMessage, userData } =
    useContext(ToDoContext);

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    const username = {
      username: usernameInputRef.current.value,
    };

    fetchUserLogin(username);

    usernameInputRef.current.value = "";
    clearMessage("");
  };

  const signUpHandler = () => {
    toggleForms(true);
    clearMessage("");
  };

  useEffect(() => {
    if (userData) {
      navigate("/HomePage");
    }
  }, [userData]);

  return (
    <StyledLoginForm>
      <h1>Welcome to ToDoApp</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          ref={usernameInputRef}
          required
        />
        <button>Login</button>
        <p className="message">{message}</p>
      </form>
      <p onClick={signUpHandler} className="sign-up">
        SignUp
      </p>
    </StyledLoginForm>
  );
}

export default LoginForm;
