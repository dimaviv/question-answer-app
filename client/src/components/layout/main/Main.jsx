import React from 'react';
import styles from './Main.module.css'
import LiftUpBtn from 'components/ui/buttons/lift-up/LiftUpBtn';

const Main = ({children}) => {

    return (
        <main className={styles.main}>
            {children}
            <LiftUpBtn />
        </main>
    );
};

export default Main;