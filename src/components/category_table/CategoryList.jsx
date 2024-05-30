import React from "react";
import { Row, Col, Button, Table, Form } from 'react-bootstrap';

const CategoryList = () => {
    return (
        <Table bordered hover size="sm">
            <thead>
                <tr>
                    <th style={{width: '150px'}}>sl no.</th>
                    <th>Category Name</th>
                    <th style={{width: '220px'}}>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>
                        <Button variant="success" size="sm">Edit</Button> &nbsp;
                        <Button variant="danger" size="sm">In Active</Button> &nbsp;
                        <Button variant="warning" size="sm">Active</Button> &nbsp;
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

export default CategoryList;