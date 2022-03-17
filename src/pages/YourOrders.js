import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
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

      setOrders(firestoreArrayData.sort((a, b) => b.orderTime - a.orderTime));
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <HeaderNav />
      <HeaderSearch />
      <HeaderFooter />

      <Container>
        <div className="cart-heading">
          <h1>Your Order</h1>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <Row>
            {orders.length > 0 &&
              orders.map((item) => {
                return <Order key={item.id} item={item} />;
              })}
            {orders.length === 0 && (
              <h2 className="text-center m-5 p-5">You Have No Orders</h2>
            )}
          </Row>
        )}
      </Container>

      <Footer />
    </>
  );
};

export default YourOrders;
