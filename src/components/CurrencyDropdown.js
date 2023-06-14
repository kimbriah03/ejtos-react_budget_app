import React, { useContext, useState } from 'react';

const CurrencyDropdown = (props) => {

    const { curr, setCurr } = useState('');

    return (
        <div className = 'alert alert-primary'>
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
}

export default CurrencyDropdown;
