import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    questionCategory: {}
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories(state, action) {
           state.categories = action.payload
        },
        setQuestionCategory(state,action) {
            state.questionCategory = action.payload
        }
    }
})

export default categoriesSlice.reducer;