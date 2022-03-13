import React from 'react';
import { Col, Container, Nav, NavLink, Row } from 'react-bootstrap';
import './Advertise.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Advertise() {

    AOS.init({
        offset: 400, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease-in', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom',
    });

    return (
        <>
            {/* <Container fluid className='advertise-container'>
            </Container> */}

            <Container>
                <Row className='advertise-links'>
                    <Col md={4} data-aos="fade-right">
                        <NavLink to="/">
                            <div className='men-bg hover-bg'>
                            </div>
                        </NavLink>
                    </Col>
                    <Col md={4} data-aos="fade-down">
                        <NavLink to="/">
                            <div className='watch-bg hover-bg'></div>
                        </NavLink>

                        <NavLink to="/">
                            <div className='shoes-bg hover-bg'></div>
                        </NavLink>

                    </Col>
                    <Col md={4} data-aos="fade-left">
                        <NavLink to="/">
                            <div className='women-bg hover-bg'></div>
                        </NavLink>

                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Advertise;
