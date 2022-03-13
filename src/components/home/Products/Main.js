import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Product from './Product';
import './Main.css'
import { useSelector } from 'react-redux';

function Main() {

    const products = useSelector((state) => state.products.products);

    return (
        <>
            <Container fluid>
                <Row className="justify-content-center align-items-center product-heading" >
                    <Col md={4} className="text-center"><h2>Featured Products</h2></Col>
                </Row>
            </Container>
            <Container className='main-container'>
                <Row>
                    {
                        products.length > 0 && products.map((item) => {
                            return <Product product={item} />
                        })
                    }
                </Row>
            </Container>
        </>
    );
}

export default Main;
