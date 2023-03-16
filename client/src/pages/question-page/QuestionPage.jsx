import React, {useEffect} from 'react';
import classes from './QuestionPage.module.css'
import SectionAnswers from "../../components/question-page/section-answers/SectionAnswers";
import {useActions} from "../../hooks/UseActions";
import {fetchOneQuestion} from "../../http/questionAPI";
import {useParams} from "react-router-dom";
import useCategory from "../../hooks/UseCategory";

const QuestionPage = () => {
    const {setSelectedQuestion} = useActions()
    const questionId = useParams().questionId

    useCategory();

    useEffect(() => {
        fetchOneQuestion(questionId)
            .then(
                data => setSelectedQuestion(data)
            )
            .catch(
                error => console.error('Ошибка при получении данных:', error)
            )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={classes.questionPage}>
            <SectionAnswers/>
        </div>
    );
};

export default QuestionPage;