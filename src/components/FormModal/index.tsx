import React from "react";

import closeImg from "../../assets/close.svg";
import { Container } from "./styles";

interface FormModalProp {
  onHandleCloseModal: React.MouseEventHandler;
}

export const FormModal: React.FC<FormModalProp> = ({ onHandleCloseModal }) => {
  return (
    <Container>
      <h2>NovaTransação</h2>

      <input placeholder="Titulo" />
      <input placeholder="Valor" type="number" />
      <input placeholder="Categoria" />

      <button type="submit">Cadastrar</button>

      <button className="react-modal-close" onClick={onHandleCloseModal}>
        <img src={closeImg} alt="fechar modal" />
      </button>
    </Container>
  );
};
