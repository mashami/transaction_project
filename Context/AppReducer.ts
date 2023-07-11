const AppReducer = (
  state: { transactions: any[] },
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      try {
        fetch(`/api/transaction/delete/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: action.payload }),
        });
      } catch (error) {
        console.error(error);
      }
      // return { transactions: [] };

      return state;

    case "ADD_TRANSACTION":
      try {
        fetch("/api/transaction/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: action.payload.amount,
            name: action.payload.name,
          }),
        });
      } catch (error) {
        console.error(error);
      }

      return { transactions: [] };
    // return state;

    default:
      return state;
  }
};
export default AppReducer;
