import React, { useEffect, useState } from "react";
import { Col, Container, Row, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer/Footer";
import HeaderFooter from "../components/header/HeaderFooter";
import HeaderNav from "../components/header/HeaderNav";
import HeaderSearch from "../components/header/HeaderSearch";
import { cartSliceAction } from "../slices/CartSlice";
import "./ProductDetails.css";
import Rating from "@mui/material/Rating";
import Review from "../components/review/Review";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [msg, setMsg] = useState({
    status: "",
    code: "",
  });
  const [reviewItems, setReviewItems] = useState([]);
  const [show, setShow] = useState(true);

  const product = useSelector((state) => state.products.singleProduct);
  const user = useSelector((state) => state.auth.user);
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
        totalPriceOfProduct: product.price,
      };

      dispatch(cartSliceAction.addToCart(cartObj));
      dispatch(cartSliceAction.updateTotal());

      setMsg({
        status: "success",
        code: "product added to cart",
      });

      setShow(true);
    } else {
      setMsg({
        status: "error",
        code: "Please select size and color",
      });
      setShow(true);
    }
  };

  const fetchReviews = async () => {
    const docRef = collection(db, "products", product.id, "Review");
    try {
      const docSnap = await getDocs(docRef);

      let firestoreArrayData = [];

      docSnap.docs.map((doc) => {
        firestoreArrayData.push({ ...doc.data(), id: doc.id });
      });

      setReviewItems(firestoreArrayData);
    } catch (err) {}
  };

  const addReview = async () => {
    let obj = {
      username: user.displayName,
      comment: "excellent product",
      date: new Date().toString().slice(0, 15),
    };

    const docRef = collection(db, "products", product.id, "Review");
    await addDoc(docRef, obj);

    fetchReviews();
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <>
      {/* Header */}
      <HeaderNav />
      <HeaderSearch />
      <HeaderFooter />

      <Container className="m-5 p-5">
        <Row className="justify-content-evenly ">
          <Col className="left-product-detail mt-5 text-center" md={4}>
            <img src={product.img} className="img-fluid"></img>
          </Col>
          <Col className="right-product-detail mt-5" md={7}>
            <div className="right-product-detail-highlight-container">
              <h4 className="right-product-detail-highlight">
                {product.category}
              </h4>
              <h4 className="right-product-detail-highlight">
                {product.gender}
              </h4>
            </div>
            <h1>{product.title}</h1>
            <h2>Price : ${product.price}</h2>
            <h3>
              <Rating
                name="half-rating"
                defaultValue={parseInt(product.ratings)}
                precision={0.5}
                className="ratings"
                readOnly
              />
            </h3>
            {product.size.length > 1 && <h3>Size</h3>}
            <div className="radio-container">
              {product.size.length > 1 &&
                product.size.map((item, index) => {
                  return (
                    <div key={index} className="radio">
                      <label>{item}</label>
                      <input
                        type="radio"
                        name="size"
                        value={item}
                        onClick={() => setSelectedSize(item)}
                      />
                    </div>
                  );
                })}
            </div>
            <h3>Colour</h3>
            <div className="radio-container">
              {product.colors.map((item, index) => {
                return (
                  <div key={index} className="radio">
                    <label>{item}</label>
                    <input
                      type="radio"
                      name="color"
                      value={item}
                      onClick={() => setSelectedColor(item)}
                    />
                  </div>
                );
              })}
            </div>
            <button className="product-btn" onClick={addProduct}>
              Add to Cart
            </button>

            {msg.code && show ? (
              <Alert
                variant={msg.status === "success" ? "success" : "danger"}
                onClose={() => setShow(false)}
                dismissible
              >
                <Alert.Heading className="text-center">
                  {msg.code}
                </Alert.Heading>
              </Alert>
            ) : (
              <></>
            )}

            <div>
              <h2 className=" mb-5 checkout-heading">Reviews</h2>

              {user && (
                <div>
                  <h3 className="mb-3">Add Review</h3>
                  <textarea placeholder="Comment here"></textarea>
                  <Row className="align-items-center">
                    <Col md={1}>
                      <h4>Ratings</h4>
                    </Col>
                    <Col md={4}>
                      <Rating
                        name="half-rating"
                        defaultValue={0}
                        precision={1}
                        className="ratings"
                      />
                    </Col>
                  </Row>

                  <button onClick={addReview} className="product-btn">
                    Add Review
                  </button>
                </div>
              )}

              {reviewItems.length > 0 ? (
                reviewItems.map((item) => {
                  return <Review key={item.id} item={item} />;
                })
              ) : (
                <h3>No reviews</h3>
              )}
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default ProductDetails;
