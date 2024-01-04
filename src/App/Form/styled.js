import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FormLegend = styled.legend`
    background-color: ${({ theme }) => theme.color.greenSmoke };
    border-radius: 5px;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.black };
`;

export const FormFieldset = styled.fieldset`
    border: 1px solid ${({ theme }) => theme.color.boulder };
    border-radius: 10px;
    box-shadow: 0px 0px 4px 1px ${({ theme }) => theme.color.black };
    background-color: ${({ theme }) => theme.color.white }; 
`;