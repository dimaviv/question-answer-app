import React, {useCallback, useEffect} from 'react';
import classes from './QuestionPage.module.css'
import SectionAnswers from "../../components/question-page/section-answers/SectionAnswers";
import {useActions} from "../../hooks/UseActions";
import {fetchOneQuestion} from "../../http/questionAPI";
import {useSelector} from "react-redux";

const QuestionPage = () => {
    const {setSelectedQuestion, setSelectedCategory} = useActions()
    const {categories} = useSelector(state => state.categoriesReducer)

    const questionId = JSON.parse(sessionStorage.getItem('questionId'))

    const fetchCategoryCallback = useCallback(() => {
        const category = categories.find(
            category => category.id === JSON.parse(sessionStorage.getItem('categoryId'))
        )
        setSelectedCategory(category)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categories])

    const fetchOneQuestionCallback = useCallback(() => {
        fetchOneQuestion(questionId)
            .then(
                data => setSelectedQuestion(data)
            )
            .catch(
                error => console.error(error)
            )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [questionId])

    useEffect(() => {
        fetchCategoryCallback()
        fetchOneQuestionCallback()
    }, [fetchCategoryCallback, fetchOneQuestionCallback])

    return (
        <div className={classes.questionPage}>
            <SectionAnswers/>
        </div>
    );
};

export default QuestionPage;