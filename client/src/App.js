import {useEffect} from 'react';

import {useActions} from 'hooks/UseActions';
import AppRouter from './components/AppRouter';
import {fetchCategories} from './api/categoryAPI';

const App = () => {
    const {setIsAuth, checkAuth, setCategories} = useActions();

    useEffect(() => {
        fetchCategories()
            .then(data => {
                setCategories(data)
            })
            .catch(e => console.error(e))
    }, [])

    useEffect(() => {
        if (localStorage.getItem('auth') || sessionStorage.getItem('auth')) {
            checkAuth();
            console.log('Success auth!');
        } else {
            console.log('You should auth!');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (localStorage.getItem('auth') || sessionStorage.getItem('auth')) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <AppRouter />
        </>
    );
};

export default App;