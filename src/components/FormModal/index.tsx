import React, { useState } from "react";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import { Container, Radioutton, TransactionTypeContainer } from "./styles";

interface FormModalProp {
  onHandleCloseModal: React.MouseEventHandler;
}

export const FormModal: React.FC<FormModalProp> = ({ onHandleCloseModal }) => {
  const [type, setType] = useState<"deposit" | "withdraw">("deposit");

  return (
    <Container>
      <h2>NovaTransação</h2>

      <input placeholder="Titulo" />
      <input placeholder="Valor" type="number" />

      <TransactionTypeContainer>
        <Radioutton
          type="button"
          onClick={() => setType("deposit")}
          isActive={type === "deposit"}
          activeColor="green"
        >
          <img src={incomeImg} alt="Entrada" />
          <span>Entrada</span>
        </Radioutton>

        <Radioutton
          type="button"
          onClick={() => setType("withdraw")}
          isActive={type === "withdraw"}
          activeColor="red"
        >
          <img src={outcomeImg} alt="Saída" />
          <span>Saída</span>
        </Radioutton>
      </TransactionTypeContainer>

      <input placeholder="Categoria" />

      <button type="submit">Cadastrar</button>

      <button className="react-modal-close" onClick={onHandleCloseModal}>
        <img src={closeImg} alt="fechar modal" />
      </button>
    </Container>
  );
};
