import React from "react";
import { Container , Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faAd, faCartArrowDown, faClipboardList, faCubes } from '@fortawesome/free-solid-svg-icons'
import style from "../../assets/login.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ChangeCurrentRoute } from "../../myredux/actions/ChangeCurrentRoute";

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logInAction = () => {
        dispatch(ChangeCurrentRoute("/dashboard"))
        navigate("/dashboad")
    }
    return (
        <Container  className={style.loginFormSpace}>
            <h5>Main Admin panel</h5>
            <div className={style.welcome}>
                <h6>Welcome! Admin.</h6>
                <p>Sign in to continue.</p>
            </div>
            <div>
                <Form className={style.loginForm}>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Enter user id" />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="show_passwordx">
                        <Form.Check type="checkbox" label="Show password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="show_passwordx">
                        <Button variant="secondary" className={style.login_btn} onClick={logInAction}>Login</Button>
                    </Form.Group>
                    <Form.Group className={`mb-3 ${ style.forgot_pwd}`}>
                        <h6>Forgot password?</h6>
                    </Form.Group>
                </Form>
            </div>
        </Container >
    )
}

export default LoginPage;