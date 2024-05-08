import React from "react";
import {
  Container,
  FormTitle,
  Label,
  Input,
  FormRow,
  Button,
  ButtonContainer,
} from "./styles";

const Form = () => {
  return (
    <Container>
      <FormTitle>Create User</FormTitle>
      <FormRow>
        <Label>Name</Label>
        <Input type="text" placeholder="David Beckham" />
      </FormRow>
      <FormRow>
        <Label>Age</Label>
        <Input type="number" placeholder="24" />
      </FormRow>
      <FormRow>
        <Label>Address</Label>
        <Input type="text" placeholder="Austin, TX" />
      </FormRow>
      <ButtonContainer>
        <Button type="submit">Create</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Form;
