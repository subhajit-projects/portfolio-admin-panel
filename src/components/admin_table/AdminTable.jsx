import React from "react";
import { Row, Col, Button, Table, Form } from 'react-bootstrap';

const AdminTable = (props) => {
    return (
        <Table bordered hover size="sm">
            <thead>
                <tr>
                    <th style={{width: '150px'}}>Admin ID</th>
                    <th>Name</th>
                    <th style={{width: '220px'}}>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>
                        <Button variant="success" size="sm" onClick={() => props.adminDetailsId('8585812334')}>Edit</Button> &nbsp;
                        <Button variant="danger" size="sm">In Active</Button> &nbsp;
                        <Button variant="warning" size="sm">Active</Button> &nbsp;
                        {/* <Button variant="danger" size="sm">Suspended</Button> &nbsp; */}
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

export default AdminTable;