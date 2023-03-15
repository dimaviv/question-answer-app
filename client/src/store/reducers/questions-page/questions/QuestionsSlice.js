import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    questions: [],
    question: {},
    isLoading: false,
}

export const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        setQuestions(state, action) {
            state.questions = action.payload
        },
        setSelectedQuestion(state,action) {
            state.question = action.payload
        },

        setIsLoading(state, action) {
            state.isLoading = action.payload
        },
    }
})

export default questionsSlice.reducer;