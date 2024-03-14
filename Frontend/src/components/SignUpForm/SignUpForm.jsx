import React, { useContext, useRef } from "react";
import { StyledSignUpForm } from "./signupform.styled";
import { ToDoContext } from "../../store/todo";

function SignUpForm() {
  const nameInputRef = useRef();
  const surnameInputRef = useRef();
  const usernameInputRef = useRef();

  const { toggleForms, fetchUserRegister, message, clearMessage } =
    useContext(ToDoContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      name: nameInputRef.current.value,
      surname: surnameInputRef.current.value,
      username: usernameInputRef.current.value,
    };

    fetchUserRegister(data);

    nameInputRef.current.value = "";
    surnameInputRef.current.value = "";
    usernameInputRef.current.value = "";
  };

  const signInHandler = () => {
    toggleForms(false);
    clearMessage("");
  };

  return (
    <StyledSignUpForm>
      <h1>Welcome to ToDoApp</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" ref={nameInputRef} required />
        <label htmlFor="surname">Surname:</label>
        <input
          type="text"
          name="surname"
          id="surname"
          ref={surnameInputRef}
          required
        />
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          ref={usernameInputRef}
          required
        />
        <button>Create User</button>

        <p
          className={
            message === "Username already exists"
              ? "username-taken"
              : "username-free"
          }
        >
          {message}
        </p>
      </form>
      <p onClick={signInHandler}>SignIn</p>
    </StyledSignUpForm>
  );
}

export default SignUpForm;
