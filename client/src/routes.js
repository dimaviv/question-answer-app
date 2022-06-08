import Admin from "./pages/Admin";
import Question from "./pages/Question";
import Questions from "./pages/Questions";
import Profile from "./pages/Profile";
import Auth from  "./pages/Auth";
import {ADMIN_ROUTE, QUESTION_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, QUESTIONS_ROUTE, PROFILE_ROUTE} from "./utils/consts";

export const authRoutes = [{
        path: ADMIN_ROUTE,
        Component: Admin
    },{
    path: PROFILE_ROUTE,
    Component: Profile
}]
export const publicRoutes = [{
    path: LOGIN_ROUTE,
    Component: Auth
},{
    path: REGISTRATION_ROUTE,
    Component: Auth
},{
    path: QUESTION_ROUTE + '/:id',
    Component: Question
},{
    path: QUESTIONS_ROUTE,
    Component: Questions
}
]