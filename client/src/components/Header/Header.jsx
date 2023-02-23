import React from 'react';
import SectionCategories from "./SectionCategories/SectionCategories";
import NavBar from "./NavBar/NavBar";

const Header = () => {
    return (
        <header>
            <NavBar/>
            <SectionCategories/>
        </header>
    );
};

export default Header;