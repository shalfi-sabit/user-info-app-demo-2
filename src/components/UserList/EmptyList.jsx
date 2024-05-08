import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  font-weight: 500;
`;

const EmptyList = () => {
  return <Container>This list is empty.</Container>;
};

export default EmptyList;
