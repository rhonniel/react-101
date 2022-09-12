import './ExpenseItem.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import React, { useState } from "react";

function Expenses(props){


    const [selectedYear,setSelectedYear] = useState('All');

   

    const selectedYearHandler= (FilterYear) => {
        setSelectedYear(FilterYear);
    }

    const itemsFiltered = props.products.filter(expense =>  {
        return  expense.date.getFullYear().toString() === selectedYear || selectedYear==='All'
     } );

    return (
      <div className="Expenses">
        <ExpensesFilter  selected={selectedYear} onSelectedYear={selectedYearHandler}/>
        <ExpensesList items = {itemsFiltered}/>
      </div>
  

    );
}
export default Expenses;