import React from 'react';
import Footer from '../.history/components/Footer_20211114172352';
import Navbar from './Navbar';

const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;