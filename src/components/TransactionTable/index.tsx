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

export const TransactionTable: React.FC = () => {
  const [transactions, setTransactions] = useState<TransactionTableProps[]>([]);

  useEffect(() => {
    async function loadTransaction() {
      const response = await api.get("transactions");
      console.log(response.data);
      setTransactions(response.data);
    }
    loadTransaction();
  }, []);

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
        {transactions.map((item, index) => (
          <tbody key={index}>
            <tr>
              <td>{item.title}</td>
              <td className={item.type}>R$ {item.value}</td>
              <td>{item.category}</td>
              <td>{item.date}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </Container>
  );
};
