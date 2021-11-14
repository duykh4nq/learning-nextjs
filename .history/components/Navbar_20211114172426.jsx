import React from "react";

const Navbar = () => {
    return (
        <div className="flex flex-row justify-between m-auto mt-6 border-b-2 pb-1">
            <div className="text-2xl">Home</div>
            <div>
                <ul className="flex flex-row w-40 justify-between">
                    <li>About</li>
                    <li>All Coders</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
