import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './HeaderNav.css';
import OffCanvasExample from './ResponsiveNav';

function HeaderNav() {

    const cart = useSelector((state) => state.cart.cart)

    return (
        <>
            <Container fluid className='header-nav'>
                <Container>
                    <Row className="justify-content-between align-items-center header-nav-container">
                        <Col md={6} sm={12} >
                            <NavLink to='/' className="link">Home</NavLink>
                            <NavLink to='/' className="link">About us</NavLink>
                            <NavLink to='/' className="link">contact us</NavLink>
                            <NavLink to='/' className="link">blog</NavLink>
                        </Col>
                        <Col md={6} sm={12} className="text-md-end text-sm-center" >
                            <NavLink to='/' className="link">my account</NavLink>
                            <NavLink to='/' className="link">Hello , guest</NavLink>
                            <NavLink to='/shoppingCart' className="link">
                                <i className="bi bi-cart3 cart-icon"></i> Shopping cart ({cart.length})
                            </NavLink>
                        </Col>
                    </Row>
                </Container>
            </Container >

            <Container className='responsive-header'>
                <Row className='justify-content-center align-items-center'>
                    <Col xs={2} className="text-center">
                        <OffCanvasExample />
                    </Col>
                    <Col xs={8} className="text-center">
                        <h1 className='header-title'>FashionHub</h1>
                    </Col>
                    <Col xs={2} className="text-center">
                        <i class="bi bi-cart-fill cart-icon"></i>
                    </Col>
                </Row>
            </Container>


        </>
    );
}

export default HeaderNav;
