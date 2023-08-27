import React from "react";
import NavbarComponent from "./NavBarComponent";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Whilist from "./Whilist";

export default function Header () {
    return (
        // <h1>Hi</h1>
        <header>
            <NavbarComponent />
                <Router>
                        <Routes>
                            <Route exact path="/" element={<Home />} /> 
                            <Route exact path="/list" element={<Whilist />} />
                            {/* <Route exact path="/contact" element={<Contact />} /> */}
                            {/* <Route path="*" element={<NotFound />} /> */}
                        </Routes>
                </Router>
        </header>
    )
}