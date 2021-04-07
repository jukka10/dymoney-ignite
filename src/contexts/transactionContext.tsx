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

type TransactionInput = Omit<TransactionProps, "id" | "createdAt">;

interface TransactionsContextData {
  transactions: TransactionProps[];
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export const TransactionProvider: React.FC = ({ children }) => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    async function loadTransaction() {
      const { data } = await api.get("transactions");
      setTransactions(data.transactions);
    }
    loadTransaction();
  }, []);

  async function createTransaction(transaction: TransactionInput) {
    const { data } = await api.post("transactions", transaction);

    setTransactions([transactions, ...data.transaction]);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};
