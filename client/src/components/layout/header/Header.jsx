import {useLocation} from 'react-router-dom';

import styles from './Header.module.css';
import SectionCategories from './section-categories/SectionCategories';
import NavBar from './nav-bar/NavBar';
import {shouldDisplayHeader} from 'utils/path-display';

const Header = () => {
    const {pathname} = useLocation();

    return (
        <>
            {shouldDisplayHeader(pathname) && (
                <header className={styles.header}>
                    <NavBar />
                    <SectionCategories />
                </header>
            )}
        </>
    );
};

export default Header;