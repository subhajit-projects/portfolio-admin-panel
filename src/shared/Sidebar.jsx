import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { ChangeCurrentRoute } from "../myredux/actions/ChangeCurrentRoute";
import { ChangeSidebarAction } from '../myredux/actions/ChangeSitebarAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faAd, faCartArrowDown, faClipboardList, faCubes, faUserShield, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import "../assets/sidebar.css";

const Sidebar = () => {    
    const isSidePanel = useSelector(state => state.sidebar);
    const [item, setItem] = useState(false);
    const dispatch = useDispatch();
    return (
        <nav className={`side_panel`+(isSidePanel.sidebarOn ? `` : ` active`)}>
            <div className="side_panel_head">
                <span className="head_icon"><FontAwesomeIcon className="icon" icon={faAd} /></span>
                <span className="head_text">Main Admin panel</span>
            </div>
            <div className="side_panel_menu">
                <ul>
                    <li>
                        <NavLink to="/dashboard" onClick={() => {dispatch(ChangeCurrentRoute("/dashboard"));}}>
                            <span><FontAwesomeIcon className="icon" icon={faChartLine} /></span>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/experience" onClick={() => {dispatch(ChangeCurrentRoute("/experience"));}}>
                            <span><FontAwesomeIcon className="icon" icon={faBriefcase} /></span>
                            <span>Experience</span>
                        </NavLink>
                    </li>
                    <li className="multiple">
                        <a className="" onClick={() => {setItem(!item); return false;}}>
                            <span><FontAwesomeIcon className="icon" icon={faCartArrowDown} /></span>
                            <span>Product</span>
                        </a>
                        <ul className={(item ? "show" : "")}>
                            <li>
                                <NavLink to="/item" onClick={() => {dispatch(ChangeCurrentRoute("/item"))}}>
                                    <span><FontAwesomeIcon className="icon" icon={faChartLine} /></span>
                                    <span>Item</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/category">
                                    <span><FontAwesomeIcon className="icon" icon={faClipboardList} /></span>
                                    <span>Category</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/stock">
                                    <span><FontAwesomeIcon className="icon" icon={faCubes} /></span>
                                    <span>Stock</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/manage-admin" onClick={() => {dispatch(ChangeCurrentRoute("/dashboard"));}}>
                            <span><FontAwesomeIcon className="icon" icon={faUserShield} /></span>
                            <span>Admin</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar;



// https://www.youtube.com/watch?v=gdA1G5h-D80
// https://www.youtube.com/watch?v=O9l75KOB2pE