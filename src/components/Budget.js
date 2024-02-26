import React, { useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {currency, expenses, budget, dispatch} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const value = Math.min(Number(event.target.value),20000);
        //Calculate the total expenses to check if the new budget will allow remaining >0
       // const totalExpenses = expenses.reduce();
       const totalExpenses = expenses.reduce((total,item)=> total+=item.cost,0);
        if (value - totalExpenses >=0) {
            setNewBudget(value);
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
        } else {
            alert ("You cannot reduce the budget value lower than the spending");
        }
      
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type='number' step='10' defaultValue={budget} value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;