import styled from "styled-components";

export const ButtonStyled = styled.button`
    margin: 5px;
    background-color: ${({ theme }) => theme.color.greenSmoke };
    font-size: 20px;
    border-radius: 10px;
    padding: 15px;
    color: ${({ theme }) => theme.color.black };

    &:hover {
        filter: brightness(110%);
    }

`;