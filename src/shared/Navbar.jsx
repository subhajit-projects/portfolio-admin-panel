import React from "react";
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { ChangeSidebarAction } from '../myredux/actions/ChangeSitebarAction';
// import { ChangeCurrentRoute } from "../myredux/actions/ChangeCurrentRoute";
import NavProfileName from "./NavProfileName";
import NavMessage from "./NavMessage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import "../assets/navbar.css";
import { setLoggedOut } from "../components/auth/Auth";

const HeadNavbar = () => {
    const isSidePanel = useSelector(state => state.sidebar);
    const dispatch = useDispatch();
    return (
        <>
        <Navbar sticky="top" className={`gap_side_panel`+(isSidePanel.sidebarOn ? `` : ` active`)} collapseOnSelect bg="light" expand="md">
            <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Brand><FontAwesomeIcon icon={faBars} onClick={() => dispatch(ChangeSidebarAction())} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />                    
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav className="profile_drop_down">
                        {/* <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link> */}
                        <Nav.Link href="#memes2" className="notification">
                            <FontAwesomeIcon className="message_icon" icon={faBell} />
                            <span className="notify"></span>
                        </Nav.Link>
                        <NavDropdown title={<NavMessage />} id="dropdown-menu-align-responsive-1" align={{ lg: 'end' }}>
                            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Change Password</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<NavProfileName />} id="dropdown-menu-align-responsive-1" align={{ lg: 'end' }}>
                            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Change Password</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/lock">Lock</NavDropdown.Item>
                            {/* <NavDropdown.Item href="/login">Logout</NavDropdown.Item> */}
                            {/* <NavLink to="/login" className="dropdown-item" onClick={() => {dispatch(ChangeCurrentRoute("/login"));  dispatch(ChangeSidebarAction("alternative"));}}>Logout</NavLink> */}
                            <NavLink to="/login" className="dropdown-item" onClick={() => {setLoggedOut();}}>Logout</NavLink>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            {/* <Container>
                
            </Container> */}
        </Navbar>
        </>
    )
}

export default HeadNavbar;