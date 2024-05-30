import React, { useEffect } from 'react'
import CategoryList from '../../components/category_table/CategoryList';
import { Row, Col, Button, Table, Form } from 'react-bootstrap';
import style from '../../assets/category.module.css';

const Category = () => {

    return (
        <div>
            <Row>
                <Col md={4} className='mb-4'>
                    <Form.Control className={style.search} type="text" placeholder="search by category name" />
                </Col>
                <Col md={1}>
                    <select class={`form-select `+ style.search_status} aria-label="Default select example">
                        <option selected>Status</option>
                        <option value="1">Active</option>
                        <option value="2">Inactive</option>
                    </select>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <CategoryList />
                </Col>
            </Row>
        </div>
    )
}

export default Category;