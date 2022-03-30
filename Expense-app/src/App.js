import logo from './logo.svg';
import './App.css';

import ExpenseItem from './components/Expenses/ExpenseItem';
import CalendarItem from './components/Expenses/CalendarItem';
import CombinedCalendarItem from './components/Expenses/CombinedCalendarItem';
import CompositionComponent from './components/Expenses/CompositionComponent';
import NewExpense from './components/NewExpense/NewExpense';
import { useEffect, useState } from 'react';


const DUMMY_EXPENSES = [
  {id:1, title:'Car Insurance', amount:294.35, date:new Date()},
  {id:2, title:'New Desk (Wooden)', amount:156.55, date:new Date(2021, 4, 26)},
  {id:3, title:'Toilet Paper', amount:14.35, date:new Date(2021, 12, 27)},
  {id:4, title:'New TV', amount:294.35, date:new Date(2021, 12, 28)}
];


function App() {

  const [expenses, updateExpenses] = useState(DUMMY_EXPENSES);

  //Update newly added expense without considering previous state
  // const addExpenseHandler = (newExpenseAdded)=>{
  //     console.log("New Expense Added: " + newExpenseAdded);
  //     const expenseAdded = {id:(expenses.length+1), ...newExpenseAdded};
  //     expenses.splice(expenses.length,0,expenseAdded);  
  //     updateExpenses([expenseAdded, ...expenses]);        
  // };


  //Update list with newly added expense using previous state, make it a arrow function with prevExpenses as param 
  const addExpenseHandler = (newExpenseAdded)=>{
      console.log("New Expense Added: " + newExpenseAdded);
      updateExpenses((prevExpenses)=>{
        return [newExpenseAdded, ...prevExpenses];
      });        
  };
  
  return (
    <div className="App">
      <p>Let's Get Started</p>
      <ExpenseItem myExpense={expenses[0]}></ExpenseItem>
      <p className='white-text'>Component with only HTML with different Date format</p>
      <CalendarItem myExpense={expenses[1]}></CalendarItem>
      <CalendarItem myExpense={expenses[2]}></CalendarItem>
      <CombinedCalendarItem allExpences={expenses}></CombinedCalendarItem>
      
      <p className='white-text'>Form with Multiple States</p> 
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <CompositionComponent allExpenses={expenses}  ></CompositionComponent>
    </div>
  );
}

export default App;
