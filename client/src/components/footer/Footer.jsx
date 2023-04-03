import React from 'react';
import styles from "./Footer.module.css";
import SectionInform from "./SectionInform/SectionInform";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <SectionInform/>
        </footer>
    );
};

export default Footer;