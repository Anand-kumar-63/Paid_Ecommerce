import React from "react";
import { Link } from "react-router-dom";
import AboutUs from "../../Pages/Aboutus/AboutsUs"
import Services from "../../Pages/Services/Services";
import Products from "../../Pages/Products/Product";
import ContactUs from "../../Pages/ContactUS/ContactUs";
import Hero from "../../Pages/Hero/Hero";
import Fabrication from "../../Pages/Fabrication/Fabrication";
import Maintenance from "../../Pages/Maintenance/Maintenance";


const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-blue-950 shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-sky-600">Industrio</a>
          <div className="hidden md:flex items-center space-x-10">
            <Link to='/' className="text-slate-100 hover:text-sky-600 transition-colors">Home</Link>
            <Link to='/AboutUs' className="text-slate-100 hover:text-sky-600 transition-colors">About Us</Link>
            <Link to='/ContactUs' className="text-slate-100 hover:text-sky-600 transition-colors">Contact Us</Link>
            <Link to='/Products' className="text-slate-100 hover:text-sky-600 transition-colors">Products</Link>
            <Link to='/maintenance' className="text-slate-100 hover:text-sky-600 transition-colors">Services</Link>
            {/* <Link to='/Fabrication' className="text-slate-100 hover:text-sky-600 transition-colors">Fabrication</Link> */}
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>
      </header>
  );
};

export default Navbar;
