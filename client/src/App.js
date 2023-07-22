import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {ThemeProvider} from 'styled-components';

import {useActions} from 'hooks/useActions';
import AppRouter from './components/AppRouter';
import {Globals} from './styles/Globals';
import {themes} from './utils/themes';

const App = () => {
    const {theme} = useSelector(state => state.layoutReducer);
    const {setIsAuth, checkAuth} = useActions();

    useEffect(() => {
        if (localStorage.getItem('auth') || sessionStorage.getItem('auth')) {
            checkAuth();
            console.log('Success auth!');
        } else {
            console.log('You should auth!');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (localStorage.getItem('auth') || sessionStorage.getItem('auth')) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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