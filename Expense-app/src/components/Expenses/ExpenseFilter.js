import React, { useState, useEffect } from "react";


//Here we return a variable to Parent
const ExpenseFilter = (props)=>{

    const currYear = new Date().getFullYear();
    const [year, updateYear] = useState(currYear);  //Current Year by default

    const options=[];
    const minOffset = currYear-5;
    const maxOffset = currYear;

    //Prepare data for year dropdown
    for (let i = maxOffset; i >= minOffset; i--) {
        const listYear = i;
        options.push(<option value={listYear} key={i}>{listYear}</option>);
    }

    //useEffect will get executed whenever "year" value changes. No need to take care of "updateYear" method execution time
    useEffect(() => {props.getSelectedYear(year)}, [year])

    function yearChanged(event){
        console.log("Before Year Change: " + year);
        updateYear(event.target.value);
        console.log("After Year Change: " + year);
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by  Year</label>
                <select id="expYear" onChange={yearChanged} value={year}>
                    {options}
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;