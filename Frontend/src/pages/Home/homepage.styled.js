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
    height: 97%;
  }

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
