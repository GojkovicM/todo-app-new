import styled from "styled-components";

export const StyledDeleteModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
   
  .modal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    padding: 2rem;
    border-radius: 5px;
    background-color: rgb(85, 85, 85);
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
    width: 45%;
    height: 20%;
    position: relative;
    color: white;
  }

  .buttons{
    display: flex;
    justify-content: space-between;
  }

  .yes, .no{
    padding: 1rem 2rem;
    border-radius: 2rem;
    border: none;
    cursor: pointer;
    
  }

  p{
    font-size: 1.5rem;
  }
`;
