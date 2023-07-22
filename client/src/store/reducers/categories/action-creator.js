import {categoriesSlice} from "./CategoriesSlice";

export const CategoriesActionCreator = {
    setSelectedCategory: (category) => dispatch => {
        dispatch(categoriesSlice.actions.setSelectedCategory(category))
    }
}
