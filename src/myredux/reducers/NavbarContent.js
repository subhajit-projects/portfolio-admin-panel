const State = {
    profile_name: ""
};

const NavbarContent = (state=State, action) => {
    const newState = {...state}
    switch (action.type) {
        case "initial":
            newState.profile_name = action.profile_name
            return newState;
        default:
            break;
    }
    return state;
}

export default NavbarContent;