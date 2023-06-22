import React, { useContext, useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import { HiPlusCircle, HiMinusCircle } from 'react-icons/hi';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props, selected) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{props.selected}{props.cost}</td>
        <td><HiPlusCircle className = "plus" size = '2.5em' color = '3CB043' onClick={e => increaseAllocation(props.name)}>+</HiPlusCircle></td>
        <td><HiMinusCircle className = "minus" size ='2.5em' color = 'D30000' onClick = {(event) => decreaseAllocation(props.name)} >-</HiMinusCircle></td>
        <td><TiDelete className = "delete" size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
}

export default ExpenseItem; 
