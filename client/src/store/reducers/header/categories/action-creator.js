import {categoriesSlice} from "./CategoriesSlice";

export const CategoriesActionCreator = {
    setCategories: (categories) => dispatch => {
        dispatch(categoriesSlice.actions.setCategories(categories))
    },
    setQuestionCategory: (category) => dispatch => {
        dispatch(categoriesSlice.actions.setQuestionCategory(category))
    }
}
