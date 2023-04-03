import {questionsSlice} from './QuestionsSlice'

export const QuestionsActionCreator = {
    setIsLoading: (boolean) => dispatch => {
        dispatch(questionsSlice.actions.setIsLoading(boolean))
    },

    setQuestions: (questions) => dispatch => {
        dispatch(questionsSlice.actions.setQuestions(questions))
    },
    setQuestion: (question) => dispatch => {
        dispatch(questionsSlice.actions.setQuestion(question))
    },
}