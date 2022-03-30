import './ExpenseItem.css';


function CalendarItem(props){
    return (
        <div className="expense-item">
            <div>{props.myExpense.date.toLocaleString('en-US','long')}</div>
            <div className="expense-item__description">
                <h2>{props.myExpense.title}</h2>
                <div className="expense-item__price">${props.myExpense.amount}</div>
            </div>
        </div>
    );        
}

export default CalendarItem;