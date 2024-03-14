import styled from "styled-components";

export const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .main {
    display: flex;
    flex-direction: row;
    height: calc(100vh - 3rem);
  }

  .left-side {
    width: 35%;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    border-right: 0.5rem solid black;
  }

  .right-side {
    width: 65%;
    padding: 1.5rem;
    position: relative;
  }

`
