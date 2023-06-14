import React, { useContext, useState } from 'react';

const CurrencyDropdown = (props) => {

    const { curr, setCurr } = useState('');

    return (
        <select className = 'alert alert-primary' id = 'inputGroupSelect' onChange = {(event) => setCurr(event.target.value)}
            style = {
                {paddingRight: 200}
            }>
                <option defaultValue>Choose...</option>
                <option value = "$ Dollar" name = "dollar">$ Dollar</option>
                <option value = "£ Pound" name = "£ Pound">£ Pound</option>
                <option value = "€ Euro" name = "€ Euro">€ Euro</option>
                <option value = "₹ Ruppee" name = "₹ Ruppee">₹ Ruppee</option>
        </select>
    );
};

export default CurrencyDropdown;
