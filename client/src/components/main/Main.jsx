import React from 'react';
import styles from './Main.module.css'
import AppRouter from 'components/AppRouter';
import LiftUpBtn from 'components/UI/btns/lift-up-btn/LiftUpBtn';

const Main = () => {

    return (
        <main className={styles.main}>
            <AppRouter/>
            <LiftUpBtn />
        </main>
    );
};

export default Main;