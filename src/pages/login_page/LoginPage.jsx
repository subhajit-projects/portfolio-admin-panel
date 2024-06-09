import React, { useEffect, useState } from "react";
import { Container , Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faAd, faCartArrowDown, faClipboardList, faCubes } from '@fortawesome/free-solid-svg-icons'
import style from "../../assets/login.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ChangeCurrentRoute } from "../../myredux/actions/ChangeCurrentRoute";
import LoginService from "../../services/LoginService";

const LoginPage = () => {
    const [userDetails, setUserDetails] = useState({user_name: "", password: ""})
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logInAction = () => {
        // dispatch(ChangeCurrentRoute("/dashboard"))
        // navigate("/dashboard")

        const resp = LoginService('/auth/', userDetails)
        resp.then( r => {
            // console.log("From component", r)
        }).catch( e => {
            // console.log("From component error", e)
        })
        
    }
    
    const onChangeHandlaer = (e) => {
        const copy = {...userDetails};
        if(e.target.name === "user_name") {
            copy.user_name = e.target.value;
        }
        if(e.target.name === "password") {
            copy.password = e.target.value;
        }
        setUserDetails(copy);
    }

    useEffect(() => {

    }, [userDetails])

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
                        <Form.Control type="text" name="user_name" placeholder="Enter user id" value={userDetails.user_name} onChange={onChangeHandlaer} />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Control type="password" name="password" placeholder="Enter password" value={userDetails.password} onChange={onChangeHandlaer} />
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