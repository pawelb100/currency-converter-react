import styled from "styled-components";

export const CurrencyContainer = styled.div`
    width: 100%;
    margin: 5px;
    display: flex;
    justify-self: center;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax }) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const CurrencyLabel = styled.label`
    display: inline-block;
    flex-shrink: 0;
    flex-basis: 90px;
    margin: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax }) {
        flex-basis: auto;
    }
`;

export const Select = styled.select`
    flex-grow: 1;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.boulder };
    border-radius: 5px;
    margin: 10px;
    background-color: ${({ theme }) => theme.color.white };

    &:hover {
        filter: brightness(110%);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax }) {
        align-self: stretch;
    }
`;

export const Option = styled.option`
    background-color: ${({ theme }) => theme.color.white };
`;