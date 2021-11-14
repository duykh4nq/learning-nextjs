import React from "react";
import Navbar from "./Navbar";
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="max-w-4xl m-auto">
            <Navbar />
                {children}
            <Footer/>
        </div>
    );
};

export default Layout;
