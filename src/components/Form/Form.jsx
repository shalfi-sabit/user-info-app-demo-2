import React, { useState } from "react";
import {
  Container,
  FormTitle,
  Label,
  Input,
  FormRow,
  Button,
  ButtonContainer,
} from "./styles";

const Form = ({ setUserList }) => {
  const [userInput, setUserInput] = useState({
    name: "",
    age: "",
    address: "",
  });

  const userInputHandler = (inputFieldName, value) => {
    setUserInput((prevState) => ({ ...prevState, [inputFieldName]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setUserList((prevUsers) => [userInput, ...prevUsers]);

    setUserInput({ name: "", age: "", address: "" });
  };

  return (
    <Container onSubmit={(event) => submitHandler(event)}>
      <FormTitle>Create User</FormTitle>
      <FormRow>
        <Label>Name</Label>
        <Input
          value={userInput.name}
          type="text"
          placeholder="David Beckham"
          onChange={(event) => userInputHandler("name", event.target.value)}
        />
      </FormRow>
      <FormRow>
        <Label>Age</Label>
        <Input
          type="number"
          placeholder="24"
          value={userInput.age && userInput.age}
          onChange={(event) => userInputHandler("age", event.target.value)}
        />
      </FormRow>
      <FormRow>
        <Label>Address</Label>
        <Input
          value={userInput.address}
          type="text"
          placeholder="Austin, TX"
          onChange={(event) => userInputHandler("address", event.target.value)}
        />
      </FormRow>
      <ButtonContainer>
        <Button type="submit">Create</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Form;
