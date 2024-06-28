import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { Row, Col, Button, Table, Form } from 'react-bootstrap';
import Datetime from 'react-datetime';
import moment from 'moment';
import "react-datetime/css/react-datetime.css";
import style from '../../assets/commonFormFields.css';
import { Controller, useForm } from 'react-hook-form';

const ExperienceForm = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [fields, setFields] = useState({
        designation: "",
        companyName: "",
        startDate: ""
    });
    const [formMode, setFormMode] = useState("add")

    useEffect(() => {
        if(params.experience_id !== "add") {
            setFormMode("edit")
        }
    }, []);

    const prevPage = () => {
        navigate(-1)
    }

    const datetimeInputProps = {
        placeholder: 'Work Start Date',
    }
    const blockStartDate = (current) => {
        var yesterday = moment().subtract( 1, 'day' );
        return current.isBefore( yesterday );
    }
    const endDatetimeInputProps = {
        placeholder: 'Work End Date',
    }

    const { control, handleSubmit, setError, formState: {errors} } = useForm({
        defaultValues: fields
    });

    const submitExperince = (event) => {
        console.log(event)
    }

    return (
        <Form onSubmit={handleSubmit(submitExperince)}>
            {/* {params.admin_id} */}
            <Row>
                <Col md={12}>
                    <Form.Group className="mb-3" controlId="designation">
                        <Form.Label>Designation</Form.Label>
                        <Controller
                            name="designation"
                            control={control}
                            rules={{
                                required: {value: true, message: "Designation Required"},
                                minLength: {value: 4, message: "Please enter valid Designation"}
                            }}
                            render={({field}) => (
                                <Form.Control 
                                    type="text" 
                                    className={style.textField}
                                    isInvalid={errors.designation}
                                    {...field}
                                    placeholder="Enter your designation"
                                />)}
                        />
                        {/* <Form.Control className={style.textField} type="text" placeholder="Enter your designation" /> */}
                        <Form.Control.Feedback type="invalid">
                            {(errors.designation!== undefined) ? errors.designation.message : ""}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Form.Group className="mb-3" controlId="company">
                        <Form.Label>Company Name</Form.Label>                        
                        <Controller
                            name="companyName"
                            control={control}
                            rules={{
                                required: {value: true, message: "Company Name Required"},
                                minLength: {value: 4, message: "Please enter valid company name"}
                            }}
                            render={({field}) => (
                                <Form.Control 
                                    type="text" 
                                    className={style.textField}
                                    isInvalid={errors.companyName}
                                    {...field}
                                    placeholder="Enter your company name"
                                />)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {(errors.companyName!== undefined) ? errors.companyName.message : ""}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3" controlId="startDate">
                        <Form.Label>Start Date</Form.Label>
                        {/*<Controller
                            name="startDate"
                            control={control}
                            rules={{
                                required: {value: true, message: "Company Name Required"}
                            }}
                            render={({field}) => (
                                <Datetime 
                                    inputProps={ datetimeInputProps } 
                                    timeFormat={ false }
                                    dateFormat={ "DD-MMM-YYYY" }
                                    closeOnSelect={true}
                                    isValidDate={ blockStartDate }
                                    isInvalid={errors.startDate}
                                    {...field}
                                />)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {(errors.startDate!== undefined) ? errors.startDate.message : ""}
                        </Form.Control.Feedback>*/}
                        <Datetime 
                            inputProps={ datetimeInputProps } 
                            timeFormat={ false }
                            dateFormat={ "DD-MMM-YYYY" }
                            closeOnSelect={true}
                            isValidDate={ blockStartDate }
                        />
                        
                        <Form.Check inline name="box" id="asd" type="checkbox" label="Continue" className={style.textField} />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3" controlId="endDate">
                        <Form.Label>End Date</Form.Label>
                        <Datetime 
                            inputProps={ endDatetimeInputProps } 
                            timeFormat={ false }
                            dateFormat={ "DD-MMM-YYYY" }
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Form.Group className="mb-3" controlId="responsibility">
                        <Form.Label>Responsibility</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter your responsibility / work" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="text-center">
                    {formMode === "add" ? <Button variant="success" size="sm" type="submit">Save</Button> : <Button variant="success" size="sm" type="submit">Edit</Button>} &nbsp;
                    <Button variant="warning" size="sm" onClick={prevPage}>Back</Button> &nbsp;
                </Col>
            </Row>
            {/* <Row>
                <Col md={1}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Honorific</Form.Label>
                        <Form.Select className={style.dropDown} aria-label="Default select example">
                            <option>DR.</option>
                            <option value="1">MR.</option>
                            <option value="2">MRS.</option>
                            <option value="3">MISS.</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control className={style.textField} type="text" placeholder="First name" />
                        <Form.Text className="text-muted">
                            Also enter middle name if any
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control className={style.textField} type="text" placeholder="Last name" />
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select className={style.dropDown} aria-label="Default select example">
                            <option>Select gender</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={1}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Status</Form.Label>
                        <Form.Select className={style.dropDown} aria-label="Default select example">
                            <option value="1">Active</option>
                            <option value="2">Inactive</option>
                            <option value="2">Suspended</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Id</Form.Label>
                        <Form.Control className={style.textField} type="text" placeholder="username@domainname.subdomain" />
                        <Form.Text className="text-muted">
                            Remember this will be your user id
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className={style.textField} type="text" placeholder="Auto Genarated" disabled={true} />
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>&nbsp;</Form.Label>
                        <Form.Check type="switch" label="Invitation mail" checked={true} disabled={true} className={style.textField} />
                    </Form.Group>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col md={5}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Role / Permission</Form.Label>
                        <Form.Select className={style.dropDown} aria-label="Default select example">
                            <option value="1">Admin</option>
                            <option value="2">Super Admin</option>
                            <option value="2">Front desk</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <hr />
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Check type="switch" label="Product" className={style.textField} />
                </Col>
                <Col md={2}>
                    <Form.Check type="switch" label="Add" className={style.textField} />
                </Col>
                <Col md={2}>
                    <Form.Check type="switch" label="View" className={style.textField} />
                </Col>
                <Col md={2}>
                    <Form.Check type="switch" label="Delete" className={style.textField} />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Check type="switch" label="Category" className={style.textField} />
                </Col>
                <Col md={2}>
                    <Form.Check type="switch" label="Add" className={style.textField} />
                </Col>
                <Col md={2}>
                    <Form.Check type="switch" label="View" className={style.textField} />
                </Col>
                <Col md={2}>
                    <Form.Check type="switch" label="Delete" className={style.textField} />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Check inline name="box" id="asd" type="checkbox" label="Order" className={style.textField} />
                </Col>
                <Col md={2}>
                    <Form.Check type="switch" label="Modify" className={style.textField} />
                </Col>
                <Col md={2}>
                    <Form.Check type="switch" label="View" className={style.textField} />
                </Col>
                <Col md={2}>
                    <Form.Check type="switch" label="Cancel" className={style.textField} />
                </Col>
            </Row> */}
        </Form>
    )
}

export default ExperienceForm;