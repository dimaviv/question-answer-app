import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {ThemeProvider} from 'styled-components';

import {useLocaleStorage} from 'hooks/UseLocalStorage';
import {detectDarkMode} from 'utils/detect-dark-mode';
import {useActions} from 'hooks/UseActions';
import Meta from '../seo/Meta';
import {themes} from 'utils/themes';
import {Globals} from 'styles/Globals';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';

const Layout = ({children, title, description}) => {
    const {theme} = useSelector(state => state.layoutReducer);
    const {setTheme} = useActions();
    const [themeMode, setThemeMode] = useLocaleStorage('theme', detectDarkMode());

    useEffect(() => {
        setTheme(themeMode);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [themeMode]);

    return (
        <Meta title={title}
              description={description}
        >
            <ThemeProvider theme={theme === 'dark' ? themes.dark : themes.light}>
                <Globals />
                <Header />
                <Main children={children} />
                <Footer />
            </ThemeProvider>
        </Meta>
    );
};

export default Layout;