import React, {useEffect} from 'react';
import Header from 'components/header/Header';
import AppRouter from 'components/AppRouter';
import Footer from 'components/footer/Footer';
import {useLocation} from 'react-router-dom';
import {useActions} from 'hooks/UseActions';
import {shouldDisplayHeader, shouldDisplayFooter} from './utils/path-display';

const App = () => {
    const {pathname} = useLocation();
    const {setIsAuth} = useActions();

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
            {shouldDisplayHeader(pathname) &&
                <Header />
            }
            <main className="main">
                <AppRouter />
            </main>
            {shouldDisplayFooter(pathname) &&
                <Footer />
            }
        </>
    );
};

export default App;