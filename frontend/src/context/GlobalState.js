import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';
import axios from 'axios';

const initialState = {
    error: null,
    isLoading: true,
    listFilter: 'latest10',
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

    records: [
        //dummy records for testing
        // { id: 1, created: '2022-11-22 01:10:00', userid: 1, type: 1, amount: 125.00, category: 1, description: 'user entered description of this record' },
        // { id: 2, created: '2022-11-22 01:11:00', userid: 1, type: 2, amount: 25.00, category: 2, description: 'user entered description of this record' }
    ],

    newRecord: {
        amount: 0,
        description: '',
        category_id: 3,
    }
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
    
    function handleAmount({target}) {
        const newAmount = parseFloat(target.value);
        dispatch({
            type:'NEWRECORD_AMOUNT',
            payload:{ amount: newAmount }
        });
    }

    function handleAmountShortcut(amount) {
        dispatch({
            type: 'NEWRECORD_SHORTCUT',
            payload: {amount: amount}
        });
    }

    function handleClear() {
        dispatch({
            type:'NEWRECORD_CLEAR'
        });
    }

    function handleDescription({target}) {
        const newDescription = target.value;
        dispatch({
            type: 'NEWRECORD_DESCRIPTION',
            payload: newDescription
        });
    }

    function handleCategory({target}) {
        const newCategory = parseInt(target.value);
        dispatch({
            type: 'NEWRECORD_CATEGORY',
            payload: newCategory
        });
    }

    async function handleNewRecord(typeofRecord) {
        const config = {
            headers: { 'Content-type' : 'application/json' }
        };
        state.newRecord['user_id'] = 1;
        state.newRecord['type_id'] = (typeofRecord);
        try {
            // const res = await axios.post('/api/v1/records/new', newRecord, config);
            console.log('NEW RECORD FROM STATE: ', state.newRecord);
            dispatch({
                type: 'RECORDS_NEW',
            });

        } catch (error) {
            dispatch({
                type:'RECORDS_ERROR',
                payload: error.response.data.error
            });
        }
    }

    async function getLatestRecords(count = 10) {
        try {
            const res = await axios.get(`/api/v1/records/latest/${count}`);

            dispatch({
                type: 'RECORDS_GET',
                payload: res.data.data
            });

        } catch (error) {
            dispatch({
                type:'RECORDS_ERROR',
                payload: error.response.data.error
            });
        }
    }
    
    async function handleListFilterChange({target}) {
        try {
            const filter = target.value;
            let res = null;

            switch(filter){
                case 'latest10':
                    res = await axios.get('/api/v1/records/latest/10');
                    break;
                
                case 'all':
                    res = await axios.get('/api/v1/records/get/all');
                    break;

                case 'earnt':
                    res = await axios.get('/api/v1/records/type/earnt');
                    break;

                case 'spent':
                    res = await axios.get('/api/v1/records/type/spent');
                    break;

                default:
                    return state;
            }

            dispatch({
                type: 'RECORDS_FILTER',
                filterBy: filter,
                payload: res.data.data
            });

        } catch (error) {
            dispatch({
                type:'RECORDS_ERROR',
                payload: error.response.data.error
            });
        }
    }

    return (
        <GlobalContext.Provider value={{
            navBarItems: state.navBarItems, 
            records: state.records,
            listFilter: state.listFilter, 
            newRecord: state.newRecord,
            handleDescription,
            handleNavBarClick,
            getLatestRecords,
            handleListFilterChange,
            handleAmount,
            handleClear,
            handleAmountShortcut,
            handleCategory,
            handleNewRecord
            }}>
            {children}
        </GlobalContext.Provider>
    );
}