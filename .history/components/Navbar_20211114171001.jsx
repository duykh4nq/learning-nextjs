import React from "react";
import "../build/style.css";

const Navbar = () => {
    return (
        <div className="flex flex-row justify-between max-w-5xl">
            <div>Home</div>
            <div>
                <ul>
                    <li>About</li>
                    <li>All Coders</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
