import React from "react";
import CrossIcon from "../../assets/delete-button.png";
import {
  ModalContainer,
  ModalBody,
  ImageContainer,
  TextContainer,
  H3,
  P,
  ModalButton,
  ModalButtonContainer,
} from "./styles";

const Modal = ({ modalMessage, toggleModal }) => {
  return (
    <ModalContainer>
      <ModalBody>
        <ImageContainer>
          <img src={CrossIcon} alt="Cross Icon" width={60} height={60} />
        </ImageContainer>
        <TextContainer>
          <H3>Uh Oh!</H3>
          <P>{modalMessage}</P>
          <ModalButtonContainer>
            <ModalButton onClick={toggleModal}>OK</ModalButton>
          </ModalButtonContainer>
        </TextContainer>
      </ModalBody>
    </ModalContainer>
  );
};

export default Modal;
