const State = {
    current_url: undefined
};

const CurrentRouterReducer = (state=State, action) => {
    const newState = {...state}
    switch (action.type) {
        case "change_url":
            newState.current_url = action.new_url
            return newState;
        default:
            break;
    }
    return state;
}

export default CurrentRouterReducer;