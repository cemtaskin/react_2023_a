import Card from "../UI/ Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import React,{useState} from 'react';

const ExpenseItem = (props)  => {
 
  const [title,setTitle] = useState(props.title);
  const [counter,setCounter] = useState(0);


  const clickHandler = ()=> {
    console.log("Title changed:" + title);
    setTitle("updated");
    console.log("Title changed:" + title);
  };

  const clickCounterHandler = ()=> {
   
    setCounter(counter+1);
   
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={clickCounterHandler}>{counter}</button>
      
    </Card>
  );
}

export default ExpenseItem;
