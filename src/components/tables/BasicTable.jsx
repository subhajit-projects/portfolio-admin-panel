import React from "react";
import { Row, Col, Button, Table, Form } from 'react-bootstrap';
import style from '../../assets/basicTable.module.css'

const BasicTable = (props) => {
    return (
        <>
            <Row>
                <Col md={4} className='mb-4'>
                    <Form.Control className={style.table} type="text" placeholder="search by admin name" />
                </Col>
                <Col md={2}>
                    <select className={`form-select `+ style.table_status} aria-label="Default select example" defaultValue="">
                        <option value="">Status</option>
                        <option value="A">Active</option>
                        <option value="I">Inactive</option>
                        <option value="S">Suspended</option>
                    </select>
                </Col>
            </Row>
            <Table bordered hover size="sm">
                <thead>
                    {/* <tr>
                        <th style={{}}>Admin ID</th>
                        <th>Name</th>
                        <th style={{width: '220px'}}>Action</th>
                    </tr> */}
                    <tr>
                        {props.header.map((data, key) => {
                            return <th key={key} style={data.style}>{data.title}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((data, key) => {
                        return (
                            <tr key={key}>
                                {data.data.map((tableRawData, key) => {
                                    return <td key={key}>{tableRawData}</td>
                                })}
                            </tr>
                        )
                    })}
                    {/* <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>
                            <Button variant="success" size="sm" onClick={() => props.adminDetailsId('8585812334')}>Edit</Button> &nbsp;
                            <Button variant="danger" size="sm">In Active</Button> &nbsp;
                            <Button variant="warning" size="sm">Active</Button> &nbsp; */}
                            {/* <Button variant="danger" size="sm">Suspended</Button> &nbsp; */}
                        {/* </td>
                    </tr> */}
                </tbody>
            </Table>
        </>
    )
}

export default BasicTable;