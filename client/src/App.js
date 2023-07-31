import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {ThemeProvider} from 'styled-components';

import {useActions} from 'hooks/useActions';
import AppRouter from './components/AppRouter';
import {Globals} from './styles/Globals';
import {themes} from './utils/themes';
import {checkAuth} from './api/auth';
import HomePageLoading from './components/ui/loading/home-page/HomePage';

const App = () => {
    const {theme} = useSelector(state => state.layoutReducer);
    const {setIsAuth, signOut} = useActions();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        checkAuth()
            .then(() => setIsAuth(true))
            .catch(() => signOut())
            .finally(() => setIsLoading(false))
    }, []);

    useEffect(() => {
        if (localStorage.getItem('auth') || sessionStorage.getItem('auth')) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) {
        return (
            <HomePageLoading />
        )
    }

    return (
        <>
            <ThemeProvider theme={theme === 'dark' ? themes.dark : themes.light}>
                <Globals/>
                <AppRouter />
            </ThemeProvider>
        </>
    );
};

export default App;