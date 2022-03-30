import './ExpenseItem.css';


function ExpenseItem(props){
    console.log("ExpenseItem rendered...");

    //Expense Component with basic Date format 
    return (
        <div className="expense-item">
            <div>{props.myExpense.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.myExpense.title}</h2>
                <div className="expense-item__price">${props.myExpense.amount}</div>
            </div>
        </div>
    );        
}

export default ExpenseItem;