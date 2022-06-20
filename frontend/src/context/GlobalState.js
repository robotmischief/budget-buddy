import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { calcTotalByType } from '../utils';

const initialState = {
    error: null,
    isLoading: true,
    listFilter: 'latest10',
    earntTotal: 0.0,
    spentTotal: 0.0,
    // maybe overshooting here, but trying to learn to implement a scalable navigation bar
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
            icon: '../assets/icons/coin-outline.svg',
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
    // newRecord is used for adding and editing a record 
    newRecord: {
        amount: 0,
        description: '',
        category_id: 3, // default category: OTHER
    }
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const navigate = useNavigate();

    //Actions
    //idx: button clicked
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
            headers: { 'Content-Type' : 'application/json' }
        };
        state.newRecord['user_id'] = 1; // adding momentary data until new features are implemented
        state.newRecord['type_id'] = (typeofRecord);
        state.newRecord['created_at'] = new Date().toISOString();
        try {
            const res = await axios.post('https://budbud.herokuapp.com/api/v1/records/new', state.newRecord, config);
            dispatch({
                type: 'RECORDS_NEW',
                payload: res.data.data
            });
            handleClear();
            navigate('/');

        } catch (error) {
            dispatch({
                type:'RECORDS_ERROR',
                payload: error.response.data.error
            });
        }
    }

    async function handleRecordDelete(recordId) {
        try {
            const res = await axios.delete(`https://budbud.herokuapp.com/api/v1/records/delete/${recordId}`);
            dispatch({
                type: 'RECORD_DELETE',
                payload: recordId
            });
            updateBalance();

        } catch (error) {
            dispatch({
                type:'RECORDS_ERROR',
                payload: error.response.data.error
            });
        }
    }

    async function getLatestRecords(count = 10) {
        try {
            const res = await axios.get(`https://budbud.herokuapp.com/api/v1/records/latest/${count}`);

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

    async function updateBalance() {
        try {
            const res = await axios.get('https://budbud.herokuapp.com/api/v1/records/get/all');
            const allRecords = res.data.data;
            if (allRecords) {
                const earntTotal = calcTotalByType( 1, allRecords);
                const spentTotal = calcTotalByType( 2, allRecords);
                dispatch({
                    type: 'BALANCE_UPDATE',
                    payload: {
                        earnttotal : earntTotal,
                        spenttotal : spentTotal
                    }
                });
            }

        } catch (error) {
            dispatch({
                type:'RECORDS_ERROR',
                payload: error.response.data.error
            });
        }
    }

    function handleInitRecord(recordId) {
        dispatch({
            type: 'NEWRECORD_INIT',
            payload: recordId
        });
    }

    async function handleRecordUpdate() {
        const config = {
            headers: { 'Content-Type' : 'application/json' }
        };
        try {
            const res = await axios.put(`https://budbud.herokuapp.com/api/v1/records/update/${state.newRecord.record_id}`, state.newRecord, config);
            dispatch({
                type: 'RECORD_UPDATE',
                payload: res.data.data
            });
            handleClear();
            handleNavBarClick(0);
            navigate('/');

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
                    res = await axios.get('https://budbud.herokuapp.com/api/v1/records/latest/10');
                    break;
                
                case 'all':
                    res = await axios.get('https://budbud.herokuapp.com/api/v1/records/get/all');
                    break;

                case 'earnt':
                    res = await axios.get('https://budbud.herokuapp.com/api/v1/records/type/earnt');
                    break;

                case 'spent':
                    res = await axios.get('https://budbud.herokuapp.com/api/v1/records/type/spent');
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
            earntTotal: state.earntTotal,
            spentTotal: state.spentTotal,
            isLoading: state.isLoading,
            handleDescription,
            handleNavBarClick,
            getLatestRecords,
            handleListFilterChange,
            handleAmount,
            handleClear,
            handleAmountShortcut,
            handleCategory,
            handleNewRecord,
            handleRecordDelete,
            updateBalance,
            handleInitRecord,
            handleRecordUpdate
            }}>
            {children}
        </GlobalContext.Provider>
    );
}