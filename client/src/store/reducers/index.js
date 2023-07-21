import authReducer from "./auth/AuthSlice"
import categoriesReducer from "./categories/CategoriesSlice"
import layoutReducer from "./layout/LayoutSlice"
import questionsReducer from "./questions/QuestionsSlice"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    authReducer,
    categoriesReducer,
    questionsReducer,
    layoutReducer
}