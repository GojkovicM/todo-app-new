import styled from "styled-components";

export const StyledSignUpForm = styled.div`
  background-color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  padding: 2rem;
  margin-top: 10rem;
  color: aliceblue;
  background-color: rgba(0, 0, 0, 0.75);

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem;
  }

  button {
    padding: 0.5rem 0.9rem;
    border-radius: 2rem;
    border: none;
    background-color: orange;
    color: aliceblue;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
  }

  button:hover {
    background-color: rgb(224, 154, 23);
  }

  input {
    margin: 1rem;
    padding: 0.2rem;
  }

  p {
    margin-top: 1rem;
  }

  label {
    font-size: 1.2rem;
  }

  .username-taken {
    color: red;
    font-size: 1.2rem;
  }

  .username-free {
    color: green;
    font-size: 1.2rem;
  }
`;
