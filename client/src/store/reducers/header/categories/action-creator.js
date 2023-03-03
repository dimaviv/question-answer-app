import {categoriesSlice} from "./CategoriesSlice";

export const CategoriesActionCreator = {
    setCategories: (categories) => dispatch => {
        dispatch(categoriesSlice.actions.setCategories(categories))
    },
    setSelectedCategory: (category) => dispatch => {
        localStorage.removeItem('categoryId')
        dispatch(categoriesSlice.actions.setSelectedCategory(category))
        localStorage.setItem('categoryId', category.id)
    }
}
