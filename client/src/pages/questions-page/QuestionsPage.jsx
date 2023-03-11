import React, {useCallback, useEffect} from 'react';
import classes from './QuestionsPage.module.css'
import SectionCategoryAsk from "../../components/questions-page/section-category-ask/SectionCategoryAsk";
import SectionQuestionsList from "../../components/questions-page/section-questions-list/SectionQuestionsList";
import {fetchQuestions} from "../../http/questionAPI";
import _ from "lodash";
import {useActions} from "../../hooks/UseActions";
import {useSelector} from "react-redux";

const QuestionsPage = () => {
    const {categories, selectedCategory} = useSelector(state => state.categoriesReducer)
    const {setSelectedCategory, setQuestions} = useActions()

    const fetchQuestionsCallback = useCallback(() => {
        if(!(window.location.href.search('/all') === -1)) {
            fetchQuestions(null, null, null, null)
                .then(data => {
                    const sortedQuestions = _.sortBy(data.rows, 'createdAt').reverse()
                    setQuestions(sortedQuestions)
                })
                .catch(error => {
                    console.error(error)
                })
        } else {
            fetchQuestions(selectedCategory.id, null, null, null)
                .then(data => {
                    const sortedQuestions = _.sortBy(data.rows, 'createdAt').reverse()
                    setQuestions(sortedQuestions)
                })
                .catch(error => {
                    console.error(error)
                })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCategory.id]);

    const fetchCategory = useCallback(() => {
        const category = categories.find(
            category => category.id === JSON.parse(sessionStorage.getItem('categoryId'))
        )
        setSelectedCategory(category)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categories])

    useEffect(() => {
        fetchQuestionsCallback()
        fetchCategory()
    }, [fetchQuestionsCallback, fetchCategory])

    return (
        <div className={classes.questionsPage}>
            <SectionCategoryAsk/>
            <SectionQuestionsList/>
        </div>
    );
};

export default QuestionsPage;