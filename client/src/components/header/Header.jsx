import React from 'react';
import SectionCategories from "./section-categories/SectionCategories";
import NavBar from "./nav-bar/NavBar";

const Header = () => {
    return (
        <header>
            <NavBar/>
            <SectionCategories/>
        </header>
    );
};

export default Header;