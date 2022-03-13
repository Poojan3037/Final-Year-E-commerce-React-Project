import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/home/Footer/Footer';
import HeaderFooter from '../components/home/header/HeaderFooter';
import HeaderNav from '../components/home/header/HeaderNav';
import HeaderSearch from '../components/home/header/HeaderSearch';
import { cartSliceAction } from '../slices/CartSlice';
import './ProductDetails.css'



function ProductDetails() {

    const [selectedSize, setSelectedSize] = useState('')
    const [selectedColor, setSelectedColor] = useState('')

    const product = useSelector((state) => state.products.singleProduct);
    const dispatch = useDispatch();

    const addProduct = () => {
        if (selectedColor && selectedColor) {
            let cartObj = {
                title: product.title,
                price: product.price,
                size: selectedSize,
                color: selectedColor,
                img: product.img,
                quantity: 1,
                id: product.id,
                totalPriceOfProduct: product.price
            }

            dispatch(cartSliceAction.addToCart(cartObj))
            dispatch(cartSliceAction.updateTotal())
        }
    }

    return (
        <>
            {/* Header */}
            <HeaderNav />
            <HeaderSearch />
            <HeaderFooter />

            <Container className='m-5 p-5'>
                <Row className="justify-content-evenly align-items-center">
                    <Col className='left-product-detail mt-5 text-center' md={4}>
                        <img src={product.img} className="img-fluid"></img>
                    </Col>
                    <Col className='right-product-detail mt-5' md={7}>
                        <div className='right-product-detail-highlight-container'>
                            <h4 className='right-product-detail-highlight'>{product.category}</h4>
                            <h4 className='right-product-detail-highlight'>{product.gender}</h4>
                        </div>
                        <h1>{product.title}</h1>
                        <h2>Price : ${product.price}</h2>
                        <h3>{product.ratings}</h3>
                        {
                            product.size.length > 1 && <h3>Size</h3>
                        }
                        <div className='radio-container'>
                            {

                                product.size.length > 1 && product.size.map((item) => {


                                    return <>
                                        <div className='radio'>
                                            <label>{item}</label>
                                            <input type="radio" name='size' value={item} onClick={() => setSelectedSize(item)} />
                                        </div>
                                    </>

                                })
                            }
                        </div>
                        <h3>Colour</h3>
                        <div className='radio-container'>
                            {
                                product.colors.map((item) => {
                                    return <>
                                        <div className='radio'>
                                            <label>{item}</label>
                                            <input type="radio" name='color' value={item} onClick={() => setSelectedColor(item)} />
                                        </div>
                                    </>
                                })

                            }
                        </div>
                        <button className='product-btn' onClick={addProduct}>Add to Cart</button>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>
    )
}

export default ProductDetails