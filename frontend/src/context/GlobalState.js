import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

const initialState = {
    navBarItems: [
        {
            label: 'statement',
            to: '/',
            icon: '../assets/icons/stats-chart-outline.svg',
            active: true
        },
        {
            label: 'add',
            to: '/add',
            icon: '../assets/icons/cash-outline.svg',
            subitems: [
                {label: 'income', to: 'react/route', icon: './assets/icons/add-circle-outline.svg'},
                {label: 'expense', to: 'react/route', icon: './assets/icons/remove-circle-outline.svg'}
            ],
            active: false
        },
        {
            label: 'settings',
            to: '/settings',
            icon: '../assets/icons/settings-outline.svg',
            active: false
        }
    ],

    //dummy records for testing
    records: [
        { id: 1, created: '2022-11-22 01:10:00', userid: 1, type: 1, amount: 125.00, category: 1, description: 'user entered description of this record' },
        { id: 2, created: '2022-11-22 01:11:00', userid: 1, type: 2, amount: 25.00, category: 2, description: 'user entered description of this record' }
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function handleNavBarClick(idx) {
        dispatch({
            type:'NAVBAR_CLICK',
            payload: idx
        });
    }
    
    
    return (
        <GlobalContext.Provider value={{navBarItems: state.navBarItems, records: state.records, handleNavBarClick}}>
            {children}
        </GlobalContext.Provider>
    );
}