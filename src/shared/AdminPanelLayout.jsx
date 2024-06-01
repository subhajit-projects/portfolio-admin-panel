import { Outlet } from "react-router-dom";
import { Container } from 'react-bootstrap';
import HeadNavbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useSelector } from "react-redux";

const AdminPanelLayout = () => {
    const isSidePanel = useSelector(state => state.sidebar);

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
}

export default AdminPanelLayout;