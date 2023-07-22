import {ROUTE_ERROR, ROUTE_HOME, ROUTE_LOGIN, ROUTE_SIGNUP, ROUTE_OAUTH} from 'utils/consts';
import loadable from '@loadable/component';
import HomePageLoading from 'components/ui/loading/home-page/HomePage';

const HomePage = loadable(() => import('pages/Home'), {
    fallback: <HomePageLoading />
});
const QuestionsPage = loadable(() => import('pages/Questions'), {
    fallback: <HomePageLoading />
});
const QuestionPage = loadable(() => import('pages/Question'), {
    fallback: <HomePageLoading />
});
const AskQuestionPage = loadable(() => import('pages/AskQuestion'), {
    fallback: <HomePageLoading />
});
const LoginPage = loadable(() => import('pages/Login'), {
    fallback: <HomePageLoading />
});
const SignUpPage = loadable(() => import('pages/Signup'), {
    fallback: <HomePageLoading />
});
const OAuthPage = loadable(() => import('pages/OAuth'), {
    fallback: <HomePageLoading />
});
const ErrorPage = loadable(() => import('pages/NotFound'), {
    fallback: <HomePageLoading />
});


export const publicRoutes = [
    {path: ROUTE_HOME, component: HomePage},
    {path: '/:categoryName', component: QuestionsPage},
    {path: ROUTE_LOGIN, component: LoginPage},
    {path: ROUTE_SIGNUP, component: SignUpPage},
    {path: ROUTE_OAUTH, component: OAuthPage},
    {path: ROUTE_ERROR, component: ErrorPage},
    {path: '*', component: ErrorPage},
];

export const privateRoutes = [
    {path: ROUTE_HOME, component: HomePage},
    {path: '/:categoryName', component: QuestionsPage},
    {path: '/ask-question/:categoryName', component: AskQuestionPage},
    {path: '/:categoryName/:questionId', component: QuestionPage},
    {path: ROUTE_ERROR, component: ErrorPage},
    {path: '*', component: ErrorPage},
];