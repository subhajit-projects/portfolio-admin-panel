import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Row, Col, Button, Table, Form } from 'react-bootstrap';
import style from '../../assets/admin.module.css';

const AdminDetails = () => {
    const params = useParams();
    return (
        <Form>
            {/* {params.admin_id} */}
            <Row>
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
            </Row>
        </Form>
    )
}

export default AdminDetails;