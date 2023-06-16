import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = ({props, selected}) => {
    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

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
        <div className = {`alert ${alertType}`}>
            <span> Remaining: {selected}{budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;



