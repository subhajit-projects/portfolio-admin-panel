import React, { useState } from "react";
import { Container , Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import style from "../../assets/login.module.css";
import { useNavigate } from "react-router-dom";
import LoginService from "../../services/LoginService";
import { Controller, useForm } from "react-hook-form";
import { setLoggedIn } from "../../components/auth/Auth";
import { useDispatch } from "react-redux";
import { NavbarProfileName } from "../../myredux/actions/NavbarContentAction";
import { SuccessToast } from "../../shared/ToastMessage";

const LoginPage = () => {
    const [show, setShow] = useState(false);

    const {control, handleSubmit, setError, formState: {errors}} = useForm({
        defaultValues: {
            user_name: "test12",
            password: "1234"
        },
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitLogin = (event) => {
        // console.log(event)
        // setError("user_name", {type: "", message: "Not found"})  // Code ok. Working

        // API CALL
        const resp = LoginService('/auth/', event)
        resp.then( r => {
            let resp = r.data;
            let {token} = resp.data;
            setLoggedIn(token);
            const {full_name} = resp.data.user
            dispatch(NavbarProfileName(full_name));
            SuccessToast("Login Success")
            navigate("/dashboard")
        }).catch( e => {
            if(e.response !== undefined) {
                const resp = e.response.data
                setError(resp.error.field_name, {message: resp.error.message})
            } else {
                console.log("Network error")
            }
        });

    }

    return (
        <Container  className={style.loginFormSpace}>
            <h5>Main Admin panel</h5>
            <div className={style.welcome}>
                <h6>Welcome! Admin.</h6>
                <p>Sign in to continue.</p>
            </div>
            <div>
                <Form className={style.loginForm} onSubmit={handleSubmit(submitLogin)}>
                    <Form.Group className="mb-3">
                        <Controller
                            name="user_name"
                            control={control}
                            rules={{
                                required: {value: true, message: "User name Required"},
                                minLength: {value: 4, message: "Please enter valid user name"}
                            }}
                            render={({field}) => (
                                <Form.Control 
                                    type="text" 
                                    isInvalid={errors.user_name}
                                    {...field}
                                    placeholder="Enter user id" 
                                />)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {(errors.user_name!== undefined) ? errors.user_name.message : ""}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Controller
                            name="password" 
                            control={control}
                            rules={{required: true}}
                            render={({field}) => (
                                <Form.Control 
                                    type={show ? "text" : "password"}
                                    isInvalid={errors.password}
                                    {...field}
                                    placeholder="Enter password" 
                                />)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {(errors.password!== undefined) ? errors.password.message : ""}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="show_passwordx">
                        <Form.Check type="checkbox" label="Show password" onClick={() => {setShow(!show)}} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="show_passwordx">
                        <Button variant="secondary" type="submit" className={style.login_btn}><FontAwesomeIcon icon={faRightToBracket} /> Login</Button>
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


// https://www.youtube.com/watch?v=adRIZPQ9atk