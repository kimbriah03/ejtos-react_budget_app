import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = ({props, selected}) => {
    const { expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    if (selected === "$ Dollar") {
        selected = "$";
    }
    else if (selected === "£ Pound") {
        selected = "£";
    }
    else if (selected === "€ Euro") {
        selected = "€";
    }
    else if (selected === "₹ Ruppee") {
        selected = "₹";
    }
    else { //default
        selected = "£";
    }

    return (
        <div className = 'alert alert-primary'>
            <span> Spent so far: {selected}{totalExpenses} </span>
        </div>


    );
};

export default ExpenseTotal;
