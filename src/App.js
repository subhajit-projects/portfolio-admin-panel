import React, { useEffect } from 'react';
// import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { ChangeCurrentRoute } from "./myredux/actions/ChangeCurrentRoute";
import { Container } from 'react-bootstrap';
import HeadNavbar from './shared/Navbar';
import Sidebar from './shared/Sidebar';
import Footer from './shared/Footer';
import AppRoutes from './AppRoutes';
import './App.css';
//require('dotenv').config();

function App() {
  const isSidePanel = useSelector(state => state.sidebar);
  const dispatch = useDispatch();
  const changeUrl = useSelector(state => state.currentRoute)
    
  useEffect(() => {
    if(changeUrl.current_url === undefined) {
      // console.log(window.location, changeUrl, window.location.pathname);
      dispatch(ChangeCurrentRoute(window.location.pathname));
    }
  });

  const navBar = ( changeUrl.current_url === "/login" ? `` : <HeadNavbar /> )
  const sideBar = ( changeUrl.current_url === "/login" ? `` : <Sidebar /> )

  // && changeUrl.current_url === undefined 

  return (
    <BrowserRouter>
      {/* {
        ( changeUrl.current_url !== "/login" ? 
        <div className="app container-scroller">
          { navBar }
          <div className="page-body-wrapper">
            { sideBar }
            <div className={`main-panel `+(isSidePanel.sidebarOn ? `` : `active`)}>
              <div className="content-wrapper">
                <div className="innerpages_main">
                  <Container fluid className="innerpages">
                    <AppRoutes/>
                  </Container>
                </div>
              </div>
              <Container fluid>
                <Footer />
              </Container>
            </div>
          </div>
        </div> 
        : 
        <div>
          <AppRoutes/>
        </div> )
      } */}
      <AppRoutes />
      {/* <div className="app container-scroller">
        { navBar }
        <div className="page-body-wrapper">
          { sideBar }
          <div className={`main-panel `+(isSidePanel.sidebarOn ? `` : `active`)}>
            <div className="content-wrapper">
              <AppRoutes/>
            </div>
            <Container fluid>
              <Footer />
            </Container>
          </div>
        </div>
      </div> */}
    </BrowserRouter>
  );
}

export default App;
