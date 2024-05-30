import { Navigate, Outlet } from "react-router-dom";
import { Container } from 'react-bootstrap';
import HeadNavbar from '../shared/Navbar';
import Sidebar from '../shared/Sidebar';
import Footer from '../shared/Footer';
import { useSelector, useDispatch } from "react-redux";

const AdminLayout = () => {
    let isLoggedIn = true;
    const isSidePanel = useSelector(state => state.sidebar);

    if(isLoggedIn) {
        return (
            <div className="app container-scroller">
          <HeadNavbar />
          <div className="page-body-wrapper">
          <Sidebar />
            <div className={`main-panel `+(isSidePanel.sidebarOn ? `` : `active`)}>
              <div className="content-wrapper">
                <div className="innerpages_main">
                  <Container fluid className="innerpages">
                    <Outlet />
                  </Container>
                </div>
              </div>
              <Container fluid>
                <Footer />
              </Container>
            </div>
          </div>
        </div> 
        )
    } else {
        return <Navigate to={"/login"}/>
    }
}

export default AdminLayout;