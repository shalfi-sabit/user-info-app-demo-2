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
    border: 3px solid #567aea;
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

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background-color: #fff;
  width: fit-content;
  max-width: 500px;
  display: flex;
  border-radius: 10px;
`;

export const ImageContainer = styled.div`
  background-color: #fdd9d7;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 2em;
  margin-right: 1em;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const TextContainer = styled.div`
  padding-right: 1em;
`;

export const H3 = styled.h3`
  font-size: 22px;
  margin-bottom: 0;
`;

export const P = styled.p`
  color: rgba(0, 0, 0, 0.8);
`;

export const ModalButton = styled.button`
  background-color: #567aea;
  color: #fff;
  padding: 0.5em 1.5em;
  border: none;
  outline: none;
  border-radius: 5px;
  margin-top: 0.5em;
  margin-bottom: 1em;
  font-size: 1rem;
  transition: 0.2s;
  font-weight: 600;

  &:hover,
  &:focus {
    background-color: #0d41e1;
  }
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
