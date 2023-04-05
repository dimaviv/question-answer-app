import {AuthActionCreator} from "./login-page/auth/action-creator";
import {CategoriesActionCreator} from "./header/categories/action-creator";
import {DarkModeActionCreator} from "./header/dark-mode/action-creator";
import {QuestionsActionCreator} from "./questions-page/questions/action-creator";

export const AllActionCreators  = {
    ...AuthActionCreator,
    ...CategoriesActionCreator,
    ...QuestionsActionCreator,
    ...DarkModeActionCreator,
}