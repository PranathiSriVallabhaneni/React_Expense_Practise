import IndividualExpense from './IndividualExpense';


function CombinedCalendarItem(props){

    //Component used to create a combination of "IndividualExpense" and "p" components
    return (
        <div>
            <p style={{"color":"white"}}>Split Components - Component with combination of other components</p>
            <IndividualExpense date={props.allExpences[0].date} myExpense={props.allExpences[0]}/>
            <IndividualExpense date={props.allExpences[1].date} myExpense={props.allExpences[1]}/>
            <IndividualExpense date={props.allExpences[2].date} myExpense={props.allExpences[2]}/>
            <IndividualExpense date={props.allExpences[3].date} myExpense={props.allExpences[3]}/>
        </div>
    );        
}

export default CombinedCalendarItem;