import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import HeaderFooter from "../components/header/HeaderFooter";
import HeaderNav from "../components/header/HeaderNav";
import HeaderSearch from "../components/header/HeaderSearch";
import Loading from "../components/Loading/Loading";
import Order from "../components/order/Order";
import { db } from "../firebaseConfig";

const YourOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const fetchOrders = async () => {
    setLoading(true);
    const docRef = collection(db, "orders");
    if (user) {
      const q = query(docRef, where("userEmail", "==", user.email));
      const docSnap = await getDocs(q);

      let firestoreArrayData = [];

      docSnap.docs.map((doc) => {
        firestoreArrayData.push({ ...doc.data(), id: doc.id });
      });

      console.log(firestoreArrayData);

      setOrders(
        firestoreArrayData.sort((a, b) => {
          let date1 = new Date(a.orderDate).getTime();
          let date2 = new Date(b.orderDate).getTime();
          return date2 - date1;
        })
      );
    }
    setLoading(false);
  };

  const handleGoToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <HeaderNav />
      <HeaderSearch />
      <HeaderFooter />

      <Container className="shadow-lg bg-light">
        <div className="text-center p-5">
          <h1 className="text-center mt-4 black-text-underline d-inline styled-font text-orange">
            Your Orders
          </h1>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <Row className="justify-content-evenly md-px-5 xs-px-2">
            {orders.length > 0 &&
              orders.map((item) => {
                return <Order key={item.id} item={item} />;
              })}
            {orders.length === 0 && (
              <Col
                md={4}
                className="p-5 d-flex flex-column justify-content-center align-items-center"
              >
                <h2 className="text-center m-5  display-5">
                  You Have No Orders !!
                </h2>

                <img
                  src="/shopping.png"
                  alt="no item"
                  width="150px"
                  height="150px"
                  className="my-3 hero-img"
                />
                <button className="shop-btn" onClick={handleGoToHome}>
                  Shop Now
                </button>
              </Col>
            )}
          </Row>
        )}
      </Container>

      <Footer />
    </>
  );
};

export default YourOrders;
