import {
    ROUTE_ERROR,
    ROUTE_LOGIN,
    ROUTE_SIGNUP,
    ROUTE_OAUTH,
    ROUTE_ASK_QUESTION,
    ROUTE_QUESTIONS,
    ROUTE_QUESTION
} from 'utils/consts';
import QuestionsPage from 'pages/Questions';
import LoginPage from 'pages/Login';
import SignupPage from 'pages/Signup';
import OAuthPage from 'pages/OAuth';
import NotFoundPage from 'pages/NotFound';
import AskQuestionPage from 'pages/AskQuestion';
import QuestionPage from 'pages/Question';


export const publicRoutes = [
    {path: `${ROUTE_QUESTIONS}/:categoryName`, component: QuestionsPage},
    {path: ROUTE_LOGIN, component: LoginPage},
    {path: ROUTE_SIGNUP, component: SignupPage},
    {path: ROUTE_OAUTH, component: OAuthPage},
    {path: ROUTE_ERROR, component: NotFoundPage},
];

export const privateRoutes = [
    {path: `${ROUTE_QUESTIONS}/:categoryName`, component: QuestionsPage},
    {path: ROUTE_ASK_QUESTION, component: AskQuestionPage},
    {path: `${ROUTE_QUESTION}/:categoryName/:questionId`, component: QuestionPage},
    {path: ROUTE_ERROR, component: NotFoundPage},
];