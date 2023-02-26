import {AuthActionCreator} from "./auth/action-creator";
import {CategoriesActionCreator} from "./categories/action-creator";

export const AllActionCreators  = {
    ...AuthActionCreator,
    ...CategoriesActionCreator,
}