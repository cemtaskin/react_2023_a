import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses =  ({ items }) =>  {
  return (
    <div>
      <h1>Expenses</h1>
      <ExpenseItem
        title={items[0].title}
        amount={items[0].amount}
        date={items[0].date}
      />

      <ExpenseItem
        title={items[1].title}
        amount={items[1].amount}
        date={items[1].date}
      />

      <ExpenseItem
        title={items[2].title}
        amount={items[2].amount}
        date={items[2].date}
      />

      <ExpenseItem
        title={items[3].title}
        amount={items[3].amount}
        date={items[3].date}
      />

      <ExpenseItem
        title={items[4].title}
        amount={items[4].amount}
        date={items[4].date}
      />
    </div>
  );
}

export default Expenses;
