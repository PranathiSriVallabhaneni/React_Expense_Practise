import React from "react";

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props){

    console.log("NewExpense Component");

    //this method is called when something is returened to this parent from child (ExpenseForm)
    //pass this method as a value to property "onSaveExpenseData" in the component, 
    //so that it can be called in the child component to pass the saving data as param
    //"enteredExpenseData" is the object returned from child Add "id" along with returned value
    const saveExpenseData = (enteredExpenseData)=>{
        const expData = {
            id:Math.random().toString(),
            ...enteredExpenseData            
        }
        console.log("Object returned from Expense Form after adding 'id': ");
        console.log(expData);

        //call the "addExpense" property of the parent element to pass value(final obj) to parent.
        props.onAddExpense(enteredExpenseData);
    }

    

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseData}/>        
        </div>
    )

}

export default NewExpense;