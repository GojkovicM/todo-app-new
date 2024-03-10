import styled from "styled-components";

export const StyledTaskList = styled.div`
  
  
  .task {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: grey;
    margin-bottom: 1rem;
  }

  .checked,
  .in-progress {
    height: 2rem;
  }

  .task-done{
    opacity: 0;
  }
`;
