import {useImperativeHandle, useState} from 'react';
import './ExpenseForm.css';
import React from 'react';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';

//Here we return a Object to parent
function ExpenseForm(props){
    console.log("ExpenseForm Component with Multiple States");
    
    const [userInput, setUserinput] = useState({title:'', amount:'', date:''}); 

    //Reflect the data entered in title textbox
    function setTitle(event){
        console.log("New Title Entered: " + event.target.value);
        setUserinput((prevState)=>{
            return {...prevState,title:event.target.value};
        })
    }

    function setAmount(event){
        console.log("New Amount Entered: " + event.target.value);
        setUserinput((prevState)=>{
            return {...prevState,amount:event.target.value};
        })
    }

    function setDate(event){
        console.log("New Date Entered: " + event.target.value);
        setUserinput((prevState)=>{
            return {...prevState,date:event.target.value};
        })
    }
    function submitClicked(event)
    {
        console.log("Submit button clicked");
        event.preventDefault();
        console.log(userInput);

        //Create object that needs to be returned to parent upon saving. 
        const expenseData = {
            title:userInput.title,
            amount:userInput.amount,
            date:userInput.date
        }

        console.log("Retrieved all inputs: " + expenseData.title + ", " + expenseData.amount + ", " + expenseData.date);

        //Reset all the fields to empty upon saving
        userInput.title = '';
        userInput.amount = '';
        userInput.date = '';
        
        //call the "onSaveExpenseData" property of the parent element to pass value(final obj) to parent.
        props.onSaveExpenseData(expenseData);
    }

    /*Adds Form to submit new expense in web page*/
    return(
        <div>
            <div>{userInput.title}</div>
            <form onSubmit={submitClicked}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={userInput.title} onChange={setTitle}></input>
                    </div>   
                    <div className="new-expense__control">
                        <label>Amount ($)</label>
                        <input  type="number" min='0.01' step='0.01' value={userInput.amount} onChange={setAmount}/>
                    </div>         
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" min='2000-01-01' max='2022-12-31' value={userInput.date} onChange={setDate}/>
                    </div>     
                </div> 
                <div className='new-expense__actions'>
                    <button type="submit">Add Expense</button>
                </div>           
            </form>
        </div>
    )
}

export default ExpenseForm;