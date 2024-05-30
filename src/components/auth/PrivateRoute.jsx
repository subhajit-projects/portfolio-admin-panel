import { Navigate } from "react-router-dom";
import AdminLayout from "../../shared/AdminLayout";

const PrivateRoute = () => {
    let isLoggedIn = true;

    if(isLoggedIn) {
        return <AdminLayout />
    } else {
        return <Navigate to={"/login"}/>
    }
}

export default PrivateRoute;