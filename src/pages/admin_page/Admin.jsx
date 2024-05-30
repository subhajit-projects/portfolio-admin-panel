import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { Row, Col, Button, Table, Form } from 'react-bootstrap';
import AdminTable from '../../components/admin_table/AdminTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import style from '../../assets/admin.module.css';

const Admin = () => {
    const navigate = useNavigate()
    return(
        <div>
            <Row>
                <Col md={4} className='mb-4'>
                    <Form.Control className={style.admin} type="text" placeholder="search by admin name" />
                </Col>
                <Col md={1}>
                    <select class={`form-select `+ style.admin_status} aria-label="Default select example">
                        <option selected>Status</option>
                        <option value="A">Active</option>
                        <option value="I">Inactive</option>
                        <option value="S">Suspended</option>
                    </select>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <AdminTable adminDetailsId={(id) => {navigate(id)}} />
                </Col>
            </Row>
            <Button title='Add new admin' variant="primary" className={style.floating}><span><FontAwesomeIcon className="icon" icon={faPlus} /></span></Button>
        </div>
    )
}

export default Admin;