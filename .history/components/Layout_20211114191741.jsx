import React from "react";
import Footer from "../.history/components/Footer_20211114172352";
import Navbar from "./Navbar";
import NotFound from './../.history/pages/404_20211114190920';

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
