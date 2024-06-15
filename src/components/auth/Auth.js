import { useSelector } from "react-redux";
import { ErrorToast } from "../../shared/ToastMessage";

var session_name = 'portfolio-adminpanel-user'

export const IsLoggedIn = () => {
    const navbarContent = useSelector(state => state.navbarContent);
    if (navbarContent.profile_name === "") {
        // Try to refresh the page and redux null
        
        sessionStorage.removeItem(session_name);
    }
    // return sessionStorage.getItem(session_name) !== null && navbarContent.profile_name !== "" ;
    return sessionStorage.getItem(session_name) !== null;
}

export const setLoggedIn = (loginData) => {
    sessionStorage.setItem(session_name, JSON.stringify(loginData))
}


export const setLoggedOut = () => {
    ErrorToast("Logged Out Successful.")
    sessionStorage.removeItem(session_name);
    // reset all redux data
}