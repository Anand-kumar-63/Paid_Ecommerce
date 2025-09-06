import React from "react";
import {Routes,Route,Link } from "react-router-dom";
import Hero from "./Hero";
import AboutUs from "./AboutsUs"
import Services from "./Services";
import Products from "./Product";
import ContactUs from "./ContactUs";

// import "./Navbar.css"; 

const Navbar = () => {
    return (
        <nav className="navbar" >
           
            
            <ul className="nav-links" style={{display:"flex",justifyContent:"space-between"}}>
                <li>
                    <Link to="/" ><h2 className="logo">E-Commerce</h2></Link>
                </li>
                <li>
                    <Link to="/AboutUs">About Us</Link>
                </li>
                <li>
                    <Link to="/Services">Services</Link>
                </li>
                <li>
                    <Link to="/Products">Products</Link>
                </li>
                <li>
                    <Link to="/ContactUs">Contact Us</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Hero/>} />
                <Route path="/AboutUs"  element={<AboutUs/>} />
                <Route path="/Services" element={<Services/>} />
                <Route path="/Products" element={<Products/>} />
                <Route path="/ContactUs" element={<ContactUs/>} />
               
            </Routes>
           
        </nav>
    );
};



export default Navbar;