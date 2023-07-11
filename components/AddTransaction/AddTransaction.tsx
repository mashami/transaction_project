import React, { useState } from "react";
import { useTransactionContext } from "../../Context/GlobleState";

const AddTransaction = () => {
  const [name, setName] = useState("");
  const [amount, setAmout] = useState(0);
  const { addTransaction, getTransations, isLoading } = useTransactionContext();

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const newTransaction = {
      name,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setAmout(0);
    setName("");
    getTransations();
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmout(parseInt(e.target.value))}
            placeholder="Enter amount..."
          />
        </div>

        <button className="btn">
          {isLoading ? "Adding.." : "Add transaction"}
        </button>
      </form>
    </>
  );
};
export default AddTransaction;
