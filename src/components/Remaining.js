import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import "./style.css";

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from './components/Remaining';

import ExpenseTotal from './components/ExpenseTotal';

import CurrencyDropdown from './components/CurrencyDropdown';

import ExpenseList from './components/ExpenseList';

import AllocationForm from './components/AllocationForm';

import { AppProvider } from './context/AppContext';

const App = () => {

    const [selected, setSelected] = useState("Choose Currency");

    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {/* Add Budget component here under */} 
                        <div className = 'col-sm'>
                            <Budget selected = {selected}/>
                        </div>       

                        {/* Add Remaining component here under */} 
                        <div className = 'col-sm'>
                            <Remaining selected = {selected}/>
                        </div>       

                        {/* Add ExpenseTotal component here under */} 
                        <div className = 'col-sm'>
                            <ExpenseTotal selected = {selected}/>
                        </div>

                        <div className = 'col-sm'>
                            <CurrencyDropdown selected = {selected} setSelected = {setSelected}/>
                        </div>
                    </div>       
                       
                        {/* Add ExpenseList component here under */}  
                    <h3 className = 'mt-3'> Allocation </h3>
                    <div className = 'row'>
                        <div className = 'col-sm'>
                            <ExpenseList selected = {selected} />
                        </div>
                    </div>          

                        {/* Add AllocationForm component here under */}        
                    <h3 className = 'mt-3'> Change Allocation </h3>
                    <div className = 'row mt-3'>
                        <div className = 'col-sm'>
                            <AllocationForm selected = {selected} />
                        </div>
                    </div>       
            </div>
        </AppProvider>
    );
};

export default App;
