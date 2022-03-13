import React, { useState } from 'react';
import { Button, NavLink, Offcanvas } from 'react-bootstrap';
import './ResponsiveNav.css'

function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
        <>
            <Button variant="primary" onClick={toggleShow} className="me-2 hamburg-icon">
                <i className="bi bi-list"></i>
            </Button>
            <Offcanvas show={show} onHide={handleClose} scroll backdrop placement='end' style={{ width: "50%" }}>
                <Offcanvas.Body>
                    <div className='sidebar'>
                        <div className='sidebar-close'>
                            <button onClick={() => setShow(false)}><i className="bi bi-x-lg"></i></button>
                        </div>
                        <div className='sidebar-menu'>
                            <h1>Menu Items</h1>
                            <NavLink to='/' className="link2">Home</NavLink>
                            <NavLink to='/' className="link2">About us</NavLink>
                            <NavLink to='/' className="link2">contact us</NavLink>
                            <NavLink to='/' className="link2">blog</NavLink>
                        </div>
                        <div className='sidebar-categories'>
                            <h1>categories</h1>
                            <NavLink to='/men' className='link2'>Men</NavLink>
                            <NavLink to='/women' className='link2'>Women</NavLink>
                            <NavLink to='/clothes' className='link2'>Clothes</NavLink>
                            <NavLink to='/watch' className='link2'>Watch</NavLink>
                            <NavLink to='/shoes' className='link2'>Shoes</NavLink>
                        </div>
                        <div className='sidebar-account'>
                            <h1>User</h1>
                            <NavLink to='/' className="link2">my account</NavLink>
                            <NavLink to='/' className="link2">Hello , guest</NavLink>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OffCanvasExample;

