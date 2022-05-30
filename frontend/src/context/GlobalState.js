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
        <GlobalContext.Provider value={{navBarItems: state.navBarItems, handleNavBarClick}}>
            {children}
        </GlobalContext.Provider>
    );
}