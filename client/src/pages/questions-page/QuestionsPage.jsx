import React, {useEffect} from 'react';
import classes from './QuestionsPage.module.css'
import SectionCategoryAsk from "../../components/questions-page/section-category-ask/SectionCategoryAsk";
import SectionQuestionsList from "../../components/questions-page/section-questions-list/SectionQuestionsList";
import {fetchQuestions} from "../../http/questionAPI";
import {useActions} from "../../hooks/UseActions";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import useCategory from "../../hooks/UseCategory";

const QuestionsPage = () => {
        const {selectedCategory} = useSelector(state => state.categoriesReducer)
        const {setQuestions, setIsLoading} = useActions()
        const categoryName = useParams().categoryId

        useCategory();

        useEffect(() => {
            fetchQuestions(
                (categoryName === 'all' ? null : selectedCategory.id),
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
        }, [selectedCategory])

        return (
            <div className={classes.questionsPage}>
                <SectionCategoryAsk/>
                <SectionQuestionsList/>
            </div>
        );
    }
;

export default QuestionsPage;