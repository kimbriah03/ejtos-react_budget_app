import React, { useContext, useState } from 'react';
import { BiCaretDown } from 'react-icons/bi';

function CDropdown () {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className = "dropdown"> 

            <div className = "dropdown-btn" onClick= {e => setIsActive(!isActive)}>Choose Currency <BiCaretDown /></div>

            {isActive && (
                <div className = "dropdown-content">
                    <div className = "dropdown-item" value = "$">$ Dollar</div>
                    <div className = "dropdown-item" value = "£">£ Pound</div>
                    <div className = "dropdown-item" value = "€">€ Euro</div>
                    <div className = "dropdown-item" value = "₹">₹ Ruppee</div>
                </div>
            )}
        </div>
    );
}
/*
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
};*/

export default CDropdown;
