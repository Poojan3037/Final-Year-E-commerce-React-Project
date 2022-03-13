import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Product.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { productSliceAction } from '../../../slices/productSlice';

function Product(props) {

    const { img, colors, title, price } = props.product;

    const dispatch = useDispatch();

    const navigate = useNavigate();

    AOS.init({
        offset: 400, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease-in', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom',
    });


    const openShowProduct = () => {
        navigate('/productDetails');
        dispatch(productSliceAction.setSingleProductDetails(props.product))

    }

    return (
        <>
            <Col md={3} data-aos="fade-up">
                <Card className='text-center product-card' >
                    <Card.Img variant="top" src={img} className="product-img" />
                    <Card.Body>
                        <Card.Title><h5>{title}</h5></Card.Title>
                        <Card.Text>
                            {/* <h4>AWG Men's Cotton Regular Fit Solid Polo Neck T-Shirt</h4> */}
                            <h1 className='price-text'>${price}</h1>
                        </Card.Text>
                        <button className='product-btn' onClick={openShowProduct}>Add To Cart</button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default Product;
