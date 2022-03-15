import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './HeaderFooter.css'

function HeaderFooter() {
    return (
        <>
            <Container fluid className='header-footer'>
                <Container>
                    <Row className='justify-content-center align-items-center header-footer-container'>
                        <Col md={6} className="text-center">
                            <NavLink to='/men' className='link'>Men</NavLink>
                            <NavLink to='/women' className='link'>Women</NavLink>
                            <NavLink to='/clothes' className='link'>Clothes</NavLink>
                            <NavLink to='/watch' className='link'>Watch</NavLink>
                            <NavLink to='/shoes' className='link'>Shoes</NavLink>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default HeaderFooter;
