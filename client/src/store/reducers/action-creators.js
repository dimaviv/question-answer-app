import {AuthActionCreator} from "./auth/action-creator";
import {CategoriesActionCreator} from "./categories/action-creator";
import {LayoutActionCreator} from "./layout/action-creator";
import {QuestionsActionCreator} from "./questions/action-creator";

export const AllActionCreators  = {
    ...AuthActionCreator,
    ...CategoriesActionCreator,
    ...QuestionsActionCreator,
    ...LayoutActionCreator,
}