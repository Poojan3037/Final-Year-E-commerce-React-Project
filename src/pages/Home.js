import React, { useState, useEffect } from "react";
import HeaderFooter from "../components/header/HeaderFooter";
import HeaderNav from "../components/header/HeaderNav";
import HeaderSearch from "../components/header/HeaderSearch";
import Advertise from "../components/Advertise/Advertise";
import Main from "../components/Products/Main";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { productSliceAction } from "../slices/productSlice";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";
import Hero from "../components/Advertise/Hero";
import ClientReviews from "../components/Advertise/ClientReviews";

const Home = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.products.loading);

  const getProductsFromFirebase = async () => {
    dispatch(productSliceAction.setLoadingOn());

    const docRef = collection(db, "products");
    const docSnap = await getDocs(docRef);

    let firestoreArrayData = [];

    docSnap.docs.map((doc) => {
      firestoreArrayData.push({ ...doc.data(), id: doc.id });
    });

    dispatch(productSliceAction.setProductsOnLoad(firestoreArrayData));

    dispatch(productSliceAction.setLoadingOff());
  };

  useEffect(() => {
    getProductsFromFirebase();
  }, []);

  return (
    <>
      {/* Header */}
      <HeaderNav />
      <HeaderSearch />
      <HeaderFooter />

      {/* Advertise */}
      <Hero />
      <Advertise />

      {/* Main Products */}
      {loading && <Loading />}
      {!loading && <Main />}

      <ClientReviews />

      <Footer />
    </>
  );
};

export default Home;
