import {Outlet} from 'react-router-dom';

import styles from './Main.module.css';
import LiftUpBtn from 'components/ui/button/lift-up/LiftUpBtn';

const Main = ({children}) => {

    return (
        <main className={styles.main}>
            <Outlet />
            <LiftUpBtn />
        </main>
    );
};

export default Main;