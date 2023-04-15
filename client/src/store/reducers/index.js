import authReducer from "./login-page/auth/AuthSlice"
import categoriesReducer from "./header/categories/CategoriesSlice"
import darkModeReducer from "./header/dark-mode/DarkModeSlice"
import questionsReducer from "./questions-page/questions/QuestionsSlice"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    authReducer,
    categoriesReducer,
    questionsReducer,
    darkModeReducer,
}