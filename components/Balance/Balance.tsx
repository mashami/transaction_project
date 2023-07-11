import React from "react";
import { useTransactionContext } from "../../Context/GlobleState";

const Balance = () => {
  const { transactions } = useTransactionContext();
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 className="text-[40px] font-bold">${total}</h1>
    </>
  );
};
export default Balance;
