import {useSelector} from 'react-redux';

import lightModeImg from 'static/layout/header/light-mode.svg';
import darkModeImg from 'static/layout/header/dark-mode.svg';
import {StyledChangeModeBtn} from './StyledChangeModeBtn';
import {useActions} from 'hooks/useActions';
import {useLocaleStorage} from 'hooks/useLocalStorage';
import {detectDarkMode} from 'utils/detect-dark-mode';

const ChangeModeBtn = () => {
    const [themeMode, setThemeMode] = useLocaleStorage('theme', detectDarkMode());
    const {setTheme} = useActions();
    const {theme} = useSelector(state => state.layoutReducer)

    const toggleDarkMode = () => {
        if (theme === 'light') {
            setTheme('dark');
            setThemeMode('dark')
        } else {
            setTheme('light')
            setThemeMode('light')
        }
    };

    return (
        <StyledChangeModeBtn onClick={toggleDarkMode} $themeMode={theme}>
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