import React from 'react';
import Header from './components/header/Header';
import AppRouter from './components/AppRouter';
import Footer from './components/footer/Footer';
import {useLocation} from 'react-router-dom';

const App = () => {
    const location = useLocation();
    const {pathname} = location;

    return (
        <>
            {pathname !== '/login' && <Header />}
            <main className="main">
                <AppRouter />
            </main>
            {pathname !== '/login' && <Footer />}
        </>
    );
};

export default App;