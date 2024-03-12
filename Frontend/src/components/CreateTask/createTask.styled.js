import styled from "styled-components";

export const StyledCreateTask = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  padding: 1rem 0.3rem;
  margin-top: 1rem;
  max-height: 67%;
  min-height: 67%;
  color: white;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;

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
    padding: 0.4rem 0.7rem;
    cursor: pointer;
    background-color: rgba(35, 35, 35, 0.75);
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
    background-color: orange;
    color: aliceblue;
    font-size: 1rem;
    font-weight: 550;
  }

  button:hover {
    background-color: rgb(224, 154, 23);
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
    border: 1px solid orange;
    padding: 0.3rem;
    margin: 0.3rem;
    word-wrap: break-word;
    max-width: 95%;
    cursor: pointer;
    font-size: 1.1rem;
  }

  li:hover {
    background-color: grey;
  }

  //scroll

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #2c2c2c;
  }
`;
