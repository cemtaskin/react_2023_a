import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";


function App() {

  const expenses = [
    {id:1,title:"Car Insurance",amount:245.56,date:new Date(2023,2,2)},
    {id:2,title:"Toilet Paper",amount:10.2,date:new Date(2023,1,2)},
    {id:3,title:"New Phone",amount:199.99,date:new Date(2023,2,23)},
    {id:4,title:"New Desk (Wodden)",amount:67.00,date:new Date(2023,6,1)},
    {id:4,title:"New Pencil",amount:3.00,date:new Date(2023,6,1)},
  
  ];

  let expense = expenses[parseInt(Math.random()*5)];
  


  return (
    <div>
      <h1>Expenses</h1>
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />

    
    </div>
  );
}

export default App;
