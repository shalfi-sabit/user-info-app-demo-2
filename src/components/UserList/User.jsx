import React from "react";
import Avatar from "../../assets/man.png";
import { UserContainer, InnerContainer, H3, P } from "./styles";

const User = ({ name, age, address }) => {
  return (
    <UserContainer>
      <img src={Avatar} alt="Man Icon" height={75} width={75} />
      <InnerContainer>
        <H3>
          {name} ({age})
        </H3>
        <P>{address}</P>
      </InnerContainer>
    </UserContainer>
  );
};

export default User;
