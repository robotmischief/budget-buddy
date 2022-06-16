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
                loading: false,
                records: action.payload
            };

        case 'RECORDS_FILTER':
            return {
                ...state,
                listFilter: action.filterBy,
                records: action.payload
            }
        
        case 'RECORDS_NEW':
            console.log(action.payload.test);
            return;
            
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
            newRecordDescription.description = action.payload.description;
            return {
                ...state,
                newRecord: newRecordDescription
            };

        case 'NEWRECORD_CLEAR':
            const clearRecord = {
                amount: 0,
                description: '',
                category: 3,
            };
            return {
                ...state,
                newRecord: clearRecord
            };
        
        case 'NEWRECORD_SHORTCUT':
            const shortCutRecord = {...state.newRecord};
            shortCutRecord.amount += action.payload.amount;
            return {
                ...state,
                newRecord: shortCutRecord
            };

        case 'NEWRECORD_CATEGORY':
            const newRecordCategory = {...state.newRecord};
            newRecordCategory.category = action.payload.category;
            return {
                ...state,
                newRecord: newRecordCategory
            };

        default:
            return state;
    }
}