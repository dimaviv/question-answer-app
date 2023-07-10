import React from 'react';
import styles from './Main.module.css'
import AppRouter from 'components/AppRouter';
import LiftUpBtn from 'components/ui/buttons/lift-up/LiftUpBtn';

const Main = () => {

    return (
        <main className={styles.main}>
            <AppRouter/>
            <LiftUpBtn />
        </main>
    );
};

export default Main;