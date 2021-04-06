import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface TransactionProps {
  id: string;
  title: string;
  amount: number;
  category: string;
  createdAt: string;
  type: "deposit" | "withdraw";
}

export const TransactionContext = createContext<TransactionProps[]>([]);

export const TransactionProvider: React.FC = ({ children }) => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    async function loadTransaction() {
      const { data } = await api.get("transactions");
      setTransactions(data.transactions);
    }
    loadTransaction();
  }, []);

  return (
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  );
};
