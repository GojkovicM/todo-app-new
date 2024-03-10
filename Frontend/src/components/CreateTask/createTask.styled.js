import styled from "styled-components";

export const StyledCreateTask = styled.div`
  border: 1px solid green;
  padding: 1rem 0.3rem;
  margin-top: 1rem;
  max-height: 67%;
  min-height: 67%;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border: 1px solid black;
    width: 60%;
    margin: 1rem auto;
  }

  label {
    margin: 1rem 0;
    font-size: 1.5rem;
  }

  p {
    margin: 1rem 0;
    border: 1px solid black;
    padding: 0.3rem;
    cursor: pointer;
  }

  input {
    padding: 0.2rem;
    width: 80%;
  }

  button {
    padding: 0.7rem 0.9rem;
    border-radius: 2rem;
    border: none;
    cursor: pointer;
    margin-top: 1rem;
  }

  ul {
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: start;
    max-width: 100%;
    flex-wrap: wrap;
    max-height: 27%;
    margin-top: 1rem;
    overflow-y: auto;
  }

  li {
    list-style: none;
    border: 1px solid grey;
    padding: 0.3rem;
    margin: 0.3rem;
    word-wrap: break-word;
    max-width: 95%;
  }
`;
