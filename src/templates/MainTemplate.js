import React from "react";
import { ToastContainer } from "react-toastify";
import HamburgerMenu from "../components/molecules/hamburgerMenu";
import Footer from "../components/organisms/footer ";
import Navbar from "../components/organisms/navbar";

const MainTemplate = ({ children }) => {
  return (
    <>
      <HamburgerMenu />
      <Navbar />
      <ToastContainer />
      {children}
      <Footer />
    </>
  );
};

export default MainTemplate;
