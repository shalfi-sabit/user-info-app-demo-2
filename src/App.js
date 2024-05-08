import { useState } from "react";
import Form from "./components/Form/Form";
import UserList from "./components/UserList/UserList";
import styled from "styled-components";

function App() {
  const [users, setUsers] = useState([
    { name: "Lelah Nochols", age: 18, address: "Fort Worth, TX" },
    { name: "Jesus Weiss", age: 25, address: "Austin, TX" },
    { name: "Lelah Nochols", age: 18, address: "Fort Worth, TX" },
  ]);

  return (
    <div>
      <Form />
      <UserList users={users} />
    </div>
  );
}

export default App;
