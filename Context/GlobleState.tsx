import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useState,
} from "react";
import AppReducer from "./AppReducer";
import transactionProps from "../components/interface";
import { Transaction } from "@prisma/client";
//initial State
interface TransationProps {
  children: React.ReactNode;
}

interface contextProps {
  isLoading: boolean;
  deleteTransaction: (id: string) => void;
  addTransaction: (transaction: transactionProps) => void;
  transactions: transactionProps[];
  getTransations: () => void;
}

const initialState = {
  transactions: [],
};

//create Context

export const GlobalContext = createContext<contextProps | null>(null);

export const useTransactionContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("Context must be used within a context provider");
  }

  return context;
};

//Provider component
//which going to wrap all components in provider

export const GlobalProvider = ({ children }: TransationProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // Actions
  useEffect(() => {
    getTransations();
  }, []);

  const getTransations = async () => {
    setIsLoading(true);
    try {
      const resPromise = await fetch("/api/transaction/getAll/");
      if (resPromise.ok) {
        const data = await resPromise.json();
        setTransactions(data.transations);
      } else {
        console.error("Failed to fetch Transaction");
      }
    } catch (error) {
      console.error("Error fetching Transactions:", error);
    }
    setIsLoading(false);
  };

  const deleteTransaction = (id: string) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction: transactionProps) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  const value = {
    isLoading,
    getTransations,
    transactions,
    deleteTransaction,
    addTransaction,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
