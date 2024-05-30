import { Navigate, Outlet } from "react-router-dom";
import { Container } from 'react-bootstrap';
import HeadNavbar from '../../shared/Navbar';
import Sidebar from '../../shared/Sidebar';
import Footer from '../../shared/Footer';
import { useSelector, useDispatch } from "react-redux";
import AdminLayout from "../../shared/AdminLayout";

const PrivateRoute = () => {
    let isLoggedIn = false;
    const isSidePanel = useSelector(state => state.sidebar);

    if(isLoggedIn) {
        return <AdminLayout />
    } else {
        return <Navigate to={"/login"}/>
    }
}

export default PrivateRoute;