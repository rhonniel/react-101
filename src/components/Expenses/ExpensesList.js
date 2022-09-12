import ExpenseItem from './ExpenseItem';
import React from 'react';

const ExpensesList = (props) => {


    if (props.items.length === 0){
        return (<p>No items found</p>);
    }
    
    return(
        <ul className='expense-list'>
            {props.items.map(expense => 
                <ExpenseItem 
                key= {expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}
                /> )}

        </ul>

    )


};

export default ExpensesList;