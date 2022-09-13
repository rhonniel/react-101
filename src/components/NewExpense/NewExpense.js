import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";
import './NewExpense.css';

const NewExpense = (props) => {

  const [activateForm,setSctivateForm] = useState(false);
  
  const saveExpenseDataHandler= (enteredExpenseData) =>{
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    setSctivateForm(false);
    props.onAddExpense(expenseData);
  }
  const openForm =()=>{
    setSctivateForm(true);
  }
  const closeForm =()=>{
    setSctivateForm(false);
  }


  return (
      <div className='new-expense'>
          {!activateForm && <button onClick={openForm}  >Add New Expense</button> } 
          {activateForm &&  <ExpenseForm onSaveEnteredExpenseData={saveExpenseDataHandler} onCloseForm={closeForm} />}
         
      </div>
  );
};

export default NewExpense;