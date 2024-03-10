import styled from "styled-components";

export const StyledUserInfo = styled.div`
    border: 1px solid green;
    padding: 1rem 0.3rem;
    position: relative;

    .make-space{
        margin: 1.3rem 0;
    }

    button{
        position: absolute;
        right: 1rem;
        bottom: 1rem;
        padding: 0.7rem 0.9rem;
        border-radius: 2rem;
        border: none;
        cursor: pointer;
    }

    p{
        font-size: 1.5rem;
    }

    span{
        font-size: 2rem;
        
    }
`