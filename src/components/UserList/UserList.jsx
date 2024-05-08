import React from "react";
import User from "./User";
import EmptyList from "./EmptyList";
import { Container } from "./styles";

const UserList = ({ users }) => {
  return (
    <Container>
      {users.length === 0 ? (
        <EmptyList />
      ) : (
        users.map((user) => (
          <User name={user.name} age={user.age} address={user.address} />
        ))
      )}
    </Container>
  );
};

export default UserList;
