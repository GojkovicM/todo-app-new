import styled from "styled-components";

export const StyledUserInfo = styled.div`
  padding: 1rem 0.3rem;
  position: relative;

  .make-space {
    margin: 1.3rem 0;
  }

  .change {
    position: absolute;
    right: 1rem;
    top: 1rem;
    padding: 0.7rem 0.9rem;
    border-radius: 2rem;
    border: none;
    cursor: pointer;
    background-color: orange;
    font-weight: 600;
  }

  .delete{
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    padding: 0.7rem 0.9rem;
    border-radius: 2rem;
    border: none;
    cursor: pointer;
    background-color: red;
    color: white;
    font-weight: 600;
   
  }

  .delete:hover{
    background-color: rgb(230, 11, 11);
  }

  button:hover {
    background-color: rgb(224, 154, 23);
  }

  p {
    font-size: 1.5rem;
    border-bottom: 3px solid orange;
    width: 60%;
    font-weight: 550;
  }

  span {
    font-size: 2rem;
    color: black;
    font-weight: 800;
  }
`;
