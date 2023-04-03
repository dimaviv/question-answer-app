import React from 'react';
import SectionCategories from './section-categories/SectionCategories';
import NavBar from './nav-bar/NavBar';
import styles from './Header.module.css';

const Header = () => {

    return (
        <header className={styles.header}>
            <NavBar />
            <SectionCategories />
        </header>
    );
};

export default Header;