import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";
import "../assets/navProfileName.css";

const NavProfileName = () => {
    const navbarContent = useSelector(state => state.navbarContent);
    return (
        <div className="profileLook">
            <FontAwesomeIcon className="icon" icon={faUserTie} />
            <span>{ navbarContent.profile_name.length > 5 ? navbarContent.profile_name.substring(0, 5)+'...' : navbarContent.profile_name }</span>
        </div>
    )
}

export default NavProfileName;