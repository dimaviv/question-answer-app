import {ROUTE_ERROR, ROUTE_HOME, ROUTE_LOGIN, ROUTE_SIGNUP, ROUTE_OAUTH} from 'utils/consts';
import loadable from '@loadable/component';
import LoaderPage from 'components/ui/loaders/loader-page/LoaderPage';
import React from 'react';

const HomePage = loadable(() => import('pages/Home'), {
    fallback: <LoaderPage />
});
const QuestionsPage = loadable(() => import('pages/Questions'), {
    fallback: <LoaderPage />
});
const QuestionPage = loadable(() => import('pages/Question'), {
    fallback: <LoaderPage />
});
const AskQuestionPage = loadable(() => import('pages/AskQuestion'), {
    fallback: <LoaderPage />
});
const LoginPage = loadable(() => import('pages/Login'), {
    fallback: <LoaderPage />
});
const SignUpPage = loadable(() => import('pages/Signup'), {
    fallback: <LoaderPage />
});
const OAuthPage = loadable(() => import('pages/OAuth'), {
    fallback: <LoaderPage />
});
const ErrorPage = loadable(() => import('pages/NotFound'), {
    fallback: <LoaderPage />
});


export const publicRoutes = [
    {path: ROUTE_HOME, component: HomePage},
    {path: '/subject/:categoryName', component: QuestionsPage},
    {path: ROUTE_LOGIN, component: LoginPage},
    {path: ROUTE_SIGNUP, component: SignUpPage},
    {path: ROUTE_OAUTH, component: OAuthPage},
    {path: ROUTE_ERROR, component: ErrorPage},
    {path: '*', component: ErrorPage},
];

export const privateRoutes = [
    {path: ROUTE_HOME, component: HomePage},
    {path: '/subject/:categoryName', component: QuestionsPage},
    {path: '/subject/:categoryName-ask', component: AskQuestionPage},
    {path: '/subject/:categoryName/:questionId', component: QuestionPage},
    {path: ROUTE_ERROR, component: ErrorPage},
    {path: '*', component: ErrorPage},
];