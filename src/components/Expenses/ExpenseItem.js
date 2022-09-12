import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){

 
    const clickHandler = () =>{
        console.log('KLK')
    }

    return (
     <div className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change title</button>
    </div>
    );
}

export default ExpenseItem;