import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);
    const { curr, setCurr } = useState('');

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div className = 'alert alert-primary'>
            <span> Spent so far: £{totalExpenses} </span>

            <span>
                <select className = 'custom-select' id = 'inputGroupSelect' onChange = {(event) => setCurr(event.target.value)}>
                    <option defaultValue>Choose...</option>
                    <option value = "$ Dollar" name = "dollar">$ Dollar</option>
                    <option value = "£ Pound" name = "£ Pound">£ Pound</option>
                    <option value = "€ Euro" name = "€ Euro">€ Euro</option>
                    <option value = "₹ Ruppee" name = "₹ Ruppee">₹ Ruppee</option>
                </select>
            </span>
        </div>


    );
};

export default ExpenseTotal;
