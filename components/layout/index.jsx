import React from "react";
import Header from "../header";
import Navbar from "../navbar";
import Footer from "../Footer";
import Techmitan from "../techmitan";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
      <Techmitan />
    </>
  );
};

export default Layout;
