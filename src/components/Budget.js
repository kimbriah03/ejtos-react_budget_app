import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (props, selected, setSelected) => {

    const { expenses } = useContext(AppContext);
    const { budget, setBudget } = useState('');

    return (
        <div className = 'alert alert-secondary'>
            <span> Budget: £{budget}
                <input
                    required = 'required'
                    type = 'number'
                    step = '10'                 
                    id = 'budget'
                    value = { budget }
                    onChange={(event) => {
                        if (event.target.value > 20000) {
                            alert("The value cannot exceed 20,000.");
                            setBudget("");
                            return;
                        }
                        else if (event.target.value < expenses.reduce((total, item) => total + item.cost, 0)) {
                            alert("The value cannot be lower than how much has been spent.");
                            setBudget("");
                            return;
                        }
                        else {
                            setBudget(event.target.value)
                        }
                    }}>
                </input>
            </span>
        </div>
    );
};

export default Budget;

