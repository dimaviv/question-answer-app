import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    questions: [],
    question: {},
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
    }
})

export default questionsSlice.reducer;