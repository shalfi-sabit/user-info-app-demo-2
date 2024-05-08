import { useState } from "react";
import Form from "./components/Form/Form";
import UserList from "./components/UserList/UserList";
import Modal from "./components/Form/Modal";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 2em;
`;

function App() {
  const [users, setUserList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <Container>
      <Form
        setUserList={setUserList}
        toggleModal={toggleModal}
        setModalMessage={setModalMessage}
      />
      <UserList users={users} />
      {isModalOpen && (
        <Modal toggleModal={toggleModal} modalMessage={modalMessage} />
      )}
    </Container>
  );
}

export default App;
