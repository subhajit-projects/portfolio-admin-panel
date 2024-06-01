import { Navigate } from "react-router-dom";
import AdminPanelLayout from "../../shared/AdminPanelLayout";
import { IsLoggedIn } from "./Auth";

const PrivateRoute = () => {

    if(IsLoggedIn()) {
        return <AdminPanelLayout />
    } else {
        return <Navigate to={"/login"}/>
    }
}

export default PrivateRoute;