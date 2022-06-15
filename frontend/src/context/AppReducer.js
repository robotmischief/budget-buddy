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

        case 'RECORDS_ERROR':
            return {
                ...state,
                error: action.payload.error
            }

        default:
            return state;
    }
}