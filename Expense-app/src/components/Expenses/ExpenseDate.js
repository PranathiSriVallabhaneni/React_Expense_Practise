import './ExpenseDate.css';


function ExpenseDate(props){

    //Date Component used to create indivudual Expense component

    const month = props.date.toLocaleString('en-US',{month:'long'});
    const currDate = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.toLocaleString('en-US', {year: '2-digit'});   //props.date.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{currDate}</div>
        </div>
    );        
}


export default ExpenseDate;