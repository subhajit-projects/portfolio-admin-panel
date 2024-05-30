import React, { Component } from "react";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import ProductCard from "./ProdductCard";
import { connect } from 'react-redux'
import { ChangeSidebarAction } from '../../myredux/actions/ChangeSitebarAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign, faAd, faCartArrowDown, faClipboardList, faCubes } from '@fortawesome/free-solid-svg-icons'
import product_img from './product_demo.jpg';
import style from "../../assets/product.module.css";

const mapStateToProps = (state) => {
    return {
       counter: state
    };
 };

 const mapDispatchToProps = (dispatch) => {
    return {
       increment: () => dispatch(ChangeSidebarAction()),
    };
 };


class Product extends Component {
    componentDidMount() {
        console.log("adadadasd");
    }
    render() {
        const {counter,increment} = this.props;
        console.log(counter)
        return (
            <>
                <Row>
                    <Col md={12}>
                        <div className={"mb-4 "+style.searchbox}>
                            <input type="search" placeholder="Search by item name" onClick={increment} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <ProductCard />
                    <ProductCard /><ProductCard /><ProductCard /><ProductCard /><ProductCard /><ProductCard /><ProductCard /><ProductCard /><ProductCard /><ProductCard /><ProductCard />
                </Row>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);