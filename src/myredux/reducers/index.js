import sidebarReducer from './sidebar';
import CurrentRouterReducer from './CurrentRouter';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    sidebar: sidebarReducer,
    currentRoute: CurrentRouterReducer,
})

export default allReducers;