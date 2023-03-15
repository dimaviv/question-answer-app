import React, {useCallback, useEffect} from 'react';
import classes from './QuestionsPage.module.css'
import SectionCategoryAsk from "../../components/questions-page/section-category-ask/SectionCategoryAsk";
import SectionQuestionsList from "../../components/questions-page/section-questions-list/SectionQuestionsList";
import {fetchQuestions} from "../../http/questionAPI";
import {useActions} from "../../hooks/UseActions";
import {useSelector} from "react-redux";

const QuestionsPage = () => {
        const {selectedCategory, categories} = useSelector(state => state.categoriesReducer)
        const {setQuestions, setSelectedCategory, setIsLoading} = useActions()

        const fetchCategoryCallback = useCallback(() => {
            if (sessionStorage.getItem('categoryId')) {
                const category = categories.find(
                    category => category.id === JSON.parse(sessionStorage.getItem('categoryId'))
                )
                setSelectedCategory(category)
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [categories])



        useEffect(() => {
            fetchCategoryCallback()
            fetchQuestions(
                (!(window.location.href.search('/all') === -1) ? null : selectedCategory.id),
                null,
                null,
                null
            )
                .then(data => {
                    setIsLoading(true)
                    setQuestions(data.rows)
                    setIsLoading(false)
                })
                .catch(error =>
                    console.error('Ошибка при получении данных:', error)
                )
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [selectedCategory.id, fetchCategoryCallback])

        return (
            <div className={classes.questionsPage}>
                <SectionCategoryAsk/>
                <SectionQuestionsList/>
            </div>
        );
    }
;

export default QuestionsPage;