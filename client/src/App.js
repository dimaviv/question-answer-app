import React from 'react';
import Header from "./components/Header/Header";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <>
            <Header/>
            <main>
                <AppRouter/>
            </main>
            <Footer/>
        </>
    );
};

export default App;