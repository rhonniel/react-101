import './ExpenseForm.css'
import React, { useState } from "react";

const ExpenseForm = (props) => {

    //  each component with a event
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

   // one state with multipler components

  /* const [userInput, setUserInput] = userState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
   })*/
 

    const titleChangeHandler = (event)=> {
       setEnteredTitle(event.target.value);
     /* setUserInput({
        ...userInput,
        enteredTitle: event.target.value,
      });

       actualizacion de propiedad validando el estado anterior
      setUserInput((prevState) => {
        return {...prevState, enteredTitle: event.target.value};
        });*/
    };


    const amountChangeHandler = (event)=> {
        setEnteredAmount(event.target.value);
     };


     const dateChangeHandler = (event)=> {
        setEnteredDate(event.target.value);
     };

     const submitHandler = (event) => {
        event.preventDefault();
       
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
          };
        console.log(expenseData)
        
        props.onSaveEnteredExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
     };

     const handleCancel = () =>{
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onCloseForm();
     }
 

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input value={enteredTitle} type='text' onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input value={enteredAmount} type='number' min='0.01' step='0.01'  onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input value={enteredDate} type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/> 
                </div>

            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
            <button type="button" onClick={handleCancel}>Cancel</button>
        </form>

    );
};

export default ExpenseForm