import { createContext, useContext, useEffect, useState } from "react";
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
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionContext = createContext<TransactionsContextData>(
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

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

export function useTransactions() {
  const context = useContext(TransactionContext);

  if (!context) {
    throw new Error("You do not must be provider");
  }

  return context;
}
