import './ExpenseItem.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import React, { useState } from "react";

function Expenses(props){


    const [selectedYear,setSelectedYear] = useState('All');
    const [itemsFiltered,SetItemsFiltered] = useState(props.products);
  
    const selectedYearHandler= (filerYearValue) => {
        setSelectedYear(filerYearValue);
        SetItemsFiltered(props.products.filter(expense =>  new Date(expense.date).getFullYear() ==filerYearValue || filerYearValue==='All'  ));
    }

    return (
      <div className="Expenses">
               <ExpensesFilter  selected={selectedYear} onSelectedYear={selectedYearHandler}/>

          {itemsFiltered.map(expense => 
          <ExpenseItem 
          key= {expense.id}
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date}
          /> )}

      </div>
  

    );
}
export default Expenses;