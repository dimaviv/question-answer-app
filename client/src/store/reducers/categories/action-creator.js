import {categoriesSlice} from "./CategoriesSlice";

export const CategoriesActionCreator = {
    setSelectedCategory: (category) => dispatch => {
        localStorage.removeItem('categoryId')
        dispatch(categoriesSlice.actions.setSelectedCategory(category))
        localStorage.setItem('categoryId', category.id)
    }
}
