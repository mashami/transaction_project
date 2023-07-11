import React from "react";
import { useTransactionContext } from "../../Context/GlobleState";
import Transtion from "../Transtion/Transtion";

const TransactionList = () => {
  const { transactions, isLoading } = useTransactionContext();

  return (
    <div>
      <h3>History</h3>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <ul className="list">
          {transactions.map((transaction) => (
            <Transtion key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;
