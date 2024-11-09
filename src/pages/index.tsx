"use client"
import Header from "@/components/Header/Header";
import React from "react";
import "@/styles/globals.css";
import CoinList from "@/components/CoinList/CoinList";
import Explenations from "@/components/Explenations/Explenations";
import Footer from "@/components/Footer/Footer";

const index = () => {
  return (
    <>
      <Header />
      <div className="sm:w-[90%] md:w-[90%] lg:w-[85%] mx-auto">
        <CoinList />
        <Explenations />
      </div>
      <Footer />
    </>
  );
};

export default index;
