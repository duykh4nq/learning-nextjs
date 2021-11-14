import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NotFound from "../pages/404";

const Layout = ({ children }) => {
    return (
        <div className="max-w-4xl m-auto">
            <Navbar />
            <NotFound/>
                {children}
            <Footer />
        </div>
    );
};

export default Layout;
