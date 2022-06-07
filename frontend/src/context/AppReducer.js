export const AppReducer = (state, action) => {
    switch(action.type) {
        case 'NAVBAR_CLICK':
            const newNavBarItemsState = state.navBarItems;
            newNavBarItemsState.forEach((item) => item.active = false);
            newNavBarItemsState[action.payload].active = true;
            return {...state, navBarItems: newNavBarItemsState};

        default:
            return state;
    }
}