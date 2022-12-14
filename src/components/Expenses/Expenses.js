import './ExpenseItem.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import React, { useState } from "react";
import ExpensesChart from './Expenseschart';
import Card from '../UI/Card';
function Expenses(props){


    const [selectedYear,setSelectedYear] = useState('All');

   

    const selectedYearHandler= (FilterYear) => {
        setSelectedYear(FilterYear);
    }

    const itemsFiltered = props.products.filter(expense =>  {
        return  expense.date.getFullYear().toString() === selectedYear || selectedYear==='All'
     } );

    return (
      <div>
        <Card className='expenses'>
        <ExpensesFilter  selected={selectedYear} onSelectedYear={selectedYearHandler}/>
        <ExpensesChart expenses={itemsFiltered}/>
        <ExpensesList items = {itemsFiltered}/>
        </Card>
      </div>
  

    );
}
export default Expenses;