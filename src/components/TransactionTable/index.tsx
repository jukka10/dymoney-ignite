import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Container } from "./styles";

interface TransactionTableProps {
  title?: string;
  value?: number;
  category?: string;
  date?: Date | string;
  type?: "outcome" | "income";
}

export const TransactionTable: React.FC<TransactionTableProps> = ({
  title = "01",
  value = 2000,
  category = "job",
  date = "20/20/2021",
  type = "income",
}) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function loadTransaction() {
      const response = await api.get("transactions");
      setTransactions(response.data);
    }
    loadTransaction();
  }, []);
  const array = [1, 2];

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
        {array.map((item, index) => (
          <tbody key={index}>
            <tr>
              <td>{title}</td>
              <td className={type}>R$ {value}</td>
              <td>{category}</td>
              <td>{date}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </Container>
  );
};
