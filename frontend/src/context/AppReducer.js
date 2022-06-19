export const AppReducer = (state, action) => {
    switch(action.type) {
        case 'NAVBAR_CLICK':
            const newNavBarItemsState = state.navBarItems;
            newNavBarItemsState.forEach((item) => item.active = false);
            newNavBarItemsState[action.payload].active = true;
            return {...state, navBarItems: newNavBarItemsState};


        case 'RECORDS_GET':
            return {
                ...state,
                isLoading: false,
                listFilter: 'latest10',
                records: action.payload
            };

        case 'RECORDS_FILTER':
            return {
                ...state,
                listFilter: action.filterBy,
                records: action.payload
            }
        
        case 'RECORDS_NEW':
            const prevRecords = [...state.records];
            const resetNavBar = [...state.navBarItems];
            resetNavBar.forEach((button)=>button.active = false);
            resetNavBar[0].active = true;
            return {
                ...state,
                records: [{...state.newRecord}, ...prevRecords],
                navBarItems: resetNavBar
            };

        case 'RECORD_DELETE':
            const newRecords = state.records.filter((record) => record.record_id !== action.payload);
            return {
                ...state, records: newRecords
            };
            
        case 'RECORDS_ERROR':
            return {
                ...state,
                error: action.payload.error
            };

        case 'NEWRECORD_AMOUNT':
            const newRecordAmount = {...state.newRecord};
            newRecordAmount.amount = action.payload.amount;
            return {
                ...state,
                newRecord: newRecordAmount
            };

        case 'NEWRECORD_DESCRIPTION':
            const newRecordDescription = {...state.newRecord};
            newRecordDescription.description = action.payload;
            return {
                ...state,
                newRecord: newRecordDescription
            };

        case 'NEWRECORD_CLEAR':
            const clearRecord = {
                amount: 0,
                description: '',
                category_id: 3,
            };
            return {
                ...state,
                newRecord: clearRecord
            };

        case 'NEWRECORD_INIT':
            const {recordId} = action.payload;
            const prevRecordData = {...state.records.find((record) => record.record_id === recordId)};
            const NavBar = [...state.navBarItems];
            NavBar.forEach((button)=>button.active = false);
            return {
                ...state,
                newRecord: prevRecordData
            };

        case 'RECORD_UPDATE':
            return {
                ...state
            }
        
        case 'NEWRECORD_SHORTCUT':
            const shortCutRecord = {...state.newRecord};
            shortCutRecord.amount += action.payload.amount;
            return {
                ...state,
                newRecord: shortCutRecord
            };

        case 'NEWRECORD_CATEGORY':
            const newRecordCategory = {...state.newRecord};
            newRecordCategory.category_id = action.payload;
            return {
                ...state,
                newRecord: newRecordCategory
            };

        case 'BALANCE_UPDATE':
            return {
                ...state,
                earntTotal: action.payload.earnttotal,
                spentTotal: action.payload.spenttotal
            }

        default:
            return state;
    }
}