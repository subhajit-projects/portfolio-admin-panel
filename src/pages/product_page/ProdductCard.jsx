import React from "react";
import { Row, Col, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'
import product_img from './product_demo.jpg';
import style from "../../assets/product.module.css";

const ProductCard = () => {
    return (
        <Col md={3} className="mb-2">
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" style={{ height: '180px' }} src={product_img} />
                <Card.Body>
                    <Card.Title><h6>Product Title</h6></Card.Title>
                    <Card.Text>
                        <Row>
                            <Col md={6}>
                                <span className={style.currentPrice}><FontAwesomeIcon className="icon" icon={faRupeeSign} /> 123.00 </span>
                                <span className={style.linethrough}><FontAwesomeIcon className="icon" icon={faRupeeSign} /> 123.00 </span>
                            </Col>
                            <Col md={6} className={style.itemSize}>
                                <span>S</span>
                                <span>M</span>
                                <span>L</span>
                            </Col>
                        </Row>
                        <span className={"bg-primary text-white "+ style.categoryStyle}>Category name</span>
                    </Card.Text>
                    <Button size="sm" variant="success">Stock list</Button>
                    &nbsp;
                    <Button size="sm" variant="secondary">Block</Button>
                    &nbsp;
                    <Button size="sm" variant="danger">Delete</Button>
                    <Button style={{ float: 'right' }} size="sm" variant="info">Edit</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProductCard;