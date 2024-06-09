import React, { useEffect, useState } from "react";
import { Container , Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faAd, faCartArrowDown, faClipboardList, faCubes } from '@fortawesome/free-solid-svg-icons'
import style from "../../assets/login.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ChangeCurrentRoute } from "../../myredux/actions/ChangeCurrentRoute";
import LoginService from "../../services/LoginService";
import { Controller, useForm } from "react-hook-form";

const LoginPage = () => {
    const [userDetails, setUserDetails] = useState({user_name: "", password: ""});
    const [isFormValid, setIsFormValid] = useState(false);
    const [errmsg, setErrMsg] = useState("");
    const [show, setShow] = useState(false);

    const {control, handleSubmit, setError, formState: {errors}} = useForm({
        defaultValues: {
            user_name: "",
            password: ""
        },
    });

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

    const submitLogin = (event) => {
        console.log(event)
        // setError("user_name", {type: "", message: "Not found"})  // Code ok. Working

        // API CALL
        const resp = LoginService('/auth/', event)
        resp.then( r => {
            console.log("From component", r)
        }).catch( e => {
            console.log("From component error", e)
            const resp = e.response.data
            setError(resp.error.field_name, {message: resp.error.message})
        })
        

        // const form = event.currentTarget;
        
        // event.preventDefault();
        // event.stopPropagation();
        // console.log("Form symit hadler: ", form.checkValidity())
        // console.log(form)
        // if (form.checkValidity() === false) {
        //     event.preventDefault();
        //     event.stopPropagation();
        // }
        // setErrMsg("aaaaaaaaaaa")
        // setIsFormValid(true);
    }
    
    const onChangeHandlaer = (e) => {
        const copy = {...userDetails};
        const {name, value} = e.target;
        setUserDetails({...userDetails, [name]: value})

        // if(e.target.name === "user_name") {
        //     copy.user_name = e.target.value;
        // }
        // if(e.target.name === "password") {
        //     copy.password = e.target.value;
        // }
        // setUserDetails(copy);
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
                {/* <Form noValidate className={style.loginForm} validated={isFormValid} onSubmit={handleSubmit(submitLogin)}> */}
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
                                {/* User name required. */}
                                {(errors.user_name!== undefined) ? errors.user_name.message : ""}
                                {/* {console.log(errors.user_name)} */}
                            </Form.Control.Feedback>
                        {/* <Form.Control 
                            type="text" 
                            name="user_name" 
                            placeholder="Enter user id" 
                            value={userDetails.user_name} 
                            onChange={onChangeHandlaer}
                            isInvalid={errmsg.length>0}

                            />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid username (alphanumeric
                            characters only).
                            {errmsg}
                        </Form.Control.Feedback> */}
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
                        {/* <Form.Control type="password" name="password" placeholder="Enter password" value={userDetails.password} onChange={onChangeHandlaer} /> */}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="show_passwordx">
                        <Form.Check type="checkbox" label="Show password" onClick={() => {setShow(!show)}} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="show_passwordx">
                        {/* <Button variant="secondary" className={style.login_btn} onClick={logInAction}>Login</Button> */}
                        <Button variant="secondary" type="submit" className={style.login_btn}>Login</Button>
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