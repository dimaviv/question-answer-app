import {categoriesSlice} from "./CategoriesSlice";

export const CategoriesActionCreator = {
    setCategories: (categories) => dispatch => {
        dispatch(categoriesSlice.actions.setCategories(categories))
    },

    setSelectedCategory: (category) => dispatch => {
        dispatch(categoriesSlice.actions.setSelectedCategory(category))
    }
}
