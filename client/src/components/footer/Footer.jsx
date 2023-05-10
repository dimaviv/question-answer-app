import React from 'react';
import styles from './Footer.module.css';
import {useLocation} from 'react-router-dom';
import SectionInform from './SectionInform/SectionInform';
import {shouldDisplayFooter} from 'utils/path-display';

const Footer = () => {
    const {pathname} = useLocation();

    return (
        <>
            {shouldDisplayFooter(pathname) && (
                <footer className={styles.footer}>
                    <SectionInform />
                </footer>
            )}
        </>
    );
};

export default Footer;