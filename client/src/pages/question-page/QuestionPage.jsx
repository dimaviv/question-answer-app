import React, {useCallback, useEffect} from 'react';
import classes from './QuestionPage.module.css'
import SectionAnswers from "../../components/question-page/section-answers/SectionAnswers";
import {useActions} from "../../hooks/UseActions";
import {fetchOneQuestion} from "../../http/questionAPI";

const QuestionPage = () => {
    const {setSelectedQuestion} = useActions()

    const fetchOneQuestionCallback = useCallback(() => {
        fetchOneQuestion(sessionStorage.getItem('questionId'))
            .then(
                data => setSelectedQuestion(data)
            )
            .catch(
                error => console.error('Ошибка при получении данных:', error)
            )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sessionStorage.getItem('questionId')])

    useEffect(() => {
        fetchOneQuestionCallback()
    }, [fetchOneQuestionCallback])

    return (
        <div className={classes.questionPage}>
            <SectionAnswers/>
        </div>
    );
};

export default QuestionPage;