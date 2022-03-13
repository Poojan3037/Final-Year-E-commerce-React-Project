import React, { useEffect } from 'react'
import { Col, Container, Nav, NavLink, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/home/Footer/Footer'
import HeaderFooter from '../components/home/header/HeaderFooter'
import HeaderNav from '../components/home/header/HeaderNav'
import HeaderSearch from '../components/home/header/HeaderSearch'
import Product from '../components/home/Products/Product'
import { productSliceAction } from '../slices/productSlice'
import './common.css';

function Watch() {

    const dispatch = useDispatch();

    const products = useSelector((state) => state.products.copyProducts);
    const loading = useSelector((state) => state.products.loading);


    const getAllProducts = () => {

        dispatch(productSliceAction.getAllWatch())

    }

    const getMenWatch = () => {

        dispatch(productSliceAction.getMenWatch())

    }

    const getWomenWatch = () => {

        dispatch(productSliceAction.getWomenWatch())

    }


    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <>
            {/* Header */}
            <HeaderNav />
            <HeaderSearch />
            <HeaderFooter />

            <Container fluid>
                <Row className="justify-content-center align-items-center product-heading my-4" >
                    <Col md={4} className="text-center"><h2>Watch</h2></Col>
                </Row>
            </Container>

            <Container className='main-container'>
                <Row className='justify-content-evenly'>
                    <Col className='sidebar' md={2}>
                        <button className='sidebar-btn' onClick={getAllProducts}>All Products</button>
                        <button className='sidebar-btn' onClick={getMenWatch}>Men</button>
                        <button className='sidebar-btn' onClick={getWomenWatch}>Women</button>
                    </Col>
                    <Col md={10} >{
                        loading && <h1>....Loading....</h1>
                    }
                        {
                            !loading &&
                            <Row>
                                {
                                    products.length > 0 && products.map((item) => {
                                        return <Product product={item} />
                                    })
                                }
                            </Row>
                        }
                    </Col>
                </Row>

            </Container>

            <Footer />

        </>
    )
}

export default Watch