var session_name = 'portfolio-adminpanel-user'

export const IsLoggedIn = () => {
    return sessionStorage.getItem(session_name) !== null;
}

export const setLoggedIn = (loginData) => {
    sessionStorage.setItem(session_name, JSON.stringify(loginData))
}