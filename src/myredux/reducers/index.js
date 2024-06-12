import sidebarReducer from './sidebar';
import CurrentRouterReducer from './CurrentRouter';
import { combineReducers } from 'redux';
import NavbarContent from './NavbarContent';

const allReducers = combineReducers({
    sidebar: sidebarReducer,
    currentRoute: CurrentRouterReducer,
    navbarContent: NavbarContent
})

export default allReducers;