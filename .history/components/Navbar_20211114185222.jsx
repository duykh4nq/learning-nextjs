import React from "react";
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="flex flex-row justify-between mt-6 border-b-2 pb-1">
            <div className="text-2xl">Home</div>
            <div>
                <ul className="flex flex-row w-40 justify-between">
                    <Link href='/abouts'>About</Link>
                    <Link href='/coders'>All Coders</Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
