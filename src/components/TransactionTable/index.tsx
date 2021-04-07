import React, { useContext } from "react";

import { TransactionContext } from "../../contexts/transactionContext";
import { Container } from "./styles";

export const TransactionTable: React.FC = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td className={item.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(item.amount)}
              </td>
              <td>{item.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(new Date(item.amount))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
