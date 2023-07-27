import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import {privateRoutes, publicRoutes} from 'routes';
import {useSelector} from 'react-redux';

import RootLayout from './layout/RootLayout';
import Home from 'pages/Home';
import NotFoundPage from 'pages/NotFound';


const AppRouter = () => {
    const {isAuth} = useSelector(state => state.authReducer);

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<RootLayout />}>
                <Route index element={<Home />} />
                {isAuth ? (
                    privateRoutes.map((route) => (
                        <Route key={route.path}
                               path={route.path}
                               element={<route.component />}
                        />
                    ))
                ) : (
                    publicRoutes.map((route) => (
                        <Route key={route.path}
                               path={route.path}
                               element={<route.component />}
                        />
                    ))
                )}
                <Route path='*' element={<NotFoundPage />} />
            </Route>
        )
    );

    return (
        <RouterProvider router={router} />
    );
};

export default AppRouter;