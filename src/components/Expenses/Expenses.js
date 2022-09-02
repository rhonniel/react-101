import './ExpenseItem.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import React, { useState } from "react";

function Expenses(props){

    const products = [];
    const [selectedYear,setSelectedYear] = useState('');
    props.products.forEach(product => {
        products.push( <ExpenseItem key={product.title} title={product.title} amount={product.amount} date={product.date} ></ExpenseItem>)
    });

    const selectedYearHandler= (filerYearValue) => {
        setSelectedYear(filerYearValue);
        console.log(selectedYear)
    }

    return (
        
      <div className="Expenses">
               <ExpensesFilter onSelectedYear={selectedYearHandler}/>
          {products}
      </div>

    );
}
export default Expenses;