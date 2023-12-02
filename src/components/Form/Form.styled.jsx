import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
    max-width: 480px;
    padding: 36px 12px;
    display: flex;
    flex-direction: column;
    background-color: var(--secondaryBgColor);

    @media screen and (min-width: 768px) {
        max-width: 100%;
        padding: 36px 24px;
    }

    @media screen and (min-width: 1280px) {
        padding: 48px;
    }
`;

const text = `
  font-family: Fira Sans;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
  color: var(--textColor);
`;

export const Label = styled.label`
    ${text}
    font-size: 16px;
    margin-bottom: 8px;

    @media screen and (min-width: 1280px) {
        margin-bottom: 12px;
    }
`;

export const StyledField = styled(Field)`
    ${text}
    padding-bottom: 8px;
    border: none;
    outline: none;
    background-color: transparent;
    border-bottom: 1px solid ${({ error }) => 
    error
   ? 'var(--errorColor)'
   : 'var(--lightGreen)'};

   margin-bottom: ${({  error  }) => 
  error
  ? '8px'
  : '28px'};

    &::placeholder {
        color: var(--placeholderColor);
    }

    @media screen and (min-width: 1280px) {
        font-size: 20px;
    }
`;

export const StyledTextArea = styled(Field)`
    ${text}
    margin-bottom: 16px;
    padding-bottom: 8px;
    border: none;
    outline: none;
    background-color: transparent;
    border-bottom: 1px solid var(--lightGreen);

    @media screen and (min-width: 1280px) {
        margin-bottom: 32px;
        font-size: 20px;
    }

    &::placeholder {
        color: var(--placeholderColor);
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end; 
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 99px;
    height: 39px;
    border-radius: 500px;
    outline: none;
    border: 1px solid var(--lightGreen);
    cursor: pointer;
    gap: 12px;
    ${text}
    font-size: 16px;
    line-height: 1.125px;
    
    &:hover {
        border: 1px solid var(--textColor);
        background-color: var(--textColor);
        color: var(--lightGreen);
    }
`;

export const StyledError = styled(ErrorMessage)`
    ${text}
    font-size: 12px;
    color: var(--errorColor);
    text-align: right;
`;
