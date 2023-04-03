import {ROUTE_ERROR, ROUTE_HOME, ROUTE_LOGIN} from '../utils/consts';
import loadable from "@loadable/component";
import LoaderPage from "../components/UI/loaders/loader-page/LoaderPage";
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
const AskQuestionPage = loadable(() => import("../pages/ask-question-page/AskQuestionPage"), {
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
    {path: '/:categoryName', component: QuestionsPage},
    {path: '/:categoryName/ask', component: AskQuestionPage},
    {path: '/:categoryName/:questionId', component: QuestionPage},
    {path: ROUTE_LOGIN, component: LoginPage},
    {path: ROUTE_ERROR, component: ErrorPage},
    {path: '*', component: ErrorPage},
]

export const privateRoutes = [
    {path: '/', component: HomePage},
    {path: ROUTE_HOME, component: HomePage},
    {path: '/:categoryName', component: QuestionsPage},
    {path: '/:categoryName/ask', component: AskQuestionPage},
    {path: '/:categoryName/:questionId', component: QuestionPage},
    {path: ROUTE_ERROR, component: ErrorPage},
    {path: '*', component: ErrorPage},
]