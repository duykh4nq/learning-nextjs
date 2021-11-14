import React from "react";
import Footer from "../.history/components/Footer_20211114172352";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="max-w-4xl m-auto">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
