import {categoriesSlice} from "./CategoriesSlice";

export const CategoriesActionCreator = {
    setCategories: (categories) => dispatch => {
        dispatch(categoriesSlice.actions.setCategories(categories))
    },
    setSelectedCategory: (category) => dispatch => {
        sessionStorage.setItem('categoryId', category.id)
        dispatch(categoriesSlice.actions.setSelectedCategory(category))
    }
}
