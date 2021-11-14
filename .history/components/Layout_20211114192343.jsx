import React from "react";
import Footer from "./Footer";
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
