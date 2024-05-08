import { useState } from "react";
import Form from "./components/Form/Form";
import UserList from "./components/UserList/UserList";
import styled from "styled-components";

function App() {
  const [users, setUserList] = useState([]);

  return (
    <div>
      <Form setUserList={setUserList} />
      <UserList users={users} />
    </div>
  );
}

export default App;
