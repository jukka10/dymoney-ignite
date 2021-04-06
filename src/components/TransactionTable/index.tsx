import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Container } from "./styles";

interface TransactionTableProps {
  id: string;
  title: string;
  amount: number;
  category: string;
  createdAt: string;
  type: "deposit" | "withdraw";
}

export const TransactionTable: React.FC = () => {
  const [transactions, setTransactions] = useState<TransactionTableProps[]>([]);

  useEffect(() => {
    async function loadTransaction() {
      const { data } = await api.get("transactions");
      setTransactions(data.transactions);
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
