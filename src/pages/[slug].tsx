// "use server";

import AboutBTC from "@/components/AboutBTC/AboutBTC";
import Charts from "@/components/Charts/Charts";
import CurrentPrice from "@/components/CurrentPrice/CurrentPrice";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";

const CustomComponent = () => {
  return (
    <>
      <Header />
      <div className="sm:w-[90%] md:w-[90%] lg:w-[85%] mx-auto">
        <CurrentPrice />
        <AboutBTC />
        <Charts />
        <FAQ />
      </div>
      <Footer />
    </>
  );
};

export default CustomComponent;
