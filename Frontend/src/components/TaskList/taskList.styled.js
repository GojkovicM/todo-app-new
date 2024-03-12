import styled from "styled-components";

export const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column-reverse;
  max-height: 100%;
  overflow-y: auto;

  .task {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: grey;
    margin-bottom: 1rem;
    padding: 0.7rem 1rem;
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
    
  }

  h1 {
    width: 35%;
  }

  .time {
    width: 35%;
    font-size: 1.2rem;
  }

  .checked,
  .in-progress {
    height: 2rem;
  }

  .task-done {
    opacity: 0;
    width: 7%;
  }

  .task-active,
  .delete {
    border: none;
    border-radius: 2rem;
    padding: 0.5rem;
    background-color: white;
    width: 7%;
  }

  .delete:hover {
    background-color: red;
    cursor: pointer;
    color: white;
  }

  .task-active:hover {
    background-color: green;
    cursor: pointer;
    color: white;
  }

  .task-free {
    width: 50%;
    margin: 13rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      height: 25rem;
    }
  }
`;
