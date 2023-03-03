import {ROUTE_HOME, ROUTE_LOGIN} from "../utils/consts";
import loadable from "@loadable/component";
import LoaderPage from "../components/UI/LoaderPage/LoaderPage";
import React from 'react';

const HomePage = loadable(() => import("../pages/HomePage/HomePage"), {
    fallback: <LoaderPage/>
});
const LoginPage = loadable(() => import("../pages/LoginPage/LoginPage"), {
    fallback: <LoaderPage/>
});
const ErrorPage = loadable(() => import("../pages/ErrorPage/ErrorPage"), {
    fallback: <LoaderPage/>
});


export const publicRoutes = [
    {path: '/', component: HomePage},
    {path: ROUTE_HOME, component: HomePage},
    {path: ROUTE_LOGIN, component: LoginPage},
    {path: '*', component: ErrorPage},
]

export const privateRoutes = [
    {path: '/', component: HomePage},
    {path: ROUTE_HOME, component: HomePage},
    {path: '*', component: ErrorPage},
]