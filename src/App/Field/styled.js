import styled from "styled-components";

export const FieldContainer = styled.div`
    width: 100%;
    margin: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax }) {
        flex-direction: column;
        align-items: flex-start;
    }

`;

export const FieldLabel = styled.label`
    display: inline-block;
    flex-shrink: 0;
    flex-basis: 90px;
    margin: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax }) {
        flex-basis: auto;
    }
`;

export const Input = styled.input`
    flex-grow: 1;
    margin: 10px;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.boulder };
    border-radius: 5px;

    &:hover {
        filter: brightness(110%);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax }) {
        align-self: stretch;
    }
`;



