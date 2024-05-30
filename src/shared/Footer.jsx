import React from "react";
import { Row, Col } from 'react-bootstrap';
import "../assets/footer.css";

const Footer = () => {
    return (
        <footer>
            <Row>
                <Col md={6} className="left_foot">&copy; All rights reserve. </Col>
                <Col md={6} className="right_foot">Prowered by <a>Test name</a></Col>
            </Row>
        </footer>
    )
}

export default Footer;