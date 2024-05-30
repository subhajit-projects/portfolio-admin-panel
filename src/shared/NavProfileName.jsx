import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import "../assets/navProfileName.css";

const NavProfileName = () => {
    return (
        <div className="profileLook">
            <FontAwesomeIcon className="icon" icon={faUserTie} />
            <span>Name of...</span>
        </div>
    )
}

export default NavProfileName;