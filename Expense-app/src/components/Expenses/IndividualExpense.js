import { useState } from 'react';

import './ExpenseDate.css';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';


//Used to call multiple times in composite Component
function IndividualExpense(props){

    console.log("IndividualExpense Component rendered...");

    //loadd the Title from the expense object for the first time
    const [title, setTitle] = useState(props.myExpense.title);

    const getDetails = function(){
        setTitle("Updated");
        console.log("Clicked 'Details' button");
    }

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.myExpense.date}/>
            <div className="expense-item__description">
                <h2 className=''>{title}</h2>
                <div className="expense-item__price">${props.myExpense.amount}</div>
                <button onClick={getDetails} className="bg-primary" style={{color:"white", borderRadius:"10px"}}>Update</button>
            </div>
        </div>
    );
}
export default IndividualExpense;