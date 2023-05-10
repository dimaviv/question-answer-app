import {questionsSlice} from './QuestionsSlice'

export const QuestionsActionCreator = {
    setQuestions: (questions) => dispatch => {
        dispatch(questionsSlice.actions.setQuestions(questions))
    },
    setQuestion: (question) => dispatch => {
        dispatch(questionsSlice.actions.setQuestion(question))
    },
}