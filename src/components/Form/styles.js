import styled from "styled-components";

export const Container = styled.form`
  width: fit-content;
  margin: 0 auto;
  padding: 2em;
  border-radius: 40px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

export const FormTitle = styled.h3`
  font-size: 1.5rem;
`;

export const Label = styled.label`
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
`;

export const Input = styled.input`
  padding: 0.8em;
  border: 2px solid rgb(0, 0, 0, 0.2);
  border-radius: 5px;
  font-weight: 600;

  &:blur {
    color: rgba(0, 0, 0, 0.2);
  }

  &:focus {
    border: 3px solid #0d41e1;
    outline: none;
  }
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  &:not(:first-child) {
    margin-top: 0.8em;
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: #567aea;
  color: #fff;
  padding: 1em;
  border: none;
  outline: none;
  border-radius: 5px;
  margin-top: 1.5em;
  font-size: 1rem;
  transition: 0.2s;
  font-weight: 600;

  &:hover,
  &:focus {
    background-color: #0d41e1;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
