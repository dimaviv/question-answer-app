import React, {useEffect, useRef} from 'react';
import {useLocaleStorage} from 'hooks/UseLocalStorage';
import styles from './DarkModeBtn.module.css';
import lightModeImg from 'static/layout/header/light-mode.svg';
import darkModeImg from 'static/layout/header/dark-mode.svg';
import {detectDarkMode} from 'utils/detect-dark-mode';
import {useActions} from 'hooks/UseActions';

const DarkModeBtn = () => {
    const [darkMode, setDarkMode] = useLocaleStorage('darkMode', detectDarkMode());

    const {setIsDarkMode} = useActions()

    const btnRef = useRef(null);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const turnOnDarkMode = () => {
        if (darkMode) {
            document.body.classList.add('dark');
            btnRef.current.classList.add(`${styles.btnDarkMode_active}`);
        } else {
            document.body.classList.remove('dark');
            btnRef.current.classList.remove(`${styles.btnDarkMode_active}`);
        }
    };

    useEffect(() => {
        turnOnDarkMode();
        setIsDarkMode(darkMode)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [darkMode]);

    useEffect(() => {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (event) => {
                setDarkMode(event.matches)
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <button ref={btnRef}
                className={styles.btnDarkMode}
                onClick={toggleDarkMode}
        >
            <img src={lightModeImg}
                 alt="Light mode"
                 className={styles.btnDarkMode__icon}
            />
            <img src={darkModeImg}
                 alt="Dark mode"
                 className={styles.btnDarkMode__icon}
            />
        </button>
    );
};

export default DarkModeBtn;