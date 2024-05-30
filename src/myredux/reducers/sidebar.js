const SitebarState = {
    sidebarOn: true
};

const sidebarReducer = (state = SitebarState, action) => {
    const newState = {...state};
    switch (action.type) {
        case '0':
            newState.sidebarOn = !state.sidebarOn
            return newState;
        case 'alternative':
            state.sidebarOn = true;
            return newState;
        default:
            newState.sidebarOn = state.sidebarOn
            return newState;
    }
    // return state.sidebarOn;
    {/*newState.sidebarOn = !state.sidebarOn
    return newState;*/}
    // if(action.type === "0") {
    //     newState.sidebarOn = !state.sidebarOn
    //     return newState;
    // }
    // newState.sidebarOn = state.sidebarOn
    // return newState;
}

export default sidebarReducer;