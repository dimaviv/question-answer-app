import {useEffect} from 'react';

import {useLocaleStorage} from 'hooks/useLocalStorage';
import {detectDarkMode} from 'utils/detect-dark-mode';
import {useActions} from 'hooks/useActions';
import Meta from '../seo/Meta';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';

const RootLayout = () => {
    const {setTheme} = useActions();
    const [themeMode, setThemeMode] = useLocaleStorage('theme', detectDarkMode());

    useEffect(() => {
        setTheme(themeMode);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [themeMode]);

    useEffect(() => {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (event) => {
                setTheme(event.matches ? 'dark' : 'light')
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Meta>
            <Header />
            <Main />
            <Footer />
        </Meta>
    );
};

export default RootLayout;