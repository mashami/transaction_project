import React, { useState } from "react";
import { useTransactionContext } from "../../Context/GlobleState";
import { Transaction } from "@prisma/client";

interface TransactionProps {
  transaction: Transaction;
}

const Transtion = ({ transaction }: TransactionProps) => {
  const { deleteTransaction, getTransations } = useTransactionContext();

  const handleDelete = () => {
    deleteTransaction(transaction.id);
    getTransations();
  };

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.name}{" "}
        <span>
          {sign}${transaction.amount}
        </span>
        <button className="delete-btn" onClick={() => handleDelete()}>
          x
        </button>
      </li>
    </div>
  );
};
export default Transtion;
