import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <div className='container flex space-x-8 items-end'>
                <a className='font-bold text-2xl' href="/">Online Learning</a>
                <ul className="flex justify-left space-x-4">
                    <li>
                        <Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link>
                    </li>
                    <li>
                        <Link to="/login" className="text-blue-500 hover:text-blue-700">Login</Link>
                    </li>
                    <li>
                        <Link to="/subject" className="text-blue-500 hover:text-blue-700">Subject</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
