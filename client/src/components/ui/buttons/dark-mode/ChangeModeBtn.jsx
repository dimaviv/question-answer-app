import {useEffect, useRef} from 'react';
import lightModeImg from 'static/layout/header/light-mode.svg';
import darkModeImg from 'static/layout/header/dark-mode.svg';
import {useActions} from 'hooks/useActions';
import {useLocaleStorage} from 'hooks/useLocalStorage';
import {detectDarkMode} from 'utils/detect-dark-mode';
import {StyledChangeModeBtn} from './StyledChangeModeBtn';

const ChangeModeBtn = () => {
    const [themeMode, setThemeMode] = useLocaleStorage('theme', detectDarkMode());
    const {setTheme} = useActions()
    const btnRef = useRef(null);

    const toggleDarkMode = () => {
        if (themeMode === 'light') {
            setThemeMode('dark');
        } else {
            setThemeMode('light')
        }
    };

    const turnOnDarkMode = () => {
        if (themeMode === 'dark') {
            btnRef.current.classList.add(`active`);
        } else if (themeMode === 'light') {
            btnRef.current.classList.remove(`active`);
        }
    };

    useEffect(() => {
        turnOnDarkMode();
        setTheme(themeMode)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [themeMode]);

    useEffect(() => {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (event) => {
                setTheme(event.matches ? 'dark' : 'light')
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <StyledChangeModeBtn ref={btnRef}
                onClick={toggleDarkMode}
        >
            <img src={lightModeImg}
                 alt="Light mode"
                 className={'mode-icon'}
            />
            <img src={darkModeImg}
                 alt="Dark mode"
                 className={'mode-icon'}
            />
        </StyledChangeModeBtn>
    );
};

export default ChangeModeBtn;