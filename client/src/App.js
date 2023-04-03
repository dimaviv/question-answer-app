import React from 'react';
import Header from './components/header/Header';
import AppRouter from './components/AppRouter';
import Footer from './components/footer/Footer';

const App = () => {

    return (
        <>
            <Header />
            <main className="main">
                <AppRouter />
            </main>
            <Footer />
        </>
    );
};

export default App;