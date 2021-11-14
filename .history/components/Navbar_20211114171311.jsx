import React from "react";

const Navbar = () => {
    return (
        <div className="flex flex-row justify-between max-w-5xl">
            <div className="text-red-900">Home</div>
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
