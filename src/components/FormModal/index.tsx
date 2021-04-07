import React, { FormEvent, useState } from "react";

import { useTransactions } from "../../contexts/useTransactions";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import { Container, Radioutton, TransactionTypeContainer } from "./styles";

interface FormModalProp {
  onHandleCloseModal: () => void;
}

export const FormModal: React.FC<FormModalProp> = ({ onHandleCloseModal }) => {
  const { createTransaction } = useTransactions();

  const [type, setType] = useState<"deposit" | "withdraw">("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      amount,
      category,
      type,
    };

    await createTransaction(data);

    setTitle("");
    setAmount(0);
    setCategory("");
    onHandleCloseModal();
  }

  return (
    <Container onSubmit={handleCreateNewTransaction}>
      <h2>NovaTransação</h2>

      <input
        placeholder="Titulo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Valor"
        type="number"
        value={amount.toFixed(2)}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

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

      <input
        placeholder="Categoria"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <button type="submit">Cadastrar</button>

      <button className="react-modal-close" onClick={onHandleCloseModal}>
        <img src={closeImg} alt="fechar modal" />
      </button>
    </Container>
  );
};
