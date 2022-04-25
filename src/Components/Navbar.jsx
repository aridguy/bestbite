import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="shadow-lg">
        <div className="font-bold text-3xl p-2 ml-2"><h1>Bestbite</h1></div>
            <ul className="flex p-1 justify-end">
                <Link to="/"><li className="mr-4 text-base font-semibold hover:text-red-600 hover:border-b transition hover:border-b-red-600 p-1">Home</li></Link>
                <Link to="/about"><li className="mr-4 text-base font-semibold hover:text-red-600 hover:border-b transition hover:border-b-red-600 p-1">About</li></Link>
                <Link to="/products"><li className="mr-4 text-base font-semibold hover:text-red-600 hover:border-b transition-all hover:border-b-red-600 p-1">Products</li></Link>
                <Link to="/contact"><li className="mr-4 text-base font-semibold hover:text-red-600 hover:border-b  hover:border-b-red-600 transition-all p-1">Contact</li></Link>
            </ul>
    </nav>
  )
}

export default Navbar;