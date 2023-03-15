import {questionsSlice} from './QuestionsSlice'

export const QuestionsActionCreator = {
    setIsLoading: (boolean) => dispatch => {
        dispatch(questionsSlice.actions.setIsLoading(boolean))
    },

    setQuestions: (questions) => dispatch => {
        dispatch(questionsSlice.actions.setQuestions(questions))
    },
    setSelectedQuestion: (question) => dispatch => {
        dispatch(questionsSlice.actions.setSelectedQuestion(question))
    },
}