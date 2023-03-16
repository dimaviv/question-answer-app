import {questionsSlice} from './QuestionsSlice'

export const QuestionsActionCreator = {
    setQuestions: (questions) => dispatch => {
        dispatch(questionsSlice.actions.setQuestions(questions))
    },
    setSelectedQuestion: (question) => dispatch => {
        dispatch(questionsSlice.actions.setSelectedQuestion(question))
    },
}