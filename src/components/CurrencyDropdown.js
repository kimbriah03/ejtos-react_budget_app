import React, { useContext, useState } from 'react';
import { BiCaretDown } from 'react-icons/bi';

function CDropdown ({selected, setSelected}) {

    const [isActive, setIsActive] = useState(false);
    const options = ['$ Dollar', '£ Pound', '€ Euro', '₹ Ruppee']

    return (
        <div className = "dropdown"> 

            <div className = "dropdown-btn" onClick= {e => setIsActive(!isActive)}>Currency: {selected} <BiCaretDown /></div>

            {isActive && (
                <div className = "dropdown-content">
                    {options.map(option => (
                        <div onClick = {e => {
                            setSelected(option)
                            setIsActive(false)}}
        
                        className = "dropdown-item" value = "$">{option}</div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default CDropdown;
