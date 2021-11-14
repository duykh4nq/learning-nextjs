import React from "react";

const Navbar = () => {
    return (
        <div className="flex flex-row justify-between max-w-4xl mt-0-auto">
            <div className="text-red-900">Home</div>
            <div>
                <ul className="flex flex-row w-32">
                    <li>About</li>
                    <li>All Coders</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
