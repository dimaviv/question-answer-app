import {ROUTE_HOME, ROUTE_LOGIN} from "../utils/consts";
import loadable from "@loadable/component";
import LoaderPage from "../components/UI/LoaderPage/LoaderPage";
import React from 'react';

const HomePage = loadable(() => import("../pages/home-page/HomePage"), {
    fallback: <LoaderPage/>
});
const QuestionsPage = loadable(() => import("../pages/questions-page/QuestionsPage"), {
    fallback: <LoaderPage/>
});
const QuestionPage = loadable(() => import("../pages/question-page/QuestionPage"), {
    fallback: <LoaderPage/>
});
const LoginPage = loadable(() => import("../pages/login-page/LoginPage"), {
    fallback: <LoaderPage/>
});
const ErrorPage = loadable(() => import("../pages/error-page/ErrorPage"), {
    fallback: <LoaderPage/>
});


export const publicRoutes = [
    {path: '/', component: HomePage},
    {path: ROUTE_HOME, component: HomePage},
    {path: '/:id', component: QuestionsPage},
    {path: '/:id/:id', component: QuestionPage},
    {path: ROUTE_LOGIN, component: LoginPage},
    {path: '*', component: ErrorPage},
]

export const privateRoutes = [
    {path: '/', component: HomePage},
    {path: ROUTE_HOME, component: HomePage},
    {path: '/:id', component: QuestionsPage},
    {path: '/:id/:id', component: QuestionPage},
    {path: '*', component: ErrorPage},
]