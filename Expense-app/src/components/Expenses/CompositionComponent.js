import './ExpenseItem.css';
import './ExpenseDate';
import IndividualExpense from './IndividualExpense';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';



function CompositionComponent(props){
    console.log("CompositionComponent rendered...");

    console.log(props.allExpenses.length);
    //Component to illustrate Composition concept using "Card" and "ExpenseItem" components

    const [yearSelected, updateYearSelected] = useState(new Date().getFullYear());

    function selectedYear(receivedYear){
        updateYearSelected(receivedYear);
        console.log('Year received in Composition Component : ' + receivedYear);
    }

    return (
        <div>
            <p style={{"color" : "white"}}>Composition Component using Card</p>
            
            {/* Can use below hardcoded IndividualExpense
            <Card>
                <ExpenseFilter getSelectedYear={selectedYear}/>
                <IndividualExpense myExpense={props.allExpences[0]}/>
                <IndividualExpense myExpense={props.allExpences[1]}/>
                <IndividualExpense myExpense={props.allExpences[2]}/>
                <IndividualExpense myExpense={props.allExpences[3]}/>
            </Card>   */} 

            <Card>
                <ExpenseFilter getSelectedYear={selectedYear}/>
            
                {props.allExpenses.map((eachExpense)=>{
                    return (
                        <IndividualExpense key={eachExpense.id} myExpense={eachExpense}/>
                    )
                })}
            </Card>
        </div>    
    );        
}

export default CompositionComponent;