import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import styles from "../assets/navMessage.module.css";

const NavMessage = () => {
    return (
        <div className={styles.message}>
            <FontAwesomeIcon className={styles.message_icon} icon={faEnvelope} />
            <span className={styles.notify}></span>
        </div>
    )
}

export default NavMessage;